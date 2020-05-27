<template>
<section class="container-fluid contact-banner" v-if="pageData" v-bind:style="{backgroundImage: 'url(' + pageData.featuredImage.mediaItemUrl + ')'}">
    <header-app></header-app>
    <div class="row justify-content-center h-100">
        <div class="col-md-12 px-0 h-100">
            <div class="contact-banner__info-container h-100">
                <div class="contact-banner__info p-3">
                    <h2 class="contact-banner__title">{{ pageData.title }}</h2>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
import HeaderApp from '@/components/global/Header'

export default {
    components: {
        HeaderApp
    },
    props: ['pageData']
}
</script>

<style lang="scss">
@import '../../scss/_variables';
@import '../../scss/bootstrap_custom';

.contact-banner {
    height: 80vh;
    background-image: url('/slide-home/first-slide.jpg');
    background-size: cover;
    background-position: center;
    position: relative;
    box-shadow: $shadow;

    @media (min-width: 720px) {
        height: 50vh;
    }

    @media (min-width: 1024px) {
        height: 70vh;
    }

    &::before {
        content: '';
        background-color: rgba($dark, .7);
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }

    &__info-container {
        color: white;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        text-align: center;
        padding-bottom: 2rem;
        
    }

    &__info {
        background-color: rgba($dark, .09);
        transition: background-color 1s;
        border-radius: .3rem;
        max-width: 90%;

        @media (min-width: 720px) {
            max-width: 70%;
        }

        &:hover {
            background-color: rgba($dark, .3);
        }
    }

    &__title {
        font-size: 2.5em;
        font-weight: 800;
    }

    &__description {
    }
}
</style>