import { sveltekit } from '@sveltejs/kit/vite';
import { vitePluginEvmts } from '@evmts/vite-plugin';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit(), vitePluginEvmts() ]
});
