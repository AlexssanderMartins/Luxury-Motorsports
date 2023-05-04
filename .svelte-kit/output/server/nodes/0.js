import * as universal from '../entries/pages/_layout.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/entry/_layout.svelte.b89bb434.js","_app/immutable/chunks/index.7cf8fd15.js","_app/immutable/chunks/index.71f4be7d.js","_app/immutable/entry/_layout.js.984db11e.js","_app/immutable/chunks/_layout.da46b06b.js"];
export const stylesheets = ["_app/immutable/assets/_layout.feceace9.css"];
export const fonts = [];
