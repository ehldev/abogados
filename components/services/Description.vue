<template>
<div class="container service-content">
    <div class="row align-items-center">
        <!-- <div class="col-lg-6 service-content__image">
        </div> -->

        <div class="col-lg-6 service-images">
            <div class="service-content__images">
                <div class="service__image-container-1">
                    <img src="https://www.esneca.com/wp-content/uploads/tecnico-experto-en-criminologia-perito-judicial-en-criminologia-doble-titulacion.jpg" alt="" class="service__image">
                </div>

                <div class="service__image-container-2">
                    <img src="https://www.inpocipe.com/wp-content/uploads/2015/08/Criminologia.jpg" alt="" class="service__image">
                </div>

                <div class="service__image-container-3">
                    <img src="https://www.staticjbx.com/images/blog/86644/86644_desktop_31667afbe7ca6edbb95d177a87e347ac_photo.jpg" alt="" class="service__image">
                </div>
            </div>
        </div>

        <div class="col-lg-6 text-center">
            <h3 class="service-content__subtitle">Estudio Rikell Vargas & Tuesta</h3>

            <h2 class="service-content__title my-3">Especialistas en ciencias penales</h2>

            <p class="service-content__description">
                Nos desempeñamos en el análisis de estudios científicos de escenas de crímenes, en especial en los delitos violentos, que hoy en día aquejan y flagelan a la sociedad.
            </p>

            <nuxt-link to="/contacto" class="btn btn-lg btn-primary mt-3">Contáctanos</nuxt-link>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss">
@import '../../scss/variables';

.service-content {
    margin-top: 3rem;

    /* &__image {
        background-image: url('https://www.inpocipe.com/wp-content/uploads/2015/08/Criminologia.jpg');
        background-size: cover;
        background-position: center;
        box-shadow: 6px 10px 27px -3px rgba(0,0,0,0.61);
    } */

    &__images {
        max-width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
    }

    /* &__image {
        max-width: 100%;
    } */

    &__subtitle {
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

    &__title {
        font-size: 2em;
        font-weight: 700;
        color: $dark;

        @media (min-width: 720px) {
            font-size: 3em;
        }
    }

    &__description {
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
}

.service-images {
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

    /* @media (min-width: 720px) {
        grid-column: 2 / 3;
    } */
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