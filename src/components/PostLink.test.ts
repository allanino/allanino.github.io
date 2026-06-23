import { describe, it, expect, vi, beforeEach } from 'vitest';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { getEntry } from 'astro:content';
import PostLink from './PostLink.astro';

describe('PostLink.astro', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders a link with correct URL and title', async () => {
    vi.mocked(getEntry).mockResolvedValue({
      id: '2023-10-27-my-blog-post.md',
      data: {
        title: 'My Awesome Blog Post',
        categories: ['math'],
      },
    } as any);

    const container = await AstroContainer.create();
    const result = await container.renderToString(PostLink, {
      props: { file: '2023-10-27-my-blog-post.md' },
    });

    expect(getEntry).toHaveBeenCalledWith('blog', '2023-10-27-my-blog-post');
    expect(result).toContain('href="/blog/my-blog-post"');
    expect(result).toContain('My Awesome Blog Post');
  });

  it('renders a link with custom text', async () => {
    vi.mocked(getEntry).mockResolvedValue({
      id: '2023-10-27-my-blog-post.md',
      data: {
        title: 'My Awesome Blog Post',
        categories: ['math'],
      },
    } as any);

    const container = await AstroContainer.create();
    const result = await container.renderToString(PostLink, {
      props: { file: '2023-10-27-my-blog-post.md', text: 'Read this post!' },
    });

    expect(getEntry).toHaveBeenCalledWith('blog', '2023-10-27-my-blog-post');
    expect(result).toContain('href="/blog/my-blog-post"');
    expect(result).toContain('Read this post!');
    expect(result).not.toContain('My Awesome Blog Post');
  });

  it('normalizes uppercase letters and file extensions in the lookup key', async () => {
    vi.mocked(getEntry).mockImplementation(async (collection, id) => {
      if (collection === 'blog' && id === 'a-mais-bela-formula-da-matematica-parte-i') {
        return {
          id: 'a-mais-bela-formula-da-matematica-parte-i.mdx',
          data: {
            title: 'A mais bela fórmula da Matemática (Parte I)',
            categories: ['math'],
          },
        } as any;
      }
      return null as any;
    });

    const container = await AstroContainer.create();
    const result = await container.renderToString(PostLink, {
      props: { file: 'a-mais-bela-formula-da-matematica-parte-I.mdx' },
    });

    expect(getEntry).toHaveBeenCalledWith('blog', 'a-mais-bela-formula-da-matematica-parte-i');
    expect(result).toContain('href="/blog/a-mais-bela-formula-da-matematica-parte-i"');
  });

  it('throws an error if post is not found', async () => {
    vi.mocked(getEntry).mockResolvedValue(null as any);

    const container = await AstroContainer.create();
    
    await expect(
      container.renderToString(PostLink, {
        props: { file: 'non-existent.md' },
      })
    ).rejects.toThrow('Post "non-existent.md" not found.');
  });
});
