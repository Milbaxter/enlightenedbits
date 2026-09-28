import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://enlightenedbits.com',
  trailingSlash: 'always',
  server: { host: '127.0.0.1', port: 4330 },
});
