<template>
    <div class="threeimg2">
        <div class = "imagewtext">
            <img src="../assets/browse.svg" width="250" height="250" object-fit="cover" alt="Screen 2"/>
            <p><b>Browse Workspaces</b></p>
        </div>
        <div class = "imagewtext">
            <img src="../assets/host.svg" width="250" height="250" object-fit="cover" alt="Screen 3"/>
            <p><b>Host a Workspace</b></p>
        </div>
        <div class = "imagewtext">
            <a href="#HomePageContact">
                <img src="../assets/contact.svg" width="250" height="250"  object-fit="cover" alt="Screen 3"/>
            </a>
            <p><b>Contact Us</b></p>
        </div>
    </div>
</template>


<script>

</script>



<style>
.threeimg2 {
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
}

.threeimg2 img {
    width: 240px;
    height: 240px;
    margin-right: 10px;
}

.threeimg2 .imagewtext {
    margin-top: 2px;
    padding: 25px;
}

.threeimg2 .imagewtext p {
    margin-top: 2px;
    font-size: 20px;
    text-align: center;
}
</style>

