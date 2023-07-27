/* eslint-disable n/prefer-global/process */
import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import AutoImport from 'unplugin-auto-import/vite'
import UnoCSS from 'unocss/vite'
import { quasar } from '@quasar/vite-plugin'
import { QuasarResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',

  define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version),
  },

  build: {
    outDir: './dist',
  },

  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },

  server: {
    https: false,
  },

  plugins: [
    vue(),
    Pages(),
    Layouts(),
    UnoCSS(),
    quasar({
      autoImportComponentCase: 'pascal',
    }),
    Components({
      extensions: ['vue', 'md'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [QuasarResolver()],
      dts: false,
    }),
    AutoImport({
      include: [
        /\.js$/,
        /\.vue$/, /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      imports: [
        'vue',
        'vue-router',
        'vue/macros',
        // '@vueuse/core',
        {
          axios: [
            ['default', 'axios'],
          ],
        },
      ],
      dirs: [
        'src/composables',
        'src/stores',
        'src/services',
        'src/directives',
      ],
      vueTemplate: true,
      dts: false,
      eslintrc: {
        enabled: true, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
    }),
  ],
})
