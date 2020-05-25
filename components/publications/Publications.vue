<template>
<div class="container publications-list" v-if="publicaciones">
    <div class="row publication mt-5" v-for="(item, index) in publicaciones.nodes" :key="index">
        <div class="col-md-5">
            <div class="publication__content h-100">
                <h2 class="publication__title">{{ item.title }}</h2>
            </div>
        </div>
        <div class="col-md-7">
            <div class="publication__video-container">
                <div v-html="item.video.url" class="publication__video"></div>

                <div class="publication__video-image" v-bind:style="{backgroundImage: 'url(' + item.video.capaVideo.mediaItemUrl + ')'}"></div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
// Queries
import publications from '@/apollo/queries/publications'

export default {
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
    margin-top: 3rem;

    iframe {
        width: 100%;
        box-shadow: 6px 10px 27px -3px rgba(0,0,0,0.61);
    }
}

.publication {
    &__content {
        height: max-content !important;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &__title {
        font-size: 1.5em;
        font-weight: 700;
        color: $dark;
        position: relative;

        @media (min-width: 720px) {
            font-size: 2em;
        }

        &::before {
            content: '';
            background-color: $warning;

            width: 2rem;
            height: 4px;

            position: absolute;
            bottom: -.5rem;
            left: 0;
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

            transition: right 1s ease-out;
        }
    }
}
</style>