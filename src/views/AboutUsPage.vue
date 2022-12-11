<template>
    <div class="main_about_us">
        <NavBar></NavBar>
        <AboutUsContent> </AboutUsContent>
        <HomePageContact> </HomePageContact>
    </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import AboutUsContent from '../components/AboutUsContent.vue'
import HomePageContact from '../components/HomePageContact.vue'

export default {
    name: 'aboutus-page',
    components: {NavBar, AboutUsContent, HomePageContact},
    props: [],
};
</script>

<style>
.main_about_us .main_contact_container {
    margin-top: 100px;
}
</style>