<template>
<footer class="footer bg-dark">
    <div class="footer__content align-items-center">
        <!-- Logo -->
        <div class="footer__logo-container">
            <img src="/logo-estudio.svg" alt="Logo Estudio Rikell Vargas & Tuesta" class="img-fluid footer__logo">
        </div>

        <!-- Footer info -->
        <div class="footer__info-container">
            <p class="footer__title mb-3">Estudio Rikell Vargas & Tuesta</p>
            <p class="description text-white mb-2">
                <span class="footer__icon mr-1">
                    <i class="fas fa-map-marker-alt"></i>
                </span>
                Jr. Don Bosco N° 436, Departamento 201 - Breña, Lima.
            </p>
            <p class="description text-white mb-2">
                <span class="footer__icon mr-2">
                    <i class="fas fa-mobile-alt"></i>
                </span>
                
                928 351 168
            </p>
            <p class="description text-white mb-2">
                <span class="footer__icon">
                    <i class="far fa-envelope-open"></i>
                </span>
                info@demolink.org
            </p>

            <!-- Social icons -->
            <!-- <div class="footer__social mt-3">
                <a href="https://www.facebook.com/ABRGrupoConsultor/" target="_blank" class="mx-1">
                    <img src="../assets/icons/facebook.svg" alt="Facebook ABR Grupo consultor">
                </a>
                <a href="https://www.instagram.com/abrgrupoconsultor/" target="_blank" class="mx-1">
                    <img src="../assets/icons/instagram.svg" alt="Instagram ABR Grupo consultor">
                </a>
                <a href="https://twitter.com/abr_grupo" target="_blank" class="mx-1">
                    <img src="../assets/icons/twitter.svg" alt="Twitter ABR Grupo consultor">
                </a>
                <a href="" target="_blank" class="mx-1">
                    <img src="../assets/icons/whatsapp.svg" alt="Correo ABR Grupo consultor">
                </a> 
                <a href="https://www.abrgrupoconsultor.pe/webmail" target="_blank" class="mx-1">
                    <img src="../assets/icons/mail.svg" alt="Correo ABR Grupo consultor" class="mx-1">
                </a> 
            </div> -->
        </div>
    </div>
</footer>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
@import '../../scss/variables';

.footer {
    width: 100%;
    background-image: url('https://usmp.edu.pe/posgrado/images/maestria_derecho_registral.jpg');
    background-size: cover;
    margin-top: 5rem;
    padding-top: 5rem;
    padding-bottom: 5rem;
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
    
    &__content {
        max-width: 80%;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 150px 1fr;
        grid-gap: 1rem;
        margin: 0 auto;
        padding: 1rem;
        z-index: 100;
        text-align: center;

        @media (min-width: 720px) {
            max-width: 70%;
            grid-template-columns: .7fr 1fr;
            grid-template-rows: 1fr;
            text-align: left;
        }

        @media (min-width: 1024px) {
            max-width: 60%;
        }
    }

    &__title {
        font-size: 1.3em;
        color: white;
    }

    .description {
        font-size: 1em;
        margin: 0;
    }

    &__icon {
        color: rgba($warning, .9);
        transition: color .5s;

        &:hover {
            color: $warning;
        }
    }

    &__logo-container {
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 100;
    }

    &__info-container {
        z-index: 100;
        padding-bottom: 1rem;
        border-bottom: 3px solid rgba($warning, .9);

        @media (min-width: 720px) {
            margin-top: 0;
        }
    }

    .footer__logo {
        width: 100%;

        @media (min-width: 1024px) {
            width: 80%;
        }
    }
}

.footer__social {
    img {
        max-width: 8%;

        @media (min-width: 720px) {
            max-width: 6%;
        }
    }
}
</style>