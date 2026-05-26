import { describe, expect, it } from 'vitest';
import { collections } from './content.config';

describe('blog schema', () => {
  const schema = collections.blog.schema;

  it('validates minimal required fields', () => {
    const validMinimal = {
      title: 'Minimal Post',
      date: new Date('2024-01-01'),
    };

    const result = schema.safeParse(validMinimal);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.tags).toEqual([]); // default value
      expect(result.data.math).toBe(false); // default value
    }
  });

  it('validates all valid fields', () => {
    const validFull = {
      title: 'Full Post',
      description: 'A detailed description',
      date: new Date('2024-01-01T12:00:00Z'),
      tags: ['astro', 'testing'],
      image: 'https://example.com/image.jpg',
      math: true,
    };

    const result = schema.safeParse(validFull);
    expect(result.success).toBe(true);
  });

  it('validates all valid fields with complex image object', () => {
    const validFull = {
      title: 'Full Post',
      date: new Date('2024-01-01'),
      image: {
        feature: 'https://example.com/feature.jpg',
        credit: 'Photographer',
        creditlink: 'https://example.com'
      }
    };

    const result = schema.safeParse(validFull);
    expect(result.success).toBe(true);
  });

  it('rejects missing required fields (title)', () => {
    const invalid = {
      date: new Date('2024-01-01'),
    };

    const result = schema.safeParse(invalid);
    expect(result.success).toBe(false);
  });

  it('rejects missing required fields (date)', () => {
    const invalid = {
      title: 'Missing Date',
    };

    const result = schema.safeParse(invalid);
    expect(result.success).toBe(false);
  });

  it('rejects incorrect field types', () => {
    const invalidTypes = {
      title: 123, // should be string
      date: 'not-a-date', // should be date (or coercible to date)
      tags: 'astro', // should be array of strings
      math: 'yes', // should be boolean
    };

    const result = schema.safeParse(invalidTypes);
    expect(result.success).toBe(false);
  });
});
