// -*- coding: utf-8 -*-
import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '7bae684137dc4d06ab82587edb9d7199',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Dana Wang Blog',
  domain: 'nextjs-notion-starter-kit.transitivebullsh.it',
  author: 'Travis Fischer',

  // open graph metadata (optional)
  description: 'Perosnal Blog',

  // social usernames (optional)
  twitter: 'transitive_bs',
  github: 'transitive-bullshit',
  linkedin: 'fisch2',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: true,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'About',
      pageId: '0f657fa8da414a0db9efa8d0c00c4f9e'
    },
    {
      title: 'Projects',
      pageId: '5ea0cbed22984d9aa6352e622d700b6b'
    },
    {
      title: 'Articles',
      pageId: 'a9fd9dafae9a49d9860d15946a95c0f1'
    },
    {
      title: 'Disk',
      pageId: 'f1549325033d460a90b336dcb5a6e858'
    },
    {
      title: 'Contact',
      pageId: 'abb91a0891994dddb0167b50da6cd53c'
    }
  ]
})