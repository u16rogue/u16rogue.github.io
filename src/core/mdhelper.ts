import { compile as mdsvex_compile } from "mdsvex";
import { config } from "config/articles";
import * as fs from "fs";
import * as path from "path";

export type MarkdownMetadata = {
  id?: string,
  title?: string,
  description?: string,
  thumbnail?: string,
  tags?: Array<string>,
  stamps?: {
    created?: string,
    added?:   string,
    edited?:  string
  }
};

export type MarkdownContent = {
  code: string,
  data: {},
  map: string,
};

export async function cx_get_local_entries(): Promise<Array<string>> {
  const entries = [];
  for (const localentry of fs.readdirSync(config.path.local)) {
    entries.push(fs.readFileSync(path.join(config.path.local, localentry), 'utf-8'));
  }
  return entries;
}

export async function parse_md_metadata(data: string): Promise<MarkdownMetadata> {
  const contents = data;
  const metadata = JSON.parse(/<!--\n({[^>]*})\n-->/g.exec(contents)?.[1] || '{}');
  return {
    id: metadata?.id,
    title: metadata?.title,
    description: metadata?.description,
    thumbnail: metadata?.thumbnail,
    stamps: {
      created: metadata?.stamps?.created,
      added:   metadata?.stamps?.added,
      edited:  metadata?.stamps?.edited,
    },
  };
}

export async function parse_md_content(data: string): Promise<MarkdownContent> {
  return mdsvex_compile(data, { highlight: { highlighter: (code: string, lang: string) => { return `<pre><code>${code}</code></pre>`; } } });
}

export async function parse_md(data: string): Promise<{ metadata: MarkdownMetadata, content: MarkdownContent }> {
  return { metadata: await parse_md_metadata(data), content: await parse_md_content(data) };
}
