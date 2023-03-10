import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    // sidebar: {
    //   '/docs': [
    //     {
    //       children: [
    //         {
    //           title: 'caidan',
    //           link: '/docs/Browser/Homologous.md',
    //         },
    //       ],
    //     },
    //   ],
    // },
    name: '面试题整理',
    nav: [
      {
        title: '指南',
        link: '/guide',
      },
      {
        title: 'Browser',
        link: '/browser',
      },
      {
        title: 'CSS',
        link: '/css',
      },
      {
        title: '工程化',
        link: '/engineering',
      },
      {
        title: 'JS',
        link: '/java-script',
      },
    ],
    footer: 'Copyright © 2023 BzIrs',
    logo: 'https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png',
    socialLinks: {
      github: 'https://github.com/bzirs/TreasureBook',
    },
  },
  favicons: [
    'https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png',
  ],
  base: '/TreasureBook',
  publicPath: '/TreasureBook/',
  // runtimePublicPath: {},
});
