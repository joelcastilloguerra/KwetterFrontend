<template>

    <div id="profilesBackground">

        <search-profiles></search-profiles>

        <edit-user-profile-component></edit-user-profile-component>
        <edit-user-profile-component></edit-user-profile-component>
        <edit-user-profile-component></edit-user-profile-component>
        <edit-user-profile-component></edit-user-profile-component>

    </div>

</template>

<script>
    import SearchProfiles from "./SearchProfiles";
    import EditUserProfileComponent from "./EditUserProfileComponent";
    export default {
        name: "ProfilesComponent",
        components: {EditUserProfileComponent, SearchProfiles}
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