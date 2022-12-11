<template>
    <div class="threeimg">
        <div class = "imagewtext">
            <img src="../assets/office2.svg" width="250" height="250" object-fit="cover" alt="Screen 2"/>
            <p><b>Office</b></p>
        </div>
        <div class = "imagewtext">
            <img src="../assets/coffeeshop.svg" width="250" height="250" object-fit="cover" alt="Screen 3"/>
            <p><b>Coffee Shop</b></p>
        </div>
        <div class = "imagewtext">
            <img src="../assets/restaurant2.svg" width="250" height="250"  object-fit="cover" alt="Screen 3"/>
            <p><b>Restaurant</b></p>
        </div>
    </div>
</template>


<script>

</script>

<style>
.threeimg {
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}

.threeimg img {
    width: 240px;
    height: 240px;
    margin-right: 10px;
}

.threeimg .imagewtext {
    margin-top: 2px;
    padding: 25px;
}

.threeimg .imagewtext p {
    margin-top: 2px;
    font-size: 20px;
    text-align: center;
}

</style>

