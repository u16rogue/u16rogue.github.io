import * as mdh from "core/mdhelper";

export async function load({ url }: any) {
  const load_articles = async function () {
    const entries = [];
    for (const entry of await mdh.cx_get_local_entries()) {
      const metadata = await mdh.parse_md_metadata(entry);
      if (!metadata.id) {
        continue;
      }
      entries.push({
        url: `${(url as URL).pathname}/read/${metadata.id}`,
        ...metadata,
      });
    }
    return entries.sort((a, b) => {
      const a_date = new Date(a.stamps?.edited || a.stamps?.added || a.stamps?.created || '');
      const b_date = new Date(b.stamps?.edited || b.stamps?.added || b.stamps?.created || '');
      if (a_date === b_date) {
        return 0;
      } else if (a_date > b_date) {
        return -1;
      } else if (a_date < b_date) {
        return 1;
      }
      return 0;
    });
  }

  return {
    articles: await load_articles(),
    meta: {
      page: {
        title: 'Articles',
      },
      nav: {
        title: 'Articles',
        route: '/page/articles',
      },
    },
  };
}
