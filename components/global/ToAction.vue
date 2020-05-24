<template>
<section class="container-fluid to-action">
    <div class="row justify-content-center">
        <div class="col-md-8 text-center">
            <div v-html="info" v-if="info" class="to-action__info"></div>
            
            <p class="to-action__description lead mt-3" v-else>
                Nuestra firma, busca cultivar la confianza, transparencia, responsabilidad, Integridad, disponibilidad al cambio, pasión y transformación de valores que nuestra sociedad espera, pensando en un mundo mejor.
            </p>

            <nuxt-link to="/contacto" class="btn btn-lg btn-warning mt-3">Contáctanos</nuxt-link>
        </div>
    </div>
</section>
</template>

<script>
export default {
    props: ['info']
}
</script>

<style lang="scss">
@import '../../scss/_variables';

.to-action {
    background-image: url('/slide-home/third-slide.jpg');
    background-size: cover;
    color: white;
    margin-top: 4rem;
    padding-top: 5rem;
    padding-bottom: 5rem;
    position: relative;
    box-shadow: 6px 10px 27px -3px rgba(0,0,0,0.61);

    @media (min-width: 1024px) {
        margin-top: 7rem;
    }

    &::before {
        content: '';
        background: rgb(39,43,55);
        background: linear-gradient(90deg, rgba(39,43,55,0.9051995798319328) 0%, rgba(39,43,55,0.7931547619047619) 100%);
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }

    &__description {
        &::before {
            content: open-quote;
        }

        &::after {
            content: close-quote;
        }
    }

    &__info {
        span,
        p {
            text-align: center;
            font-family: 'Open Sans', sans-serif !important;
        }
    }
}
</style>