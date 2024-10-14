import { redirect } from "@sveltejs/kit";
import { config as config_links, type LinkEntryRoute } from "config/links";

function extract_url(target: string): string {
  return (config_links.links.find(x => x.type === 'route' && x.id === target) as (LinkEntryRoute | undefined))?.route || '/';
}

export async function load({ params }: any) {
  throw redirect(303, extract_url(params?.target));
}
