<template>
<div class="banner">
    <!-- <header-app logo="white"></header-app> -->
    <header-app></header-app>

    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="3000"
      indicators
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
      class="home-carousel"
      v-if="sliders"
    >

      <!-- Slides with custom text -->
      <b-carousel-slide class="home-slide first-slide" v-for="(item, index) in reverseItems" :key="index" :img-src="item.portada.imagenDestacada.mediaItemUrl" :img-alt="item.portada.imagenDestacada.mediaItemUrl">
        <div class="row">
            <div class="col-md-9 col-lg-6 text-left px-lg-0">
              <h2 class="home-carousel__title">{{ item.title }}</h2>

              <div class="home-carousel__content">
                <p class="home-carousel__description text-white mt-3" v-html="item.content">
                </p>
    

                <div class="text-right mt-4">
                  <nuxt-link to="/sobre-nosotros" class="btn btn-outline-warning">Más información</nuxt-link>
                </div>
              </div>
            </div>
        </div>
      </b-carousel-slide>

    </b-carousel>
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
            sliding: null
        }
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
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
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
@import '../../scss/variables';

.home-carousel {

    .carousel-indicators li {
        width: 1.2em;
        height: .3em;
        border-radius: 40%;
        opacity: 1;
        outline: none;
    }

    .carousel-indicators .active {
        background-color: $warning;
    }

    .carousel-caption {
        top: 25%;
        left: 10%;

        @media (min-width: 1024px) {
          top: 30%;
          left: 12%;
        }
    }

    &__content {
      @media (min-width: 1200px) {
        max-width: 90%;
      }
    }

    &__title {
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

    &__description {
      background-color: rgba($dark, .07);
      font-size: 1em;
      font-weight: 400;
      padding: 1rem;
      border-left: 4px solid $warning;
      transition: background-color .5s;

      &:hover {
        background-color: rgba($dark, .09);
      }

    }
}

.home-slide {
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    position: relative;
    background-color: $dark;
    height: 90vh;

    @media (min-width: 720px) {
      height: 60vh;
    }

    @media (min-width: 1024px) {
      height: 60vh;
    }

    @media (min-width: 1200px) {
      height: 100vh;
    }

    img {
      height: 100%;
    }

    &::before {
        content: '';
        /* background: rgb(39,72,133);
        background: linear-gradient(90deg, rgba(39,72,133,1) 0%, rgba(39,72,133,0.13769257703081228) 100%); */
        background-color: rgba($dark, .7);
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
}

.first-slide {
  background-image: url('/slide-home/first-slide.jpg');
  
  @media (min-width: 720px) {
    background-image: url('/slide-home/first-slide.jpg');
  }
  
}

.second-slide {
  background-image: url('/slide-home/second-slide.jpg');
  background-position: center;

  @media (min-width: 720px) {
    background-image: url('/slide-home/second-slide.jpg');
  }
}

.third-slide {
  background-image: url('/slide-home/third-slide.jpg');
  background-position: left;

  @media (min-width: 720px) {
    background-image: url('/slide-home/third-slide.jpg');
    background-position: center;
  }
}
</style>