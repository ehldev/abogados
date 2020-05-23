<template>
<div class="container contact">
    <div class="row">
        <div class="col-lg-6">
            <div class="contact__info">
                <h3 class="contact__subtitle">PONGÁMONOS EN CONTACTO</h3>
                <h2 class="contact__title mb-3">Detalles de contacto</h2>

                <p class="contact__description">
                    Envíenos un mensaje, nos encantaría saber de usted.
                </p>

                <!--Teléfono -->
                <p class="contact__item mb-3">
                    <span class="icon mr-2">
                        <i class="fas fa-mobile-alt"></i>
                    </span>
                    <span class="contact__item-content">928 351 168</span>
                </p>

                <!--Email -->
                <p class="contact__item mb-3">
                    <span class="icon">
                        <i class="far fa-envelope-open"></i>
                    </span>
                    <a href="mailto:info@demolink.org" class="contact__item-link">info@demolink.org</a>
                </p>

                <!--Dirección -->
                <p class="contact__item mb-3">
                    <span class="icon mr-1">
                        <i class="fas fa-map-marker-alt"></i>
                    </span>
                    <span class="contact__item-content">Jr. Don Bosco N° 436, Departamento 201 - Breña, Lima.</span>
                </p>

            </div>
        </div>
    </div>

    <!-- Maps -->
    <div class="row mt-5">
        <div class="col-md-12">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d975.4407723242143!2d-77.04780537084102!3d-12.05981488795932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8dcf2ff8b29%3A0x502033c9f2472833!2sNATBIO%20SAC!5e0!3m2!1ses-419!2spe!4v1590004895579!5m2!1ses-419!2spe" width="100%" height="600" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
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

.contact {
    margin-top: 5rem;
    margin-bottom: 10rem;

    &__subtitle {
        font-size: 1em;
        font-weight: 500;
        color: rgba(white, .8);
    }

    &__title {
        font-size: 2em;
        font-weight: 800;
        color: white;
    }

    &__description {
        font-size: 1em;
        color: rgba(white, .7)
    }
}

.contact__info {
    background-color: $dark;
    padding: 5rem 3rem;
    border-radius: .3rem;
    box-shadow: 1px 10px 15px -8px rgba(0,0,0,0.68);
}

.contact__item-content,
.contact__item-link {
    font-size: 1em;
    font-weight: 500;
    color: white;
}

.contact__item-link {
    color: white;

    &:hover {
        color: white;
    }
}

.icon {
    color: $warning;
    font-weight: 700;
}
</style>