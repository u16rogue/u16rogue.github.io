import { config as config_links } from "config/links";
import { config as config_meta } from "config/meta";

export const prerender = true;

export async function load() {
  return {
    name: config_meta.name || null,
    pfp: config_meta.pfp,
    colors: [ '#7d5935', '#6c4476', '#2b7260', '#395d81', '#3f6a3c', '#3a7e81', '#7f7a38', '#7c363e', '#395d81', ],
    nav: config_links.nav,
  };
}
