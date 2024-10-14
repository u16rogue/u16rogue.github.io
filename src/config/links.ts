export type LinkEntryRoute = {
  meta?: string[],
  type: 'route',
  id: string,
  name?: string,
  route: string,
};

export type LinkEntrySeparator = {
  meta?: string[],
  type: 'separator',
};

export type LinkEntry = LinkEntryRoute | LinkEntrySeparator;
export type LinkEntries = Array<LinkEntry>;

const SEPARATOR: LinkEntry = { type: 'separator' };

//------------------------------------------------------------------------------

const internal: LinkEntries = [
  { type: 'route', id: 'page',      name: 'Home',      route: '/' },
  { type: 'route', id: 'portfolio', name: 'Portfolio', route: '/portfolio'},
  { type: 'route', id: 'articles',  name: 'Articles',  route: '/articles'},
];

const external: LinkEntries = [
  { type: 'route', id: 'github', name: 'GitHub', route: 'https://github.com/u16rogue', }
];

export const config: { links: LinkEntries, nav: LinkEntries } = {
  // Controls `/links/[target]`
  links: [
    ...internal,
    ...external,
  ],

  // Controls the nav drop down
  nav: [
    ...internal,
    SEPARATOR,
    ...external,
  ],
};
