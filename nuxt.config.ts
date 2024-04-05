// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },

    modules: ['@nuxtjs/tailwindcss', "@nuxt/fonts"],

    tailwindcss: {
        configPath: 'tailwind.config.js',
        cssPath: '~/assets/css/tailwind.css',
        exposeConfig: {
            level: 2
        },
    }
})