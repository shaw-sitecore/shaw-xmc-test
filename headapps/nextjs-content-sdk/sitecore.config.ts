import { defineConfig } from '@sitecore-content-sdk/nextjs/config';

/**
 * @type {import('@sitecore-content-sdk/nextjs/config').SitecoreConfig}
 * See the documentation for `defineConfig`:
 * https://doc.sitecore.com/xmc/en/developers/content-sdk/the-sitecore-configuration-file.html
 */
export default defineConfig({
  generateStaticPaths: !process.env.DISABLE_SSG_FETCH,
  api: {
    edge: {
      contextId:
        process.env.SITECORE_EDGE_CONTEXT_ID ||
        process.env.NEXT_PUBLIC_SITECORE_EDGE_CONTEXT_ID ||
        '',
      clientContextId: process.env.NEXT_PUBLIC_SITECORE_EDGE_CONTEXT_ID,
      edgeUrl: process.env.SITECORE_EDGE_URL || process.env.NEXT_PUBLIC_SITECORE_EDGE_URL,
    },
  },
  defaultSite: process.env.SITECORE_EDITING_SECRET,
  defaultLanguage: process.env.NEXT_PUBLIC_DEFAULT_LANGUAGE || 'en',
  editingSecret: process.env.SITECORE_EDITING_SECRET,
  redirects: {
    enabled: false,
    locales: ['en'],
  },
  multisite: {
    enabled: false,
    useCookieResolution: () => process.env.VERCEL_ENV === 'preview',
  },
  personalize: {
    scope: process.env.NEXT_PUBLIC_PERSONALIZE_SCOPE,
    edgeTimeout: parseInt(process.env.PERSONALIZE_MIDDLEWARE_EDGE_TIMEOUT!, 10),
    cdpTimeout: parseInt(process.env.PERSONALIZE_MIDDLEWARE_EDGE_TIMEOUT!, 10),
  },
});
