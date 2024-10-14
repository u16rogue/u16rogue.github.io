import { config as config_links, type LinkEntryRoute } from "config/links";
import { config as config_meta } from "config/meta";

export const prerender = true;

export async function load({ url }: any) {

  const get_current = function () {
    return (config_links.links.find(x => x.type === 'route' && x.route.startsWith(url.pathname)) as LinkEntryRoute | undefined)?.name
      || /(\/([\w]*)\/?)/.exec(url.pathname)?.[0]?.substring(0, 8)
      || '[404]'
    ;
  };

  return {
    name: config_meta.name || null,
    colors: [ '#7d5935', '#6c4476', '#2b7260', '#395d81', '#3f6a3c', '#3a7e81', '#7f7a38', '#7c363e', '#395d81', ],
    nav: config_links.nav,
    current: get_current(),
  };
}
