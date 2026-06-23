import { describe, it, expect } from 'vitest';
import { getPostPath } from './blog';

describe('getPostPath', () => {
  it('should strip standard date prefix and extension', () => {
    const post = { id: '2023-10-27-my-blog-post.md', data: {} };
    expect(getPostPath(post)).toBe('/blog/my-blog-post');
  });

  it('should strip different extensions like .mdx', () => {
    const post = { id: '2023-10-27-another-post.mdx', data: {} };
    expect(getPostPath(post)).toBe('/blog/another-post');
  });

  it('should handle IDs without a date prefix', () => {
    const post = { id: 'no-date-post.md', data: {} };
    expect(getPostPath(post)).toBe('/blog/no-date-post');
  });

  it('should ignore array of categories and only use slug', () => {
    const post = { id: '2023-10-27-category-post.md', data: { categories: ['math', 'code'] } };
    expect(getPostPath(post)).toBe('/blog/category-post');
  });

  it('should ignore single string category in categories and only use slug', () => {
    const post = { id: '2023-10-27-category-post.md', data: { categories: 'math' } };
    expect(getPostPath(post)).toBe('/blog/category-post');
  });

  it('should ignore single category field and only use slug', () => {
    const post = { id: '2023-10-27-category-post.md', data: { category: 'code' } };
    expect(getPostPath(post)).toBe('/blog/category-post');
  });

  it('should handle missing data gracefully and only use slug', () => {
    const post = { id: '2023-10-27-category-post.md' };
    expect(getPostPath(post)).toBe('/blog/category-post');
  });
});
