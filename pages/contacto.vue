<template>
  <div>
    <banner></banner>
    <form-contact></form-contact>
  </div>
</template>

<script>
import Banner from '@/components/contact/Banner'
import FormContact from '@/components/contact/Form'
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
    FormContact
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
