import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { enhancedImages } from '@sveltejs/enhanced-img';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
		enhancedImages(),
    sveltekit(),
  ],
})
