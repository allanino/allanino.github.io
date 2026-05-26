import { vi } from 'vitest';

vi.mock('astro:content', async () => {
  const { z } = await import('zod');
  return {
    defineCollection: (config: any) => config,
    z
  };
});

vi.mock('astro/loaders', () => {
  return {
    glob: () => ({ name: 'glob-mock' })
  };
});
