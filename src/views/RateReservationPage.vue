<template>
    <div>
        <NavBar></NavBar>
        <RateReservation></RateReservation>
        <HomePageContact></HomePageContact>
    </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import HomePageContact from '../components/HomePageContact.vue'
import RateReservation from '../components/RateReservation.vue'

export default {
    name: 'login-page',
    components: {NavBar, HomePageContact, RateReservation},
    props: [],
};
</script>

<style>

</style>