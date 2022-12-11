<template>
    <div>
        <NavBar></NavBar>
        <ForgotPassword></ForgotPassword>
        <HomePageContact> </HomePageContact>
    </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import ForgotPassword from '../components/ForgotPassword.vue'
import HomePageContact from '../components/HomePageContact.vue'

export default {
    name: 'forgot-password-page',
    components: {NavBar, HomePageContact, ForgotPassword},
    props: [],
};
</script>

<style>

</style>