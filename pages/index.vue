<template>
  <div v-if="page">
    <carousel></carousel>

    <about :content="page.content" :image="page.featuredImage"></about>

    <publications-banner :info="page.home"></publications-banner>

    <to-action></to-action>

    <form-contact></form-contact>

    <footer-app></footer-app>
  </div>
</template>

<script>
import { appConfig } from '@/env'

// Queries
import home from '@/apollo/queries/home'

// Components
import Carousel from '~/components/home/Carousel'
import About from '~/components/home/About'
import PublicationsBanner from '@/components/home/PublicationsBanner'
import ToAction from '@/components/global/ToAction'
import FormContact from '@/components/contact/Form'
import FooterApp from '@/components/global/Footer'


export default {
  components: {
    Carousel,
    About,
    PublicationsBanner,
    ToAction,
    FormContact,
    FooterApp
  },
  apollo: {
    page: {
      prefetch: true,
      query: home,
      fetchPolicy: 'no-cache'
    }
  },
  head() {
    let title = 'Rikell Vargas & Tuesta',
      description = appConfig.description,
      appUrl = appConfig.appUrl

    return {
      meta: [
        /* Facebook */
        {property: 'og:image', content: 'https://abogados.josejollja.com/wp-content/uploads/2020/05/logo-abogado.png' },
        {property: 'og:url', content: `${appUrl}`},
        {property: 'og:title', content: title},
        {property: 'og:site_name', content: title},
        {property: 'og:description', content: description},

        /* Whatsapp */
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
