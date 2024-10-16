import { error } from "@sveltejs/kit";
import * as mdh from "core/mdhelper";

export async function load({ params }: any) {
  for (const entry of await mdh.cx_get_local_entries()) {
    const metadata = await mdh.parse_md_metadata(entry);
    if (metadata.id !== params?.id) {
      continue;
    }
    return {
      metadata,
      content: await mdh.parse_md_content(entry),
      meta: {
        page: {
          title: metadata?.title || 'Article',
        },
        nav: {
          title: 'Article',
          route: '/page/articles',
        },
      },
    };
  }
  throw error(404);
}
