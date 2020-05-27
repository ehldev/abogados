<template>
  <div>
    <nuxt />
    <whatsapp></whatsapp>
  </div>
</template>

<script>
import Whatsapp from '@/components/global/Whatsapp'

export default {
  components: {
    Whatsapp
  }
}
</script>

<style>
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
