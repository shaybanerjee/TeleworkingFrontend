<template>
    <div class="gallary">
        <figure class="gallery__item gallery__item--1">
            <img src="../assets/office_image1.jpg" class="gallery__img" alt="Image 1">
        </figure>
        <figure class="gallery__item gallery__item--2">
            <img src="../assets/office_image2.jpg" class="gallery__img" alt="Image 2">
        </figure>
        <figure class="gallery__item gallery__item--3">
            <img src="../assets/office_image3.jpg" class="gallery__img" alt="Image 3">
        </figure>
        <figure class="gallery__item gallery__item--4">
            <img src="../assets/office_image4.jpg" class="gallery__img" alt="Image 4">
        </figure>
    </div>
</template>

<script>
</script>

<style>
.gallary {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 5vw);
    height: 300px;
    overflow: hidden;
    width: 1100px;
    margin: 0 auto;
    margin-top: 20px;
}

.gallery__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.gallery__item--1 {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;
    margin: 5px;
}

.gallery__item--2 {
    grid-column-start: 3;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 3;
    margin: 5px;
}

.gallery__item--3 {
    grid-column-start: 5;
    grid-column-end: 9;
    grid-row-start: 1;
    grid-row-end: 6;
    margin: 5px;
}

.gallery__item--4 {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 3;
    grid-row-end: 6;
    margin: 5px;
}
</style>