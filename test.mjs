import { getPostPath } from './src/utils/blog.ts';

const cases = [
  { input: { id: '2023-10-25-my-awesome-post.md' }, expected: '/blog/my-awesome-post' },
  { input: { id: '2023-10-25-my-awesome-post' }, expected: '/blog/my-awesome-post' },
  { input: { id: 'my-awesome-post.md' }, expected: '/blog/my-awesome-post' },
  { input: { id: 'my-awesome-post.mdx' }, expected: '/blog/my-awesome-post' },
  { input: { id: '2020-01-01-hello.world.md' }, expected: '/blog/hello.world' },
];

let failed = false;
for (const testCase of cases) {
  const result = getPostPath(testCase.input);
  if (result !== testCase.expected) {
    console.error(`Test failed for ${testCase.input.id}. Expected ${testCase.expected}, got ${result}`);
    failed = true;
  }
}
if (!failed) {
  console.log("All tests passed.");
}
