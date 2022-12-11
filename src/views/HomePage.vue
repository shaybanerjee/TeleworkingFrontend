<template>
  <div id="app">
    <NavBar id="navbar"></NavBar>
    <HomePageForm id="HomePageForm"> </HomePageForm>
    <HomePageThreePics1 id="HomePageThreePics1"> </HomePageThreePics1>
    <HomePageWhatWeDo id="HomePageWhatWeDo"> </HomePageWhatWeDo>
    <DataInsights id="DataInsights"> </DataInsights>
    <HomePageThreePics2 id="HomePageThreePics2"> </HomePageThreePics2>
    <HomePageContact id="HomePageContact"> </HomePageContact>
  </div>
</template>

<script>
import HomePageForm from '../components/HomePageForm.vue'
import HomePageWhatWeDo from '../components/HomePageWhatWeDo.vue'
import HomePageContact from '../components/HomePageContact.vue'
import NavBar from '../components/NavBar.vue'
import HomePageThreePics1 from '../components/HomePageThreePics1.vue'
import HomePageThreePics2 from '../components/HomePageThreePics2.vue'

export default {
  name: 'HomePage',
  components: {NavBar, HomePageThreePics1, HomePageThreePics2, HomePageForm, HomePageWhatWeDo, HomePageContact}
}
</script>

