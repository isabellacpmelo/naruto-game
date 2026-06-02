/* eslint-disable n/prefer-global/process */
import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import AutoImport from 'unplugin-auto-import/vite'
import UnoCSS from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE_URL || '/naruto-game/',

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
    host: true,
  },

  plugins: [
    vue(),
    Pages(),
    Layouts(),
    UnoCSS(),
    Components({
      extensions: ['vue', 'md'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: false,
    }),
    AutoImport({
      include: [
        /\.js$/,
        /\.vue$/, /\.vue\?vue/,
        /\.md$/,
      ],
      imports: [
        'vue',
        'vue-router',
        'vue/macros',
        '@vueuse/core',
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
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true,
      },
    }),
  ],
})
