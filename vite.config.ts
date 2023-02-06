import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import Markdown from 'vite-plugin-md';
// @ts-ignore
import {sourceCode} from './plugins/sourceCode.ts';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    Markdown(),
    sourceCode()
  ],
});
