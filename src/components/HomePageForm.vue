<template>
<div class="hompage_component">
    <div class="form_component">
        <h4 class="title"> Work from home, where home is <br> anywhere </h4>
    </div>
</div>
</template>

<script>

</script>

<style>
.hompage_component .form_component .title {
    font-family: Avenir;
    font-weight: 450;
    font-size: 27px;
    margin-bottom: 20px;
    margin-top: 30px;
}

.hompage_component .form_component p {
    font-size: 17px;
    margin-bottom:30px;
}

.hompage_component .form_component #input {
    border: none;
    border-bottom: 1.5px solid #7600ED;
    width: 280px;
    height: 22px;
}

.hompage_component .form_component #input::placeholder {
    color: #7600ED;
}

.hompage_component .form_component .purple_button {
    border: none;
    color: white;
    border-radius: 20%;
    background-color: #7600ED;
    width: 100px;
    font-size: 15px;
    height: 28px;
    border-radius: 25px;
    margin-top: 9px;
}

.hompage_component .form_component .purple_button:hover {
  background-color: #7a49a5;
}

.hompage_component .form_component .purple_button:active {
  background-color: #7a49a5;
  box-shadow: 0 2px #666;
  transform: translateY(2px);
}

</style>
