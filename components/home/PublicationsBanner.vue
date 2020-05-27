<template>
<div class="container banner-publications py-0 text-center text-md-left">
    <div class="row">
        <div class="col-md-5 position-relative p-0">
            <img src="/publications-banner.jpg" alt="Imagen de publicaciones" class="banner-publications__image">

            <div class="banner-publications__gradient"></div>
        </div>
        <div class="col-md-7">
            <div class="banner-publications__content h-100 p-3">
                <h1 class="banner-publications__title">Conozca nuestras publicaciones</h1>
                <p class="banner-publications__description">Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.</p>

                <nuxt-link to="/publicaciones" class="btn btn-outline-warning mt-3 px-lg-5 align-self-md-start">Ver todas</nuxt-link>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        
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

    &__title {
        font-size: 2em;
        font-weight: 700;
    }
}
</style>