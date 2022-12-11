<template>
    <div>
        <NavBar></NavBar>
        <Login></Login>
        <HomePageContact> </HomePageContact>
    </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import Login from '../components/Login.vue'
import HomePageContact from '../components/HomePageContact.vue'

export default {
    name: 'login-page',
    components: {NavBar, HomePageContact, Login},
    props: [],
};
</script>

<style>

</style>