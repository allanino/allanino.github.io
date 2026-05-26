import { describe, it, expect, vi, beforeEach } from 'vitest';
import { GET } from './rss.xml.js';
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { getPostPath } from '../utils/blog';

// Mock dependencies
vi.mock('@astrojs/rss', () => ({
  default: vi.fn((options) => options),
}));

vi.mock('astro:content', () => ({
  getCollection: vi.fn(),
}));

vi.mock('../utils/blog', () => ({
  getPostPath: vi.fn(),
}));

describe('rss.xml.js', () => {
  const mockBlogPosts = [
    {
      data: {
        title: 'Post 1',
        date: new Date('2023-01-01'),
        description: 'Description 1',
      },
    },
    {
      data: {
        title: 'Post 2',
        date: new Date('2023-01-02'),
        // No description to test fallback
      },
    },
  ];

  beforeEach(() => {
    vi.clearAllMocks();

    // Set up default mock return values
    getCollection.mockResolvedValue(mockBlogPosts);

    getPostPath.mockImplementation((post) => {
      if (post.data.title === 'Post 1') return '/blog/post-1';
      return '/blog/post-2';
    });
  });

  it('should call rss with the correct site from context', async () => {
    const mockContext = {
      site: new URL('https://example.com'),
    };

    const result = await GET(mockContext);

    expect(getCollection).toHaveBeenCalledWith('blog');
    expect(rss).toHaveBeenCalledWith(
      expect.objectContaining({
        title: 'Allan Costa',
        description: 'Mathematics, Programming, and Philosophy',
        site: mockContext.site,
      })
    );
    expect(result.site).toBe(mockContext.site);
  });

  it('should fallback to default site if context.site is not provided', async () => {
    const mockContext = {};

    const result = await GET(mockContext);

    expect(rss).toHaveBeenCalledWith(
      expect.objectContaining({
        site: 'https://allanino.github.io',
      })
    );
    expect(result.site).toBe('https://allanino.github.io');
  });

  it('should correctly map blog posts to RSS items', async () => {
    const mockContext = {};

    const result = await GET(mockContext);

    expect(result.items).toHaveLength(2);

    // Check first item mapping
    expect(result.items[0]).toEqual({
      title: 'Post 1',
      pubDate: mockBlogPosts[0].data.date,
      description: 'Description 1',
      link: '/blog/post-1',
    });

    // Check second item mapping (testing fallback description)
    expect(result.items[1]).toEqual({
      title: 'Post 2',
      pubDate: mockBlogPosts[1].data.date,
      description: '',
      link: '/blog/post-2',
    });

    expect(getPostPath).toHaveBeenCalledTimes(2);
    expect(getPostPath).toHaveBeenNthCalledWith(1, mockBlogPosts[0]);
    expect(getPostPath).toHaveBeenNthCalledWith(2, mockBlogPosts[1]);
  });
});
