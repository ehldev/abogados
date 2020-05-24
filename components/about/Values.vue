<template>
<div class="values bg-dark" v-if="values">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-10">
                <h2 class="values__title mb-5">Nuestros principales valores</h2>
            </div>
        </div>
        <div class="row justify-content-center values__list mt-5">
            <div class="col-md-4 col-lg-3 mb-3" v-for="(value, index) in values" :key="index">
                <div class="value py-5">
                    <span class="value__icon">
                        <i :class="value.valueIcon"></i>
                    </span>
                    <h3 class="value__title">{{ value.valueName }}</h3>
                </div>
            </div>
            <!-- <div class="col-md-4 col-lg-3 mb-3">
                <div class="value py-5">
                    <span class="value__icon">
                        <i class="fas fa-balance-scale-right"></i>
                    </span>
                    <h3 class="value__title">Pasión por la justicia</h3>
                </div>
            </div>
            <div class="col-md-4 col-lg-3 mb-3">
                <div class="value py-5">
                    <span class="value__icon">
                        <i class="fas fa-handshake"></i>
                    </span>
                    <h3 class="value__title">Compromiso y responsabilidad</h3>
                </div>
            </div> -->
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: ['values']
}
</script>

<style lang="scss">
@import '../../scss/_variables';

.values {
    margin-top: 6rem;
    color: white;
    text-align: center;
    padding-top: 5rem;
    padding-bottom: 5rem;

    &__title {
        font-weight: 700;
        display: inline-block;
        position: relative;

        &::after {
            content: '';
            background-color: $warning;
            width: 25%;
            height: 4px;
            position: absolute;
            bottom: -1rem;
            left: 35%;
            right: 35%;
        }
    }
}

.value {
    min-height: 220px;
    border: 1px solid rgba($warning, .6);
    transition: border .5s, background-color .7s;

    &:hover {
        background-color: $warning;
        border: 1px solid $warning;
    }

    &:hover .value__title{
        color: $dark;
    }

    &:hover .value__icon{
        transform: translateY(-1rem);
    }

    &__icon {
        font-size: 2.5em;
        display: inline-block;
        transition: transform .7s;
    }

    &__title {
        font-size: 1.2em;
        font-weight: 500;
        width: 80%;
        margin: .5rem auto;
        transition: color .5s;
    }
}
</style>