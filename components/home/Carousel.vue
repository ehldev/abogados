<template>
<div class="banner" v-if="sliders">
    <!-- <header-app logo="white"></header-app> -->
    <header-app></header-app>

<!-- v-bind:style="{backgroundImage: 'url(' + setImageBackgroundInSlideTransition + ')'}" -->
<!-- La primera clase "carousel" es importante la segunda puede llamarse como desees y tiene que definir la altura
ya que por defecto el carousel no tiene una altura para mejor personalización -->

<section class="carousel carousel-custom">
    <transition-group name="fade">
        <template v-if="initAnimated">
            <div class="carousel__item" v-for="(item, index) in reverseItems" :key="index" :class="index === currentIndex ? 'carousel__item--active' : ''">
                <div class="carousel__item-content">

                    <!-- Contenido personalizado aquí, puedes acceder al contenido del item actual mediante la propiedad currentItem -->
                    <div class="carousel__content-custom mt-md-5 mt-xl-0">
                        <h1 class="carousel__title">{{ item.title }}</h1>
                        
                        <div v-html="item.content" class="carousel__description mt-3 py-0"></div>
                    </div>

                </div>
                <img :src="item.portada.imagenDestacada.mediaItemUrl" :alt="item.portada.imagenDestacada.altText" class="carousel__image">
            </div>
        </template>
    </transition-group>

    <div class="carousel__points">
        <div class="carousel__points-container">
            <button class="carousel__point" :class="index === currentIndex ? 'carousel__point--active' : ''" v-for="(item, index) in reverseItems.length" :key="index" @click="changeCurrentIndex(index)"></button>
        </div>
    </div>
</section>
</div>
</template>

<script>
import { mapState } from 'vuex'
import carouselItems from '@/apollo/queries/carousel-home'

// Components
// import HeaderApp from '@/components/Header'
import HeaderApp from '@/components/global/Header'

export default {
    data() {
        return {
            slide: 0,
            sliding: null,
            currentItem: {},
            currentIndex: 0,
            initAnimated: false,
            currentTime: 4000
        }
    },
    mounted() {
        // Asigna la primera imagen
        this.setCurrentItem()

        this.changeByInterval()

        // Controla el fade del inicio
        this.initAnimated = true
    },
    apollo: {
      sliders: {
        prefetch: true,
        query: carouselItems
      }
    },
    components: {
        HeaderApp
    },
    methods: {
        setCurrentItem() {
            this.currentItem = this.reverseItems[this.currentIndex]
        },
        changeByInterval() {
            setInterval(() => {
                // Aumenta en 1 el index
                if(this.currentIndex < (this.reverseItems.length - 1)) {
                    this.currentIndex++
                } else {
                    this.currentIndex = 0
                }

                this.currentItem = this.reverseItems[this.currentIndex]
            }, this.currentTime)
        },
        changeCurrentIndex(index) {
            this.currentItem = this.reverseItems[index]

            this.currentIndex = index
        }
    },
    computed: {
      reverseItems: function() {
        if(this.sliders) {
          return this.sliders.nodes.reverse()
        }
      }
    }
}
</script>

<style lang="scss">
@import '../../scss/_variables';

:root {
    --dark: #2D3047;
    --success: #419D78;
    --secondary: #585866;
    --danger: #B33951;
}

.carousel {
    background-color: var(--dark);
    position: relative;
    overflow: hidden;

    width: 100%;

    &__item {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        /* right: -100%;
        transition: right 1.5s; */
        transition: opacity 1s;
        opacity: 0;
    }

    &__item--active {
        opacity: 1;
        z-index: 10;
        /* right: 0; */
    }

    &__item-content {
        /* Este es el efecto oscuro del item */
        background-color: rgba(#2D3047, .7);
        width: 100%;
        height: 100%;

        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        z-index: 100;
    }

    &__image {
        width: 100%;
        height: 100%;

        object-position: center;
        object-fit: cover;
    }

    &__points {
        position: absolute;
        bottom: 1rem;
        left: 0;
        z-index: 100;

        width: 100%;
        padding: .5rem 1rem;
    }

    &__points-container {
        width: max-content;
        margin: 0 auto;
        display: flex;
    }

    &__point {
        background-color: rgba($warning, .3);

        width: .9rem;
        height: .9rem;

        margin: 0 .3rem;
        border-radius: 50%;
        border: none;

        outline: none;

        transition: background-color .5s;

        &:hover {
            background-color: var(--dark);

            cursor: pointer;
        }
    }

    /* Estilos del punto activo */

    &__point--active {
        background-color: $warning;

        &:hover {
            background-color: $warning;
        }
    }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

/* @keyframes slideItem {
    from {
        opacity: 1;
    }

    to {
        opacity: 0;
    }
} */

/* Estilos adicionales, el único estilo importante es la altura */
.carousel-custom {
    height: 100vh; /* Importante: Definir altura */

    @media (min-width: 720px) {
      height: 60vh;
    }

    @media (min-width: 1200px) {
      height: 100vh;
    }
}

.carousel__content-custom {
    width: 80%;
    height: 100%;

    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: center;

    .carousel__title {
        font-size: 4em;
        color: white;
    }
}

.carousel__point {
  outline: none !important;
}

.carousel__title {
      font-size: 1.5em;
      font-weight: 800;

      @media (min-width: 720px) {
        max-width: 90%;
        font-size: 2.5em;
      }

      @media (min-width: 1024px) {
        margin-top: 2rem;
      }
    }

.carousel__description {
      background-color: rgba($dark, .07);
      color: white;
      font-size: 1em;
      font-weight: 400;
      padding: 1rem;
      border-left: 4px solid $warning;
      transition: background-color .5s;

      @media (min-width: 720px) {
        width: 80%;
      }

      @media (min-width: 1024px) {
        width: 50%;
      }

      &:hover {
        background-color: rgba($dark, .09);
      }

    }
</style>