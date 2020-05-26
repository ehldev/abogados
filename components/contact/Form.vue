<template>
<div class="container contact" v-if="redesSociales">
    <div class="row">
        <div class="col-lg-6 mb-5 mb-lg-0">
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
                    <span class="contact__item-content">{{ redesSociales.edges[0].node.redes.celular }}</span>
                </p>

                <!--Email -->
                <p class="contact__item mb-3">
                    <span class="icon">
                        <i class="far fa-envelope-open"></i>
                    </span>
                    <a :href="`mailto:${redesSociales.edges[0].node.redes.correo.trim()}`" class="contact__item-link">{{ redesSociales.edges[0].node.redes.correo }}</a>
                </p>

                <!--Dirección -->
                <p class="contact__item mb-3 d-flex">
                    <span class="icon mr-2">
                        <i class="fas fa-map-marker-alt"></i>
                    </span>
                    <span class="contact__item-content">{{ ubication }}</span>
                </p>

            </div>
        </div>
        <div class="col-lg-6">
            <v-app v-if="!formSend">
                <v-form
                    ref="form"
                    v-model="valid"
                    lazy-validation>

                    <v-text-field
                        v-model="name"
                        label="Nombre completo"
                        filled
                        :rules="fieldRequired"
                    ></v-text-field>

                    <v-text-field
                        v-model="email"
                        label="Correo electrónico"
                        filled
                        :rules="emailRules"
                    ></v-text-field>

                    <v-text-field
                        v-model="phone"
                        label="Número de contacto"
                        filled
                        :rules="fieldRequired"
                    ></v-text-field>

                    <v-text-field
                        v-model="subject"
                        label="Asunto"
                        filled
                        :rules="fieldRequired"
                    ></v-text-field>

                    <v-textarea
                    v-model="message"
                    filled
                    name="input-7-4"
                    label="Mensaje"
                    :rules="fieldRequired"
                    ></v-textarea>

                    <div class="form-group text-right">
                        <button @click.prevent="validate()" :disabled=" loading ? true : false " class="btn btn-lg btn-warning text-white px-5">{{ loading ? 'Enviando...' : 'Enviar mensaje' }}</button>
                    </div>
                </v-form>
            </v-app>
            
            <div class="send-message" v-else>
                <h2 class="send-message__title">Gracias por su mensaje. Ha sido enviado.</h2>
            </div>
        </div>
    </div>

    <!-- Maps -->
    <div class="row maps">
        <div class="col-md-12">
            <!-- El iframe del mapa viene de la página de contacto -->
            <div v-if="mapa" v-html="mapa"></div>
        </div>
    </div>
</div>
</template>

<script>
// Queries
import contactInfo from '@/apollo/queries/contact-info'

export default {
    data() {
        return {
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
            formSend: false,
            loading: false,
            valid: true,
            emailRules: [
                v => !!v || 'El correo es requerido',
                v => /.+@.+\..+/.test(v) || 'El correo debe contener @',
            ],
            fieldRequired: [
                v => !!v || 'Este campo es requerido'
            ]
        }
    },
    props: ['ubication', 'mapa'],
    apollo: {
        redesSociales: {
            prefetch: true,
            query: contactInfo
        }
    },
    methods: {
        validate() {
            if(this.$refs.form.validate()) {
                this.loading = true

                let data = {
                    'your-name': this.name,
                    'your-email': this.email,
                    'your-celular': this.phone,
                    'your-subject': this.subject,
                    'your-message': this.message
                }

                let url = 'https://abogados.josejollja.com/wp-json/contact-form-7/v1/contact-forms/67/feedback'

                let formData = new FormData()
                formData.append('your-name', this.name)
                formData.append('your-email', this.email)
                formData.append('your-celular', this.phone)
                formData.append('your-subject', this.subject)
                formData.append('your-message', this.message)

                if(this.name && this.email && this.phone && this.subject && this.message) {
                    fetch(url, {
                        method: 'POST', // or 'PUT'
                        body: formData // data can be `string` or {object}!
                    }).then(res => res.json())
                    .catch(error => {
                        this.formError = true
                        this.loading = false
                    })
                    .then(response => {
                        if(response.status === 'mail_sent') {
                            this.formSend = true
                            this.loading = false
                        }
                    });
                }
            }
        }
    }
}
</script>

<style lang="scss">
@import '../../scss/variables';

.contact {
    margin-top: 5rem;

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

    iframe {
        width: 100%;
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

.send-message__title {
    font-size: 1.5em;
    font-weight: 700;
    color: $dark;
}

.icon {
    color: $warning;
    font-weight: 700;
}

.theme--light.v-application {
    max-height: 500px;
}

.maps {
    margin-top: 7rem;
}
</style>