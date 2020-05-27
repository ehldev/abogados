<template>
<div class="gallery">
    <div class="gallery__image-container-1">
        <img :src="image.mediaItemUrl" :alt="image.altText" class="gallery__image">
    </div>

    <div class="gallery__image-container-2">
        <img :src="image2.mediaItemUrl" :alt="image2.altText" class="gallery__image">
    </div>

    <div class="gallery__image-container-3">
        <img :src="image3.mediaItemUrl" :alt="image3.altText" class="gallery__image">
    </div>
</div>
</template>

<script>
    export default {
        props: ['image', 'image2', 'image3']
    }
</script>

<style lang="scss">
@import '../../scss/_variables';

.gallery {
    max-width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 200px 200px 200px;

}

.gallery__image {
    max-width: 100%;
    min-height: 180px;
    max-height: 100%;
    border-radius: .2rem;
    box-shadow: $shadow;
}

.gallery__image-container-1 {
    grid-column: 2 / 3;
    grid-row: 1 / 2;

    /* @media (min-width: 720px) {
        grid-column: 2 / 3;
    } */
}

.gallery__image-container-2 {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    position: relative;

    .gallery__image {
        position: absolute;
        top: -10%;
        right: -10%;
        z-index: 10;
    }
}

.gallery__image-container-3 {
    grid-column: 2 / 3;
    grid-row: 3 / 4;
    width: 100%;
    position: relative;

    @media (min-width: 720px) {
        width: 80%;
    }

    .gallery__image {
        position: absolute;
        top: -30%;

        @media (min-width: 720px) {
            top: -30%;
            left: 0;
        }
    }
}
</style>