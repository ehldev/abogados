<template>
<div class="testimonies bg-dark">
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <div class="testimonies__content mb-5 px-1">
                    <h2 class="testimonies__title">Conozca que opinan nuestros clientes</h2>
                    <!-- <pre>
                        {{ testimoniales.nodes }}
                    </pre> -->
                </div>
            </div>

            <div class="col-md-8">
                <b-carousel
                    id="carousel-fade"
                    style="text-shadow: 0px 0px 2px #000"
                    fade
                    indicators
                    :interval="4000000"
                    v-if="testimoniales"
                >
                    <b-carousel-slide
                    class="testimonies__carousel-item h-100"
                    v-for="(item, index) in testimoniales.nodes"
                    :key="index"
                    >
                        <h3 class="testimonies__carousel-title text-left mb-3">{{ item.title }}</h3>

                        <p class="testimonies__carousel-description text-left" v-html="item.content">
                        </p>

                        <i class="fas fa-quote-left testimonies__icon"></i>
                    </b-carousel-slide>

                    <!-- <b-carousel-slide
                    class="testimonies__carousel-item"
                    >
                        <h3 class="testimonies__carousel-title text-left mb-3">Jon Doe, cliente 2.</h3>

                        <p class="testimonies__carousel-description text-left">
                            Lorem ipsum 2 dolor sit amet consectetur adipisicing elit. Magnam dignissimos sed animi soluta doloremque voluptas quisquam in et obcaecati blanditiis culpa explicabo delectus a nobis, quos alias molestiae id eligendi.
                        </p>

                        <i class="fas fa-quote-left testimonies__icon"></i>
                    </b-carousel-slide>

                    <b-carousel-slide
                    class="testimonies__carousel-item"
                    >
                        <h3 class="testimonies__carousel-title text-left mb-3">Cliente 3.</h3>

                        <p class="testimonies__carousel-description text-left">
                            Lorem ipsum 3 dolor sit amet consectetur adipisicing elit. Magnam dignissimos sed animi soluta doloremque voluptas quisquam in et obcaecati blanditiis culpa explicabo delectus a nobis, quos alias molestiae id eligendi.
                        </p>

                        <i class="fas fa-quote-left testimonies__icon"></i>
                    </b-carousel-slide> -->
                </b-carousel>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import testimoniales from '@/apollo/queries/testimoniales'

export default {
    apollo: {
        testimoniales: {
            prefetch: true,
            query: testimoniales
        }
    }
}
</script>

<style lang="scss">
@import '../../scss/variables';

.testimonies {
    margin-top: 6rem;
    padding-top: 6rem;
    padding-bottom: 5rem;

    @media (min-width: 720px) {
        margin-top: 7rem;
    }

    &__title {
        font-size: 1.5em;
        color: white;
        font-weight: 700;

        @media (min-width: 720px) {
          font-size: 1.3em;
        }

        @media (min-width: 1024px) {
          font-size: 2em;
        }
    }

    &__content {
        padding-right: 1rem;
        border-bottom: 3px solid $warning;
    }

    &__carousel-item {
        background-color: $dark;
        min-height: 150px;
        position: relative;
    }

    &__carousel-description {
        color: rgba(white, .9);
    }

    .carousel-indicators li {
        width: 1.2em;
        height: .3em;
        border-radius: 40%;
        opacity: 1;
        outline: none;
    }

    .carousel-indicators {
        bottom: -30%;
    }

    .carousel-indicators .active {
        background-color: $warning;
    }

    .carousel-caption {
        height: 100%;
    }

    &__carousel-title {
        font-size: 1em;
        font-weight: 700;
        color: $warning;
    }
}

.testimonies__icon {
    font-size: 4em;
    color: rgba($secondary, .4);
    position: absolute;
    top: 15%;
    left: -15%;
    z-index: -10;
}
</style>