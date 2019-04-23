<template>

    <div id="profilesBackground">

        <search-profiles></search-profiles>

        <ul>
            <li v-for="user in searchResults" :key="user.id">
                <edit-user-profile-component :user="user"></edit-user-profile-component>
            </li>
        </ul>

    </div>

</template>

<script>
    import SearchProfiles from "./SearchProfiles";
    import EditUserProfileComponent from "./EditUserProfileComponent";
    export default {
        name: "ProfilesComponent",
        components: {EditUserProfileComponent, SearchProfiles},
        computed: {

            searchResults() {

                return this.$store.getters.SEARCH_USERS

            }

        }
    }
</script>

<style scoped>

    #profilesBackground{

        width: 100%;
        height: 100%;
        background-color: white;
        filter: drop-shadow(40px 30px 50px #d7d7d7);
        padding-top: 2vw;

    }

</style>