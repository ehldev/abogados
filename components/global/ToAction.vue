<template>
<section class="container-fluid to-action" v-if="page">
    <div class="row justify-content-center">
        <div class="col-md-8 text-center">
            <div v-html="page.nosotros.frase" class="to-action__info"></div>
            <nuxt-link to="#contact" class="btn btn-lg btn-warning mt-3">Contáctanos</nuxt-link>
        </div>
    </div>
</section>
</template>

<script>
// Queries
import toAction from '@/apollo/queries/to-action'

export default {
    /* props: ['info'] */
    apollo: {
        page: {
            prefetch: true,
            query: toAction
        }
    }
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
    box-shadow: $shadow;

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
