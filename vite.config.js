import * as path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
      target: 'es2015',
    lib: {
      formats: ['es', 'umd', 'iife'],
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'ajvFormats',
      //fileName: (format) => `ajv-formats.min.js`
    }
  }
});
