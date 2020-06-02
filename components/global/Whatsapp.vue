<template>
<div class="whatsapp__container" v-if="redesSociales">
    <a :href="redesSociales.edges[0].node.redes.whatsapp" target="_blank">
        <img src="/whatsapp.svg" alt="Icono Whatsapp" class="whatsapp__image">
    </a>

    <pre>

    </pre>
</div>
</template>

<script>
import whatsapp from '@/apollo/queries/whatsapp'

export default {
    apollo: {
        redesSociales: {
            prefetch: true,
            query: whatsapp
        }
    }
}
</script>

<style lang="scss">
.whatsapp__container {
    position: fixed;
    bottom: 5%;
    left: 5%;
    z-index: 100;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 1200px) {
        bottom: 2rem;

    }
}

.whatsapp__image {
    width: 15vw;
    border-radius: 50%;
    box-shadow: 10px 10px 24px -13px rgba(0,0,0,0.65);

    @media (min-width: 720px) {
        width: 12vw;
    }

    @media (min-width: 720px) {
        width: 10vw;
    }

    @media (min-width: 1200px) {
        width: 4vw;
    }
}
</style>
