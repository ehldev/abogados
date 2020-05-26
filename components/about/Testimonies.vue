<template>
<div class="testimonies bg-dark" v-if="testimoniales">
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <div class="testimonies__content mb-5 px-1">
                    <h2 class="testimonies__title">Conozca que opinan nuestros clientes</h2>
                </div>
            </div>

            <div class="col-md-8">
                <!-- Los estilos básicos de este carousel se encuentran en components/home/Carousel.vue -->
                <section class="carousel testimonies__carousel py-5" v-if="renderCarousel"> <!-- Se agrega renderCarousel para esperar a que se carguen los estilos correctamente, al parecer problema de nuxt -->
                    <transition-group name="fade">
                        <template v-if="initAnimated">
                            <div class="carousel__item py-5" v-for="(item, index) in testimoniales.nodes" :key="index" :class="index === currentIndex ? 'carousel__item--active' : ''">
                                <div class="carousel__item-content">

                                    <!-- Contenido personalizado aquí, puedes acceder al contenido del item actual mediante la propiedad currentItem -->
                                    <div class="carousel__content-custom">
                                        <h1 class="testimonies__carousel-title">{{ item.title }}</h1>
                                        
                                        <div v-html="item.content" class="testimonies__carousel-description mt-3 py-0"></div>
                                    </div>

                                </div>
                            </div>
                        </template>
                    </transition-group>

                    <div class="carousel__points">
                        <div class="carousel__points-container">
                            <button class="carousel__point" :class="index === currentIndex ? 'carousel__point--active' : ''" v-for="(item, index) in testimoniales.nodes.length" :key="index" @click="changeCurrentIndex(index)"></button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import testimoniales from '@/apollo/queries/testimoniales'

export default {
    data() {
        return {
            currentItem: {},
            currentIndex: 0,
            initAnimated: false,
            currentTime: 4000,
            renderCarousel: false
        }
    },
    mounted() {
        // Asigna la primera imagen
        this.setCurrentItem()

        this.changeByInterval()

        // Controla el fade del inicio
        this.initAnimated = true

        setTimeout(() => {
            this.renderCarousel = true
        }, 2000)
    },
    apollo: {
        testimoniales: {
            prefetch: true,
            query: testimoniales
        }
    },
    methods: {
        setCurrentItem() {
            if(this.testimoniales) {
                this.currentItem = this.testimoniales.nodes[this.currentIndex]
            }
        },
        changeByInterval() {
            setInterval(() => {
                // Aumenta en 1 el index
                if(this.currentIndex < (this.testimoniales.nodes.length - 1)) {
                    this.currentIndex++
                } else {
                    this.currentIndex = 0
                }

                this.currentItem = this.testimoniales.nodes[this.currentIndex]
            }, this.currentTime)
        },
        changeCurrentIndex(index) {
            this.currentItem = this.testimoniales.nodes[index]

            this.currentIndex = index
        }
    },
}
</script>

<style lang="scss">
@import '../../scss/variables';

.testimonies {
    margin-top: 6rem;
    padding-top: 3rem;
    padding-bottom: 3rem;
    
    @media (min-width: 720px) {
        margin-top: 5rem;
        padding-top: 6rem;
        padding-bottom: 5rem;
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

    /*
        Los estilos básicos de este carousel se encuentran en components/home/Carousel.vue,
        aquí solo se modifica lo necesario.
    */

    &__carousel {
        height: 250px;

        @media (min-width: 1024px) {
          height: 200px;
        }
    }

    .carousel__points {

        @media (min-width: 1024px) {
          bottom: .5rem;
        }

        width: 100%;
        padding: .5rem 1rem;
    }

    &__carousel-title {
        font-size: 1em;
        font-weight: 700;
        color: $warning;
    }

    &__carousel-description {
        color: white;

        p::before {
            content: open-quote;
        }

        p::after {
            content: close-quote;
        }
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