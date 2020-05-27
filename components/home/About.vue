<template>
<section class="container home-about" v-if="content && image">
    <div class="row justify-content-center">
        <div class="col-md-12 bg-dark p-0">
            <div class="home-about__content">
                <div class="home-about__info">
                    <!-- <h2 class="home-about__title mb-3">Sobre nosotros</h2> -->

                    <!-- <p class="home-about__description">
                        La firma Rikell Vargas & Tuesta, constituye un espacio desde el cual nos desempeñamos en el asesoramiento en temas penales de manera eficiente y eficaz. Somos expertos en el ámbito del litigio, lo cual nos permite dar solución a incertidumbres jurídicas a través de diferentes mecanismos legales, pensando en el mejor bienestar para el cliente. Nuestro propósito es el asesoramiento permanente y sobre todo, responsable en la solución de sus conflictos.
                    </p> -->

                    <div v-html="content"></div>

                    <nuxt-link to="/sobre-nosotros" class="btn btn-outline-warning rounded-0 align-self-end mt-5">Más información</nuxt-link>
                </div>
                <div class="home-about__image" v-bind:style="{backgroundImage: 'url(' + image.mediaItemUrl + ')'}">
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    props: ['content', 'image']
}
</script>

<style lang="scss">
@import '../../scss/_variables';
@import '../../scss/bootstrap_custom';

.home-about {
    margin-top: 5rem;
    margin-bottom: 10rem;
}

.home-about__content {
    display: grid;
    grid-template-columns: 1fr;
    box-shadow: $shadow;

    @media (min-width: 720px) {
        grid-template-columns: 1fr 1fr;
    }
}

.home-about__info {
    color: white;
    padding: 4rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-bottom: 4px solid rgba($warning, .8);

    h2 {
        font-size: 2.5em;
        font-weight: 800;
        margin: 1rem 0;
    }

    p {
        font-weight: normal;
        margin: 0;
    }
}

.home-about__image {
    background-size: cover;
    background-position: center;
    position: relative;
    min-height: 400px;

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
</style>