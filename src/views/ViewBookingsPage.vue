<template>
    <div>
        <NavBar></NavBar>
        <ViewBookings></ViewBookings>
        <HomePageContact></HomePageContact>
    </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import HomePageContact from '../components/HomePageContact.vue'
import ViewBookings from '../components/ViewBookings.vue'

export default {
    name: 'login-page',
    components: {NavBar, HomePageContact, ViewBookings},
    props: [],
};
</script>

<style>

</style>