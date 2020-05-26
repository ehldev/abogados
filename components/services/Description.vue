<template>
<div class="container service-content" v-if="page">
    <div class="row align-items-center">

        <div class="col-lg-6 service__images mt-5 position-relative">
            <gallery
            :image="page.criminalistica.imagen1"
            :image2="page.criminalistica.imagen2"
            :image3="page.criminalistica.imagen3"
            >
            </gallery>
        </div>

        <div class="col-lg-6 text-center">

            <div v-html="page.criminalistica.descripcion" class="service-content__description"></div>

            <nuxt-link to="/contacto" class="btn btn-lg btn-primary mt-3">Contáctanos</nuxt-link>
        </div>
    </div>

    <div class="row">
        <div class="col-md-12 service-video-container">
            <div v-html="page.criminalistica.video"></div>
        </div>
    </div>
</div>
</template>

<script>
import Gallery from '@/components/global/Gallery'

// Queries
import serviceDescription from '@/apollo/queries/service-description'

export default {
    components: {
        Gallery
    },
    apollo: {
        page: {
        prefetch: true,
        query: serviceDescription
        }
    }
}
</script>

<style lang="scss">
@import '../../scss/variables';

.service-content {
    margin-top: 3rem;
    margin-bottom: 3rem;

    &__images {
        max-width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
    }

    /* Se selecciona directamente las etiquetas para darle estilos al contenido que viene del graph */

    h3 {
        font-size: 1em;
        font-weight: 700;
        color: $warning;

        @media (min-width: 720px) {
            font-size: 1.2em;
        }

        @media (min-width: 1024px) {
            font-size: 1em;
        }
    }

    h2 {
        font-size: 2em;
        font-weight: 700;
        color: $dark;

        @media (min-width: 720px) {
            font-size: 3em;
        }
    }

    p {
        font-size: 1em;
        width: 80%;
        margin: 0 auto;

        @media (min-width: 720px) {
            font-size: 1.2em;
        }

        @media (min-width: 1024px) {
            font-size: 1em;
        }
    }

    .service-video-container {
        /* Esta etiqueta viene como contenedor del video */
        p {
            width: 100%;
            padding: 0;

            @media (min-width: 1024px) {
                width: 80%;
            }
        }
    }

    iframe {
        width: 100%;
        height: 300px;

        @media (min-width: 1024px) {
            width: 100%;
            height: 500px;
        }
    }
}

.service__images {
    margin-top: 5rem;
    order: 2;

    @media (min-width: 1024px) {
        order: -1;
    }
}

.service__image {
    max-width: 100%;
    min-height: 180px;
    border-radius: .2rem;
    box-shadow: 6px 10px 27px -3px rgba(0,0,0,0.61);
}

.service__image-container-1 {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
}

.service__image-container-2 {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    position: relative;

    .service__image {
        position: absolute;
        top: -10%;
        right: -10%;
        z-index: 10;
    }
}

.service__image-container-3 {
    grid-column: 2 / 3;
    grid-row: 3 / 4;
    width: 100%;
    position: relative;

    @media (min-width: 720px) {
        width: 80%;
    }

    .service__image {
        position: absolute;
        top: -30%;

        @media (min-width: 720px) {
            top: -30%;
            left: 0;
        }
    }
}
</style>