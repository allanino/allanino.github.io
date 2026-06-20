import { getViteConfig } from 'astro/config';

export default getViteConfig({
  test: {
    environment: 'node',
    setupFiles: ['./test-setup.ts'],
  },
});
