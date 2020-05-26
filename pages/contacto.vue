<template>
  <div v-if="page">
    <banner :pageData="page"></banner>
    <form-contact :ubication="page.contacto.direccion" :mapa="page.contacto.mapa"></form-contact>
    <footer-app></footer-app>
  </div>
</template>

<script>
import { config } from '@/env'

// Components
import Banner from '@/components/contact/Banner'
import FormContact from '@/components/contact/Form'
import FooterApp from '@/components/global/Footer'

// Queries
import contact from '@/apollo/queries/contact'

export default {
  components: {
    Banner,
    FormContact,
    FooterApp
  },
  head() {
    let title = 'Contacto - Rikell Vargas & Tuesta',
      description = 'Somos expertos en el ámbito del litigio, lo cual nos permite dar solución a incertidumbres jurídicas a través de diferentes mecanismos legales, pensando en el mejor bienestar para el cliente.',
      appUrl = config.appUrl

    let image = ''

    if(this.page) {
      image = this.page.featuredImage.mediaItemUrl
    }
      
    return {
        title: title,
        meta: [
          // Facebook OpenGraph
          {property: 'og:url', content: `${appUrl}/contacto`},
          {property: 'og:title', content: title},
          {property: 'og:site_name', content: title},
          {property: 'og:description', content: description},
          {property: 'og:image', content: image},

          // Twitter OpenGraph
          {name: 'twitter:url', content: `${appUrl}/contacto`},
          {name: 'twitter:image', content: image},
          {name: 'twitter:title', content: title},
          {name: 'twitter:description', content: description}
        ]
      }
  },
  apollo: {
    page: {
      prefetch: true,
      query: contact
    }
  }
}
</script>

<style lang="scss">
@import '../scss/variables';
@import '../scss/bootstrap_custom';
</style>
