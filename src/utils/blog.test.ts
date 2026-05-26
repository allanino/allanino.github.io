import { describe, it, expect } from 'vitest';
import { getPostPath } from './blog';

describe('getPostPath', () => {
  it('should strip standard date prefix and extension with defaults to uncategorized', () => {
    const post = { id: '2023-10-27-my-blog-post.md', data: {} };
    expect(getPostPath(post)).toBe('/blog/uncategorized/my-blog-post');
  });

  it('should strip different extensions like .mdx with defaults to uncategorized', () => {
    const post = { id: '2023-10-27-another-post.mdx', data: {} };
    expect(getPostPath(post)).toBe('/blog/uncategorized/another-post');
  });

  it('should handle IDs without a date prefix with defaults to uncategorized', () => {
    const post = { id: 'no-date-post.md', data: {} };
    expect(getPostPath(post)).toBe('/blog/uncategorized/no-date-post');
  });

  it('should handle array of categories and pick the first one', () => {
    const post = { id: '2023-10-27-category-post.md', data: { categories: ['math', 'code'] } };
    expect(getPostPath(post)).toBe('/blog/math/category-post');
  });

  it('should handle single string category in categories', () => {
    const post = { id: '2023-10-27-category-post.md', data: { categories: 'math' } };
    expect(getPostPath(post)).toBe('/blog/math/category-post');
  });

  it('should handle single category field', () => {
    const post = { id: '2023-10-27-category-post.md', data: { category: 'code' } };
    expect(getPostPath(post)).toBe('/blog/code/category-post');
  });

  it('should handle empty categories array by defaulting to uncategorized', () => {
    const post = { id: '2023-10-27-category-post.md', data: { categories: [] } };
    expect(getPostPath(post)).toBe('/blog/uncategorized/category-post');
  });

  it('should handle missing data gracefully', () => {
    const post = { id: '2023-10-27-category-post.md' };
    expect(getPostPath(post)).toBe('/blog/uncategorized/category-post');
  });
});
