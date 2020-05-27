<template>
<div class="container banner-publications py-0 text-center text-md-left" v-if="info">
    <div class="row">
        <div class="col-md-5 position-relative p-0">
            <img :src="info.imagenPublicacion.mediaItemUrl" alt="Imagen de publicaciones" class="banner-publications__image">

            <div class="banner-publications__gradient"></div>
        </div>
        <div class="col-md-7">
            <div class="banner-publications__content h-100 p-3">
                <div v-html="info.publicaciones"></div>

                <nuxt-link to="/publicaciones" class="btn btn-outline-warning mt-3 px-lg-5 align-self-md-start">Ver todas</nuxt-link>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: ['info']
}
</script>

<style lang="scss">
@import '../../scss/variables';

.banner-publications {
    box-shadow: $shadow;

    &__image {
        width: 100%;
        height: 100%;
    }

    &__gradient {
        background-color: rgba($dark, .7);

        width: 100%;
        height: 100%;

        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;

        opacity: .5;
        transition: opacity .7s, background-color .7s;

        
    }

    &:hover .banner-publications__gradient {
        background-color: rgba($dark, .7);
        opacity: 1;
        
    }

    &__content {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    h2 {
        font-size: 2em;
        font-weight: 700;
    }

    p {
        width: 95%;
    }
}
</style>