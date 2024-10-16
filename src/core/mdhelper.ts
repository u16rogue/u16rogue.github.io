import { compile as mdsvex_compile, escapeSvelte as mdsvex_escapesvelte } from "mdsvex";
import { config } from "config/articles";
import * as fs from "fs";
import * as path from "path";
import { createHighlighter } from "shiki";

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
    tags: metadata?.tags,
    stamps: {
      created: metadata?.stamps?.created,
      added:   metadata?.stamps?.added,
      edited:  metadata?.stamps?.edited,
    },
  };
}

const _highlighter = await createHighlighter({
  themes: [config.highlighter.theme],
  langs: config.highlighter.languages,
});

export async function parse_md_content(data: string): Promise<MarkdownContent> {
  return mdsvex_compile(data, {
    highlight: {
      highlighter: async (code: string, lang: string) => {
        return mdsvex_escapesvelte(_highlighter.codeToHtml(code, { lang, theme: config.highlighter.theme }));
      },
    }
  });
}

export async function parse_md(data: string): Promise<{ metadata: MarkdownMetadata, content: MarkdownContent }> {
  return { metadata: await parse_md_metadata(data), content: await parse_md_content(data) };
}
