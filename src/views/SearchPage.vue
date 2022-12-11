<template>
    <div class="main_search_page">
        <NavBar> </NavBar>
        <SearchPageFindWorkspace> </SearchPageFindWorkspace>
        <HomePageContact> </HomePageContact>
    </div>
</template>


<script>
    import NavBar from '../components/NavBar.vue'
    import SearchPageFindWorkspace from '../components/SearchPageFindWorkspace.vue'
    import HomePageContact from '../components/HomePageContact.vue'

    export default {
        name: 'App',
        components: {NavBar, SearchPageFindWorkspace, HomePageContact}
    }

</script>

<style>
.main_search_page .main_contact_container {
    margin-top: 900px;
}

</style>
