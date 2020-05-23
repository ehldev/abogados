<template>
  <div>
    <banner></banner>
    <description></description>
    <values></values>
    <testimonies></testimonies>
    <to-action></to-action>
    <footer-app></footer-app>
  </div>
</template>

<script>
import Banner from '@/components/about/Banner'
import Description from '@/components/about/Description'
import Values from '@/components/about/Values'
import Testimonies from '@/components/about/Testimonies'
import ToAction from '@/components/global/ToAction'
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
    Description,
    Values,
    ToAction,
    Testimonies,
    FooterApp
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
