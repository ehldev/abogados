<template>
  <div>
    <banner></banner>
    <description></description>
    <to-action></to-action>
  </div>
</template>

<script>
import Banner from '@/components/about/Banner'
import Description from '@/components/about/Description'
import ToAction from '@/components/global/ToAction'
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
    ToAction
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
