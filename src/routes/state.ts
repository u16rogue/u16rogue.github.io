import { writable } from "svelte/store";

export type Nav = {
  title: string,
  route: string,
};

export const nav = writable<Nav>({
  title: '<err>',
  route: '/',
});
