<template>
  <div>
    <carousel></carousel>
    <about></about>
    <to-action></to-action>
    <footer-app></footer-app>
  </div>
</template>

<script>
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
    return {
      meta: [
        { hid: 'fbimage', property: 'og:image', content: 'https://abogados.josejollja.com/wp-content/uploads/2020/05/logo-abogado.png' },
      ]
    }
  }
}
</script>

<style lang="scss">
@import '../scss/variables';
@import '../scss/bootstrap_custom';
</style>
