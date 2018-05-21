const webpack = require('webpack')

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'Jou-Hsuan Wu | Portfolio',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: '吳柔萱作品集'
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Jou-Hsuan Wu | Portfolio"
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "http://jouhsuan.com/"
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "http://jouhsuan.com/ogimage.jpg"
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "吳柔萱作品集"
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Hind:400,600'
      }
    ]
  },
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#75e5b8'
  },
  /*
   ** Build configuration
   */
  css: [
    '~assets/main.scss'
  ],
  plugins: [{
    src: '~/plugins/vue-carousel',
    ssr: false
  }],
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        // '$': 'jquery',
        '_': 'lodash'
      })
    ]
  }
}