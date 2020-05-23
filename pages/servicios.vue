<template>
  <div>
    <banner></banner>
    <to-action></to-action>
    <footer-app></footer-app>
  </div>
</template>

<script>
import Banner from '@/components/services/Banner'
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
    ToAction,
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
