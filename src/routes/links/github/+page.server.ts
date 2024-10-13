import { redirect } from "@sveltejs/kit";

export async function load() {
  throw redirect(303, 'https://github.com/u16rogue');
}
