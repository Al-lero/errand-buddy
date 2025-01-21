import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { nodeResolve } from '@rollup/plugin-node-resolve'; // add this import
import { jsx } from 'esbuild-plugin-jsx'; // new import

export default defineConfig({
    plugins: [react(), nodeResolve()],
    esbuild: {
        plugins: [jsx({ loader: { '.js': 'jsx', '.jsx': 'jsx' } })],
    },
    resolve: {
        alias: {
            react: path.resolve('node_modules/react'),
        },
    },
});
