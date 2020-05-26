<template>
  <div>
    <carousel></carousel>
    <about></about>
    <to-action></to-action>
    <footer-app></footer-app>
  </div>
</template>

<script>
import { config } from '@/env'

// Components
import Carousel from '~/components/home/Carousel'
import About from '~/components/home/About'
import ToAction from '@/components/global/ToAction'
import FooterApp from '@/components/global/Footer'


export default {
  components: {
    Carousel,
    About,
    ToAction,
    FooterApp
  },
  head() {
    let title = 'Rikell Vargas & Tuesta',
      description = 'Somos expertos en el ámbito del litigio, lo cual nos permite dar solución a incertidumbres jurídicas a través de diferentes mecanismos legales, pensando en el mejor bienestar para el cliente.',
      appUrl = config.appUrl

    return {
      meta: [
        /* Facebook */
        {property: 'og:image', content: 'https://abogados.josejollja.com/wp-content/uploads/2020/05/logo-abogado.png' },
        {property: 'og:url', content: `${appUrl}`},
        {property: 'og:title', content: title},
        {property: 'og:site_name', content: title},
        {property: 'og:description', content: description},

        /* Twitter */
        {name: 'twitter:url', content: `${appUrl}`},
        {name: 'twitter:image', content: 'https://abogados.josejollja.com/wp-content/uploads/2020/05/logo-abogado.png' },
        {name: 'twitter:title', content: title},
        {name: 'twitter:description', content: description},
      ]
    }
  }
}
</script>

<style lang="scss">
@import '../scss/variables';
@import '../scss/bootstrap_custom';
</style>
