#!/usr/bin/env node
// Ensures NODE_ENV=production during Next.js build
// Fixes Windows environments where NODE_ENV=development is set globally
process.env.NODE_ENV = 'production';
require('child_process').execSync('npx next build', {
  stdio: 'inherit',
  env: { ...process.env, NODE_ENV: 'production' },
});
