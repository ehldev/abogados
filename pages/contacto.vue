<template>
  <div v-if="page">
    <banner :pageData="page"></banner>

    <!-- <form-contact :ubication="page.contacto.direccion" :correo="page.contacto.correo" :mapa="page.contacto.mapa" :backgroundImage="page.contacto.imagenOficina.mediaItemUrl"></form-contact> -->
    <form-contact></form-contact>

    <!-- Maps -->
    <div class="container maps">
      <div class="row">
          <div class="col-md-12">
              <!-- El iframe del mapa viene de la página de contacto -->
              <div v-if="page" v-html="page.contacto.mapa"></div>
          </div>
      </div>
    </div>

    <footer-app></footer-app>
  </div>
</template>

<script>
import { appConfig } from '@/env'

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
      description = appConfig.description,
      appUrl = appConfig.appUrl

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

          // Whatsapp OpenGraph
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

.maps {
  margin-top: 7rem;

  p,
  iframe {
    width: 100%;
  }
  
}
</style>
