<template>
  <div v-if="page">
    <banner :pageData="page"></banner>
    <description></description>
    <!-- <to-action class="mt-0"></to-action> -->
    <footer-app></footer-app>
  </div>
</template>

<script>
import { config } from '@/env'

// Components
import Banner from '@/components/services/Banner'
import Description from '@/components/services/Description'
import ToAction from '@/components/global/ToAction'
import FooterApp from '@/components/global/Footer'
import service from '~/apollo/queries/service'

/* query Characters {
  characters {
    id
    name
  }
} */

export default {
  components: {
    Banner,
    Description,
    ToAction,
    FooterApp
  },
  head() {
    let title = 'Nuestros servicios - Rikell Vargas & Tuesta',
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
          {property: 'og:url', content: `${appUrl}/servicios`},
          {property: 'og:title', content: title},
          {property: 'og:site_name', content: title},
          {property: 'og:description', content: description},
          {property: 'og:image', content: image},

          // Twitter OpenGraph
          {name: 'twitter:url', content: `${appUrl}/servicios`},
          {name: 'twitter:image', content: image},
          {name: 'twitter:title', content: title},
          {name: 'twitter:description', content: description}
        ]
      }
  },
  apollo: {
    page: {
      prefetch: true,
      query: service
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
