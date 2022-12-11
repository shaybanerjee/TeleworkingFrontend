<template>
    <div class="main_landing_page">
        <NavBar></NavBar>
        <GridGallary></GridGallary>
        <LandingPageHost></LandingPageHost>
        <HomePageContact> </HomePageContact>
    </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import GridGallary from '../components/GridGallary.vue'
import LandingPageHost from '../components/LandingPageHost.vue'
import HomePageContact from '../components/HomePageContact.vue'

export default {
    name: 'landing-page',
    components: {NavBar, GridGallary, LandingPageHost, HomePageContact},
    props: [],
};
</script>

<style>

.main_landing_page .main_contact_container {
    margin-top: 457px;
    height: 486px;
}
</style>