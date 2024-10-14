export type ArticleMetadata = {
  id?: string,
  title?: string,
  stamps: {
    created: Date,
    added: Date,
    edited?: Date,
  },
};

export const config = {
  path: {
    local: './articles/local-markdown/',
  },
};
