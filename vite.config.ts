import { defineConfig } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import react from '@vitejs/plugin-react-swc';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
export default defineConfig({
  server: {
    port: 3000,
  },

  plugins : [
    react(),
    vanillaExtractPlugin(),
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