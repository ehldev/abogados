<template>
<footer class="footer" v-if="page">
    <div class="footer__content container">
        <div class="row">
            <div class="col-md-4">
                <img src="/logo-estudio.svg" alt="Logo Estudio Rikell Vargas & Tuesta" class="footer__logo">
            </div>

            <div class="col-md-8 d-flex align-items-md-center text-center text-md-left">
                <div class="row">
                    <div class="col-md-6">
                        <h3 class="footer__title mb-3">Estudio Rikell Vargas & Tuesta</h3>
                        <p class="description text-white mb-2 d-flex justify-content-center justify-content-md-start mt-3">
                            <span class="footer__icon mr-md-2">
                                <i class="fas fa-map-marker-alt"></i>
                            </span>
                            {{ page.contacto.direccion }}
                        </p>
                        <p class="description text-white mb-2 d-flex justify-content-center justify-content-md-start">
                            <span class="footer__icon">
                                <i class="fas fa-mobile-alt"></i>
                            </span>
                            
                            {{ page.contacto.telefono }}
                        </p>
                        <p class="description text-white mb-2 d-flex justify-content-center justify-content-md-start">
                            <span class="footer__icon">
                                <i class="far fa-envelope-open"></i>
                            </span>
                            <a href="mailto:info@demolink.org" class="text-white">info@demolink.org</a>
                        </p>
                    </div>

                    <div class="col-md-6">
                        <div class="footer__social-container">
                            <h3 class="footer__title mb-3">Nuestras redes sociales</h3>

                            <section>
                                <a href="" class="footer__social-icon">
                                    <i class="fab fa-facebook"></i>
                                </a>
                                <a href="" class="footer__social-icon">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a href="" class="footer__social-icon">
                                    <i class="fab fa-whatsapp"></i>
                                </a>
                            </section>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        
    </div>
</footer>
</template>

<script>
// Queries
import contact from '@/apollo/queries/contact'

export default {
    apollo: {
        page: {
            prefetch: true,
            query: contact
        }
    }
}
</script>

<style lang="scss">
@import '../../scss/variables';

.footer {
    width: 100%;
    background-image: url('https://usmp.edu.pe/posgrado/images/maestria_derecho_registral.jpg');
    background-size: cover;
    margin-top: 5rem;
    padding-top: 3rem 0;
    position: relative;

    @media (min-width: 720px) {
        margin-top: 7rem;
    }

    &::before {
        content: '';
        width: 100%;
        height: 100%;
        background-color: rgba($dark, .8);
        position: absolute;
        top: 0;
        left: 0;
    }

    &__title {
        font-size: 1.2em;
        font-weight: 700;
        color: white;
        display: inline-block;

        position: relative;

        &::before {
            content: '';
            background-color: $warning;
            width: 2rem;
            height: 3px;

            position: absolute;
            bottom: -.5rem;
            left: 0;
        }
    }

    &__icon {
        width: 1.5rem;
        color: rgba($warning, .9);
        transition: color .5s;

        &:hover {
            color: $warning;
        }
    }

    &__social-icon {
        width: auto;
        font-size: 1.5rem;
        color: rgba(white, .7);
        transition: color .5s;
        margin: 0 .3rem;

        &:hover {
            color: white;
        }
    }
}
</style>