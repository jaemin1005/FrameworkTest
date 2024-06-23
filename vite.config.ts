import { defineConfig } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
export default defineConfig({
  server: {
    port: 3000,
  },

  plugins : [
    resolve(),
    commonjs(),
    visualizer ({open : true})
  ],

  build: {
    target: "es2015",
    outDir: 'vite',
    sourcemap: true,
  },
});