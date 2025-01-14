// -*- coding: utf-8 -*-
// 如果部署出错，且配置文件没有问题，很可能是某个页面，无法渲染，导致build出错，需要删除渲染出问题的页面，重新部署
// update：
// 1增加外链
// 2增加vercel分析@vercel/analytics
// 3取消角落的github跳转标签。
// 4调试成功在线视频播放
import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '605ef0a3c5eb453a98d8cccbddcf13ce',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: 'dde85c74-3bc9-4829-b62f-476b1b0a105a',
  name: 'Dana Wang Blog',
  // 这里是付费空间下自定义的域名！
  domain:'keephappy.notion.site',
  author: 'Dana Wang',

  // open graph metadata (optional)
  description: 'Perosnal Blog',

  // social usernames (optional)
  // twitter: 'transitive_bs',
  github: 'wdzhwsh4067',
  // linkedin: 'fisch2',
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
      pageId: '3bc1d91b883b422cb9aad28ad9ea32a1'
    },
    {
      title: 'Projects',
      pageId: '20d23fdaf513487e8cb521ba4ec377a1'
    },
    {
      title: 'Articles',
      pageId: '444cac5f7dbe4287a3deb3a66a5b114d'
    },
  ]
})  