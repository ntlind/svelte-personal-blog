import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { plugin as markdown } from 'vite-plugin-markdown'

const config: UserConfig = {
	plugins: [markdown({ mode: ['html', 'toc']}), sveltekit()]
};

export default config;
