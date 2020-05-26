<template>
<div class="container publications-list" v-if="publicaciones">

    <div class="row publication mb-5" :class=" (index % 2) === 0 ? 'row--invested' : '' " v-for="(item, index) in publicaciones.edges" :key="index">
        <!-- Esta columna se alterna según el index -->
        <div class="col-md-5 first-column">
            <div class="publication__content">
                <div class="text-center text-md-left mb-5">
                    <h2 class="publication__title">{{ item.node.title }}</h2>
                </div>
                <div v-html="item.node.content"></div>
            </div>
        </div>

        <!-- Video -->
        <div class="col-md-7 second-column mt-5 mt-md-0">
            <div class="publication__video-container">
                <div v-html="item.node.video.url" class="publication__video"></div>

                <div class="publication__video-image" v-bind:style="{backgroundImage: 'url(' + item.node.video.capaVideo.mediaItemUrl + ')'}">
                </div>
            </div>

            <div class="publication-images position-relative mt-5">
                <gallery
                :image="item.node.video.imagen1"
                :image2="item.node.video.imagen2"
                :image3="item.node.video.imagen3"
                >
                </gallery>
            </div>
        </div>

    </div>

</div>
</template>

<script>
import Gallery from '@/components/global/Gallery'

// Queries
import publications from '@/apollo/queries/publications'

export default {
    components: {
        Gallery
    },
    apollo: {
        publicaciones: {
            prefetch: true,
            query: publications
        }
    }
}
</script>

<style lang="scss">
@import '../../scss/variables';

.publications-list {

    @media (min-width: 720px) {
        margin-top: 5rem;
    }

    iframe {
        width: 100%;
        box-shadow: 6px 10px 27px -3px rgba(0,0,0,0.61);
    }
}

.publication {
    &__content {
        height: max-content !important;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    &__title {
        font-size: 1.5em;
        font-weight: 700;
        color: $dark;
        position: relative;

        @media (min-width: 720px) {
            font-size: 2.3em;
        }

        &::before {
            content: '';
            background-color: $warning;

            width: 3rem;
            height: 4px;

            margin: auto;

            position: absolute;
            
            bottom: -1rem;
            left: 0;
            right: 0;

            @media (min-width: 720px) {
                content: '';
                background-color: $warning;

                margin: 0;
                width: 2rem;
                height: 4px;

                position: absolute;
                bottom: -.5rem;
                left: 0;
            }
        }

    }

    &__video-container {
        position: relative;

        &:hover .publication__video-image {
            right: -150%;
        }

        /* &:hover .publication__video {
            position: relative;
            z-index: 100;
        } */
    }

    &__video-image {
        display: none;

        @media (min-width: 720px) {
            display: inline-block;

            width: 100%;
            height: 100%;

            background-repeat: round no-repeat;

            position: absolute;
            top: 0;
            right: 0;

            opacity: 1;

            transition: right 1.3s ease-out;
        }
    }
}

.first-column {
    margin-top: 20%;
}

/* Modificar columnas de filas para dar estilo diferenciado */
.row--invested {

    @media (min-width: 720px) {
        .first-column {
            order: 2;
        }

        .publication__video-image {
            left: 0;
            right: initial;
            transition: left 1.3s ease-out;
        }

        .publication__video-container {

            &:hover .publication__video-image {
                left: -150%;
            }

            /* &:hover .publication__video {
                position: relative;
                z-index: 100;
            } */
        }
    }
}
</style>