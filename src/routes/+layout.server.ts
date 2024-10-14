import { config as config_links } from "config/links";

export const prerender = true;

export async function load({ url }: any) {

  const get_current = function () {
    const pre = /(\/([\w]*)\/?)/.exec(url.pathname)?.[0] || null;
    switch (pre) {
      case '/':
        return 'page';
      case undefined:
      case null:
        return '[???]';
      default:
        return pre.substring(1) || '[???]';
    }
  };

  return {
    name: 'u16rogue',
    colors: [ '#7d5935', '#6c4476', '#2b7260', '#395d81', '#3f6a3c', '#3a7e81', '#7f7a38', '#7c363e', '#395d81', ],
    nav: config_links.nav,
    current: get_current(),
  };
}
