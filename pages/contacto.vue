<template>
  <div>
    <banner></banner>
    <form-contact></form-contact>
    <footer-app></footer-app>
  </div>
</template>

<script>
import Banner from '@/components/contact/Banner'
import FormContact from '@/components/contact/Form'
import FooterApp from '@/components/global/Footer'
/* import Characters from '~/apollo/queries/characters' */

/* query Characters {
  characters {
    id
    name
  }
} */

export default {
  components: {
    Banner,
    FormContact,
    FooterApp
  },
  head() {
    let title = 'Contacto - Rikell Vargas & Tuesta',
      description = 'Somos expertos en el ámbito del litigio, lo cual nos permite dar solución a incertidumbres jurídicas a través de diferentes mecanismos legales, pensando en el mejor bienestar para el cliente.'
      
      return {
        title: title,
        meta: [
          // Twitter OpenGraph
          {name: 'twitter:title', content: title},
          {name: 'twitter:description', content: description},

          // Facebook OpenGraph
          {property: 'og:url', content: 'https://abogados.josejollja.com/contacto'},
          {property: 'og:title', content: title},
          {property: 'og:site_name', content: title},
          {property: 'og:description', content: description}
        ]
      }
  }
  /* apollo: {
    characters: {
      prefetch: true,
      query: Characters
    }
  } */
}
</script>

<style lang="scss">
@import '../scss/variables';
@import '../scss/bootstrap_custom';
</style>
