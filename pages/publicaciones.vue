<template>
  <div v-if="page">
    <banner :pageData="page"></banner>
    <publications></publications>
    <footer-app></footer-app>
  </div>
</template>

<script>
import { appConfig } from '@/env'

// Components
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
    let title = 'Publicaciones - Rikell Vargas & Tuesta',
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
          {property: 'og:url', content: `${appUrl}/publicaciones`},
          {property: 'og:title', content: title},
          {property: 'og:site_name', content: title},
          {property: 'og:description', content: description},
          {property: 'og:image', content: image},

          // Whatsapp OpenGraph
          {property: 'og:url', content: `${appUrl}/publicaciones`},
          {property: 'og:title', content: title},
          {property: 'og:site_name', content: title},
          {property: 'og:description', content: description},
          {property: 'og:image', content: image},

          // Twitter OpenGraph
          {name: 'twitter:url', content: `${appUrl}/publicaciones`},
          {name: 'twitter:image', content: image},
          {name: 'twitter:title', content: title},
          {name: 'twitter:description', content: description}
        ]
      }
  },
  apollo: {
    page: {
      prefetch: true,
      query: publicationsPage,
      fetchPolicy: 'no-cache'
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
