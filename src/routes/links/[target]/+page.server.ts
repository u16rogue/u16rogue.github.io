import { redirect } from "@sveltejs/kit";
import { config as config_links, type LinkEntryRoute } from "config/links";

export async function load({ params }: any) {
  throw redirect(303, (config_links.links.find(x => x.type === 'route' && x.id === params?.target) as (LinkEntryRoute | undefined))?.route || '/404');
}
