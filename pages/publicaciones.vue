<template>
  <div v-if="page">
    <banner :pageData="page"></banner>
    <publications></publications>
    <footer-app></footer-app>
  </div>
</template>

<script>
import Banner from '@/components/publications/Banner'
import Publications from '@/components/publications/Publications'
import FooterApp from '@/components/global/Footer'

// Queries
import publicationsPage from '@/apollo/queries/publications-page'

export default {
  components: {
    Banner,
    Publications,
    FooterApp
  },
  head() {
    let title = 'Nuestras publicaciones - Rikell Vargas & Tuesta',
      description = 'Somos expertos en el ámbito del litigio, lo cual nos permite dar solución a incertidumbres jurídicas a través de diferentes mecanismos legales, pensando en el mejor bienestar para el cliente.'
      
      return {
        title: title,
        meta: [
          // Twitter OpenGraph
          {name: 'twitter:title', content: title},
          {name: 'twitter:description', content: description},

          // Facebook OpenGraph
          {property: 'og:url', content: 'https://abogados.josejollja.com/servicios'},
          {property: 'og:title', content: title},
          {property: 'og:site_name', content: title},
          {property: 'og:description', content: description}
        ]
      }
  },
  apollo: {
    page: {
      prefetch: true,
      query: publicationsPage
    }
  }
}
</script>

<style lang="scss">
@import '../scss/variables';
@import '../scss/bootstrap_custom';

/* .services__footer {
  margin-top: 5rem;
} */
</style>