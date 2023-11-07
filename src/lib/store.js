import { writable } from 'svelte/store';

/** @type {import('svelte/store').Writable<Array<import('viem').Address>>} */
export const addresses = writable([]);
/** @type {import('svelte/store').Writable<import('viem').Address>} */
export const selectedAddress = writable();
export const connected = writable(false);