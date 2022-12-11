<template>
    <div>
        <NavBar></NavBar>
        <SignUp></SignUp>
        <HomePageContact> </HomePageContact>
    </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import SignUp from '../components/SignUp.vue'
import HomePageContact from '../components/HomePageContact.vue'

export default {
    name: 'signup-page',
    components: {NavBar, HomePageContact, SignUp},
    props: [],
};
</script>

<style>

</style>