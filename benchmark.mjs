import { performance } from 'perf_hooks';

// baseline
function getPostPathBaseline(post) {
  const slug = post.id.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/\.[^/.]+$/, '');
  return `/blog/${slug}`;
}

const DATE_PREFIX_REGEX = /^\d{4}-\d{2}-\d{2}-/;
const EXTENSION_REGEX = /\.[^/.]+$/;

function getPostPathOptimized(post) {
  const slug = post.id.replace(DATE_PREFIX_REGEX, '').replace(EXTENSION_REGEX, '');
  return `/blog/${slug}`;
}

const iterations = 10000000;
const post = { id: '2023-10-25-my-awesome-post.md' };

const start1 = performance.now();
for (let i = 0; i < iterations; i++) {
  getPostPathBaseline(post);
}
const end1 = performance.now();

const start2 = performance.now();
for (let i = 0; i < iterations; i++) {
  getPostPathOptimized(post);
}
const end2 = performance.now();

console.log(`Baseline: ${end1 - start1} ms`);
console.log(`Optimized: ${end2 - start2} ms`);
