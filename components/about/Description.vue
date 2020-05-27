<template>
<div v-if="imageInfo">
    <section class="container about-description">
        <div class="row justify-content-center">
            <div class="col-md-12 px-0">
                <div class="about-description__content">
                    <div class="about-description__image" v-bind:style="{ backgroundImage: 'url(' + imageInfo + ')' }">
                    </div>

                    <div class="about-description__info">
                        <h2 class="about-description__title mb-3">Rikell Vargas & Tuesta</h2>

                        <div v-html="info" v-if="info" class="about-description__info-api px-lg-1"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="container mission">
        <div class="row justify-content-center">
            <div class="col-md-6 col-lg-5 mb-5 mb-md-0">
                <div class="card mission__card py-3">
                    <div class="card-body">
                        <p class="mission__icon">
                            <i class="fas fa-shield-alt"></i>
                        </p>

                        <h3 class="mission__title mt-md-1 mt-lg-0">
                            Nuestra
                            Misión
                        </h3>

                        <div v-html="mission" v-if="mission" class="mission__info mt-3"></div>

                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-5">
                <div class="card mission__card py-3">
                    <div class="card-body">
                        <p class="mission__icon">
                            <i class="fas fa-shield-alt"></i>
                        </p>
                        <h3 class="mission__title">
                            Nuestra
                            Visión
                        </h3>

                        <div v-html="vission" v-if="vission" class="mission__info mt-3"></div>

                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
export default {
    props: ['imageInfo', 'info', 'mission', 'vission']
}
</script>

<style lang="scss">
@import '../../scss/_variables';
@import '../../scss/bootstrap_custom';

.about-description {
    
    @media (min-width: 720px) {
        margin-top: 5rem;
    }

    &__info-api {
        span,
        p {
            font-family: 'Open Sans', sans-serif !important;
        }
    }
}

.about-description__content {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 2fr auto;

    @media (min-width: 1200px) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
    }
}

.about-description__info {
    color: $dark;
    padding: 4rem 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    grid-column: 1 / 2;
    grid-row: 1 / 2;

    @media (min-width: 1200px) {
        grid-column: 2 / 3;
    }
}

.about-description__title {
    font-size: 2.5em;
    font-weight: 800;
    color: $dark;
    margin: 0;
}

.home-about__description {
    font-weight: normal;
    margin: 0;
}

.about-description__image {
    /* background-image: url('/slide-home/second-slide.jpg'); */
    background-size: cover;
    background-position: center;
    position: relative;
    min-height: 400px;
    box-shadow: $shadow;

    grid-column: 1 / 2;
    grid-row: 2 / 3;

    @media (min-width: 1200px) {
        grid-row: 1 / 2;
    }

    &::before {
        content: '';
        background-color: rgba($dark, .6);
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
}

.mission {
    text-align: center;

    @media (min-width: 1024px) {
        margin-top: 5rem;
    }

    &__card {
        background-color: rgba($dark, .9) !important;
        color: white;
        border: none !important;
        transition: background-color 1s;
        position: relative;
        box-shadow: $shadow;

        @media (min-width: 720px) {
            height: 400px;
        }

        @media (min-width: 1200px) {
            height: 350px;
        }

        &:hover {
            background-color: $dark !important;
        }

        &:hover .mission__icon{
            color: $warning;
            transform: translateY(-1rem);
        }
        
    }


    &__icon {
        font-size: 2em;
        transition: transform .7s;
        color: rgba($warning, .9);
    }

    &__title {
        font-size: 2em;
        font-weight: 800;
        display: inline-block;
        padding-bottom: .7rem;
        position: relative;

        /* &:hover {
            &::after {
            content: '';
                background-color: $primary;
                width: 100%;
                height: 4px;
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
            }
        } */
        
        &::after {
            content: '';
            background-color: $warning;
            width: 40%;
            height: 4px;
            position: absolute;
            bottom: 0;
            left: 30%;
            right: 30%;
            transition: all 1s;
        }
    }

    &__description {
        margin-top: 1rem;
    }

    &__info {
        span,
        p {
            font-family: 'Open Sans', sans-serif !important;
        }
    }
}
</style>