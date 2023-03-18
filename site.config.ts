import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '7bae684137dc4d06ab82587edb9d7199',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Dana Wang Blog',
  domain: 'me.datalab.icu',
  author: 'Dana Wang',

  // open graph metadata (optional)
  description: 'Perosnal Blog',

  // social usernames (optional)
  twitter: 'wdzhwsh4067',
  github: 'wdzhwsh4067',
  linkedin: 'wdzhwsh4067',
  mastodon: 'wdzhwsh4067', // optional mastodon profile URL, provides link verification
  newsletter: 'wdzhwsh4067', // optional newsletter URL
  youtube: 'wdzhwsh4067', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

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
  pageUrlAdditions: {
    '/pageUrlAdditions': '463f8e948aea4b298c035a355e3dceb7'
  },
  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'About',
      pageId: 'f1199d37579b41cbabfc0b5174f4256a'
    },
    {
      title: 'Contact',
      pageId: '6a29ebcb935a4f0689fe661ab5f3b8d1'
    }
  ]
})
