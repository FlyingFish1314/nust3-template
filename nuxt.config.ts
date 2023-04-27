// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['normalize.css'],
  build: {
    transpile: ['element-plus/es']
  },
  // 配置nuxt3的扩展模块
  modules: ['@pinia/nuxt', '@element-plus/nuxt', '@nuxtjs/eslint-module']
})
