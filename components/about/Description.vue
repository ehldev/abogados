<template>
<div>
    <section class="container about-description">
        <div class="row justify-content-center">
            <div class="col-md-12 px-0">
                <div class="about-description__content">
                    <div class="about-description__image">
                    </div>

                    <div class="about-description__info">
                        <h2 class="about-description__title mb-3">Rikell Vargas & Tuesta</h2>

                        <p class="about-description__description">
                            La firma Rikell Vargas & Tuesta, constituye un espacio desde el cual nos desempeñamos en el asesoramiento en temas penales de manera eficiente y eficaz. Somos expertos en el ámbito del litigio, lo cual nos permite dar solución a incertidumbres jurídicas a través de diferentes mecanismos legales, pensando en el mejor bienestar para el cliente. Nuestro propósito es el asesoramiento permanente y sobre todo, responsable en la solución de sus conflictos.
                        </p>

                        <p class="about-description__description">
                            Somos expertos en el área de criminalística, teniendo en cuenta que en la actualidad, con la entrada del nuevo ordenamiento procesal, dicha rama científica se ha convertido en el pilar de donde emanan un cumulo de datos que requieren ser analizados por expertos dependiendo de la especialidad y naturaleza del delito.
                        </p>

                        <p class="about-description__description">
                            Nos desempeñamos en el análisis de estudios científicos de escenas de crímenes, en especial en los delitos violentos, que hoy en día aquejan y flagelan a la sociedad. Una buena investigación abre el camino para el éxito en el juicio oral.
                        </p>
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
                        <h3 class="mission__title mt-md-3 mt-lg-0">
                            Nuestra
                            Misión
                        </h3>

                        <p class="mission__description mb-0">
                            Alcanzar una actividad de asesoría y consultoría legal especializada en el campo penal y su plataforma de las ciencias forenses.
                        </p>

                        <p class="my-0">
                            Pues bien, se busca posesionarse como una firma legal de elevado prestigio.
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-5">
                <div class="card mission__card py-3">
                    <div class="card-body">
                        <h3 class="mission__title">
                            Nuestra
                            Visión
                        </h3>

                        <p class="mission__description">
                            La firma Rikell Vargas & Tuesta, tienen un enorme y ambicioso propósito de contribuir al desarrollo y correcta administración de justicia, velar por los derechos de los justiciables, propósitos que son confiados en un equipo especializado y sobre todo responsable. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
@import '../../scss/_variables';
@import '../../scss/bootstrap_custom';

.about-description {
    margin-top: 5rem;
}

.about-description__content {
    display: grid;
    grid-template-columns: 1fr;
    /* grid-gap: 1rem; */

    @media (min-width: 1024px) {
        grid-template-columns: 1fr 1fr;
    }
}

.about-description__info {
    color: $dark;
    padding: 4rem 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.about-description__title {
    font-size: 2.5em;
    font-weight: 800;
    color: $primary;
    margin: 0;
}

.home-about__description {
    font-weight: normal;
    margin: 0;
}

.about-description__image {
    background-image: url('/slide-home/second-slide.jpg');
    background-size: cover;
    background-position: center;
    position: relative;
    min-height: 400px;
    box-shadow: 6px 10px 27px -3px rgba(0,0,0,0.61);

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
        margin-top: 7rem;
    }

    &__card {
        background-color: rgba($dark, .9) !important;
        color: white;
        border: none !important;
        transition: background-color 1s;
        position: relative;
        box-shadow: 1px 10px 15px -8px rgba(0,0,0,0.68);

        @media (min-width: 720px) {
            height: 370px;
        }

        @media (min-width: 1024px) {
            height: 350px;
        }

        &:hover {
            background-color: $dark !important;
        }

        &:before {
            -moz-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3), -1px 1px 1px rgba(0, 0, 0, 0.2);
            background: none repeat scroll 0 0 $primary; /* color esquina */
            border-color: #FFFFFF #FFFFFF $primary $primary; /* color de borde */
            border-style: solid;
            border-width: 0 36px 36px 0;
            content: "";
            display: block;
            position: absolute;
            right: 0;
            top: 0;
            width: 0;
        }
    }

    /* &__card:hover .mission__title {
        &::before {
            width: 100%;
            bottom: 0;
            left: 0;
            right: 0;
        }
    } */

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
            background-color: $primary;
            width: 50%;
            height: 4px;
            position: absolute;
            bottom: 0;
            left: 25%;
            right: 25%;
            transition: all 1s;
        }
    }

    &__description {
        margin-top: 2rem;
    }
}
</style>