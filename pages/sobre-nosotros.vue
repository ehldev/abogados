<template>
  <div v-if="page">
    <banner :pageData="page"></banner>

    <description
      :imageInfo="page.nosotros.fotoInformacion.mediaItemUrl"
      :info="page.nosotros.informacion"
      :mission="page.nosotros.mision"
      :vission="page.nosotros.vision"
      >
    </description>

    <values :values="values"></values>

    <representative></representative>

    <testimonies></testimonies>

    <to-action></to-action>
    
    <footer-app></footer-app>
  </div>
</template>

<script>
import { config } from '@/env'

// Components
import Banner from '@/components/about/Banner'
import Description from '@/components/about/Description'
import Representative from '@/components/about/Representative'
import Values from '@/components/about/Values'
import Testimonies from '@/components/about/Testimonies'
import ToAction from '@/components/global/ToAction'
import FooterApp from '@/components/global/Footer'

// Queries
import about from '@/apollo/queries/about'

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
    Representative,
    Values,
    ToAction,
    Testimonies,
    FooterApp
  },
  head() {
    let title = 'Sobre nosotros - Rikell Vargas & Tuesta',
      description = 'La firma Rikell Vargas & Tuesta, constituye un espacio desde el cual nos desempeñamos en el asesoramiento en temas penales de manera eficiente y eficaz. Somos expertos en el ámbito del litigio.',
      appUrl = config.appUrl

    let image = ''

    if(this.page) {
      image = this.page.featuredImage.mediaItemUrl
    }
      
    return {
        title: title,
        meta: [
          // Facebook OpenGraph
          {property: 'og:url', content: `${appUrl}/sobre-nosotros`},
          {property: 'og:title', content: title},
          {property: 'og:site_name', content: title},
          {property: 'og:description', content: description},
          {property: 'og:image', content: image},

          // Twitter OpenGraph
          {name: 'twitter:url', content: `${appUrl}/sobre-nosotros`},
          {name: 'twitter:image', content: image},
          {name: 'twitter:title', content: title},
          {name: 'twitter:description', content: description}
        ]
      }
  },
  apollo: {
      page: {
          prefetch: true,
          query: about
      }
  },
  computed: {
    values: function() {
      return [
        {
          valueName: this.page.nosotros.valor1,
          valueIcon: this.page.nosotros.iconoValor1
        },
        {
          valueName: this.page.nosotros.valor2,
          valueIcon: this.page.nosotros.iconoValor2
        },
        {
          valueName: this.page.nosotros.valor2,
          valueIcon: this.page.nosotros.iconoValor2
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import '../scss/variables';
@import '../scss/bootstrap_custom';
</style>
