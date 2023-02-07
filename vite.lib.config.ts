import vue from '@vitejs/plugin-vue';
import {defineConfig} from 'vite';
import {resolve} from 'path';
// @ts-ignore
import {terser} from 'rollup-plugin-terser';

export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'dist/lib',
    lib: {
      entry: resolve(__dirname, 'src/components/index.ts'),
      name: 'Gulu',
      fileName: format => `gulu.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
        plugins: [terser()]
      }
    }
  }
});