const webpack = require('webpack');

// Add bootstrap in webpack
// https://github.com/nuxt/nuxt.js/issues/178

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nodetyped nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' },
      // { src: '/nm/jquery/jquery.min.js' }, // alternative local copy served in src/app.ts
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js' },
      { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js' }
    ],
    link: [
      // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' },
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/main.scss',
    //'~/assets/css/main.css',
    //'bootstrap/dist/css/bootstrap.min.css'
  ],
  /*
  ** Add axios globally
  */
  build: {
    vendor: [
      // 'jquery', 'popper.js',
      'axios'
    ],
    plugins: [
      // set shortcuts as global for bootstrap (only when included in build.vendor)
      /*new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })*/
    ]
    /*
    ** Run ESLINT on save
    */
    /*extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }*/
  },
  //plugins: ['~plugins/bootstrap.js']
}
