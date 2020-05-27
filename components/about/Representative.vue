<template>
<section class="container representative" v-if="page">
    <div class="row justify-content-center">
        <div class="col-lg-8 col-xl-6">
            <article class="card representative__card text-center border-0">
                <img :src="page.nosotros.foto1.mediaItemUrl" alt="Representante Rikell Vargas & Tuesta" class="representative__image">

                <div class="representative__card-info">
                    <h2 class="representative__card-title">{{ page.nosotros.representante1 }}</h2>
                    <h3 class="representative__card-subtitle">{{ page.nosotros.rol1 }}</h3>
                </div>
            </article>
        </div>
    </div>
</section>
</template>

<script>
// Queries
import representative from '@/apollo/queries/representative'

export default {
    apollo: {
      page: {
        prefetch: true,
        query: representative
      }
    }
}
</script>

<style lang="scss">
@import '../../scss/variables';

.representative {
    margin-top: 5rem;

    &__card {
        border: none;
        box-shadow: $shadow;
        border-radius: .2rem;
        height: 350px;
        position: relative;

        @media (min-width: 1024px) {
          height: 400px;
        }

        &:hover .representative__card-info{
            opacity: 1;
        }
    }

    &__image {
        max-width: 100%;
        height: 100%;
        border-radius: .2rem;
        filter: grayscale(20%);
    }

    &__card-info {
        background-color: rgba($primary, .8);

        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        position: absolute;
        top: 0;
        left: 0;
        z-index: 100;

        opacity: 0;

        transition: opacity .7s;
    }

    &__card-title {
        font-size: 2em;
        font-weight: 700;
        color: white;
    }

    &__card-subtitle {
        font-size: 1.1em;
        margin-top: .5rem;
        font-weight: 700;
    }
}
</style>