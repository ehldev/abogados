<template>
<header id="header" class="header" :class="headerDark || this.color === 'dark' ? 'header--dark' : ''">
    <div class="header-container">
        <section class="nav-container align-items-center">
            <div class="logo-container">
                <nuxt-link to="/">
                    <img src="/logo-estudio.png" alt="Logo Estudio Rikell Vargas & Tuesta" class="logo__image" />
                </nuxt-link>
            </div>

            <div class="hamburger" :class="setHamburgerActive" @click.prevent="toggleNav()">
                <div class="hamburger-box">
                    <div class="hamburger-inner"></div>
                </div>
            </div>

            <nav class="nav py-0 animated mt-lg-4" :class="setNavActive">
                <nuxt-link to="/" class="nav__link nav__link--mobile">INICIO</nuxt-link>
                <nuxt-link to="/sobre-nosotros" class="nav__link nav__link--mobile">NOSOTROS</nuxt-link>
                <nuxt-link to="/servicios" class="nav__link nav__link--mobile">SERVICIOS</nuxt-link>
                <nuxt-link to="/publicaciones" class="nav__link nav__link--mobile">PUBLICACIONES</nuxt-link>
                <nuxt-link to="/contacto" class="nav__link nav__link--mobile btn-contact btn btn-primary rounded-0 d-none d-lg-block">CONTACTO</nuxt-link>
                <nuxt-link to="/contacto" class="nav__link nav__link--mobile btn-contact-mobile btn btn-outline-dark text-white d-lg-none">CONTACTO</nuxt-link>
            </nav>
        </section>
    </div>
</header>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {
            navActive: false,
            hamburgerActive: false,
            dropdownActive: false,
            headerDark: false
        }
    },
    mounted() {
      this.$nextTick(function(){
          let _this = this
           
          // Verifica si el usuario hizo scroll para cambiarlo de color
          window.addEventListener("scroll", function(){
            var navbar = document.getElementById("header")
            var nav_classes = navbar.classList
            if(document.documentElement.scrollTop >= 150) {
              _this.headerDark = true
            }
            else {
              _this.headerDark = false
            }
          })
        })
    },
    props: ['color'],
    methods: {
        toggleNav() {
            this.navActive = !this.navActive
            this.hamburgerActive = ! this.hamburgerActive
            this.dropdownActive = false
        },
        toggleDropdown() {
            this.dropdownActive = !this.dropdownActive
        },
        to(route) {
            this.$router.push(route)
        }
    },
    computed: {
        ...mapState(['services']),
        setHamburgerActive: function() {
            return this.hamburgerActive ? 'hamburger--collapse is-active' : ''
        },
        setNavActive: function() {
            return this.navActive ? 'nav--active' : ''
        }
    }
}
</script>

<style lang="scss">
@import '../../scss/variables';

.header {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    padding: .5rem 0;
    background-color: $dark;
    /* transition: background-color .5s linear; */

    @media (min-width: 1024px) {
        background-color: rgba($dark, .05);
    }

    &-container {
        width: 90%;
        margin: 0 auto;

        @media (min-width: 1024px) {
            width: 90%;
        }
    }
}

.btn--contact {
    display: none;
    text-decoration: none !important;

    @media (min-width: 1024px) {
        display: inline-block;
        padding: .1rem 1rem;
        border: 1px solid white;
        border-radius: .2rem;
        

        &:hover {
            background-color: $primary;
            border-color: $primary;
        }
    }

    &.nuxt-link-active {
        background-color: $primary;
        border: 1px solid $primary;
    }
    
}

.logo-container {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    width: 100%;
    display: flex;
    align-items: center;
}

.logo__image {
    width: 50%;
    cursor: pointer;

    @media (min-width: 720px) {
      width: 30%;
    }

    @media (min-width: 1024px) {
      width: 60%;
      margin-top: 1rem;
    }

    @media (min-width: 1200px) {
      margin-top: 0;
    }
}

.nav-container {
    min-height: 70px;
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: 1fr auto;
    position: relative;
    align-items: center;
    align-content: center;
    /* transition: background-color .5s; */

    @media (min-width: 1024px) {
       grid-template-columns: 1fr 3fr;
    }
}

.nav {
    grid-column: 1 / 3;
    grid-row: 2 / 3;
    width: 100%;
    /* background-color: $primary; */
    background: rgb(80,92,253);
    background: linear-gradient(90deg, rgba(80,92,253,0.9220063025210083) 0%, rgba(80,92,253,1) 100%);
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
    border-radius: .3rem;
    position: absolute;
    top: .5rem;
    right: -170%;
    z-index: 1000;
    transition: right .7s;

    @media (min-width: 1024px) {
       background-color: none !important;
       background-image: none;
       width: 100%;
       grid-column: 2 / 3;
       grid-row: 1 / 2;
       flex-direction: row;
       justify-content: flex-end;
       right: 0;
       /* transition: background-color .9s linear; */

        .nav__link {
            color: rgba(white, .8);
            transition: color .3s;

            &:hover {
                color: white;
                text-decoration: none;
            }
        }
    }

    &--active {
        right: 0;

        .nav__link {
            color: rgba(white, .85);
            transition: color .3s;

            &:hover {
                color: white;
                text-decoration: none;
            }
        }
    }
}

.nav__link {
    width: max-content;
    color: rgba(white, .7);
    display: inline-block;
    margin: .5rem 0;
    padding: .1rem .5rem;
    transition: color .5s ease-in-out;
    border-radius: .3rem;

    @media (min-width: 1024px) {
        width: auto;
        margin: .5rem 0 .5rem 1rem;
    }

    &.nuxt-link-active.nuxt-link-exact-active {
        /* background-color: $primary; */
        /* border: 1px solid $primary; */
        position: relative;

        &::after {
            content: '';
            background-color: $warning;
            width: 1.5rem;
            height: 2px;
            position: absolute;
            bottom: 0;
            left: 10%;
        }
    }

    /* Quita el borde del link activo */
    &.btn-contact.nuxt-link-active.nuxt-link-exact-active {
        &::after {
            content: '';
            background-color: transparent;
        }
    }
}

.btn-contact-mobile {
    max-width: 200px;
}

.hamburger {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    z-index: 100;

    &:hover {
        opacity: .9;
    }

    &-inner {
        background-color: white;

        &::before {
            background-color: white;
        }

        &::after {
            background-color: white;
        }
    }

    @media (min-width: 1024px) {
       display: none;
    }
}

.hamburger.is-active
.hamburger-inner,
.hamburger.is-active
.hamburger-inner:after,
.hamburger.is-active
.hamburger-inner:before {
    background-color: white;
}

.hamburger.is-active:hover {
    opacity: .9;
}

.header--dark {
    background-color: $dark;
    border-bottom: 1px solid rgba($dark, .3);

    .logo {
        /* background-image: url('~static/global/logo-azul.svg'); */
    }

    .hamburger {
        z-index: 100;

        &:hover {
            opacity: .9;
        }

    }

    .nav-container {
        background-color: $dark;
    }

    .nav {
        padding-bottom: 0;
    }

    .nav__link.nav__link--mobile {
        color: rgba(white, .8);

        &:hover {
            color: white;
        }

        @media (min-width: 1024px) {
            color: rgba(white, .8);

            &:hover {
                color: white;
            }
        }
    }
}

.nav__link.nuxt-link-active {
    /* background-color: $primary !important;
    color: white !important; */
    /* border-bottom: 1px solid $primary; */
}
</style>