<template>
    <div id="adminPanel">

        <div id="adminRowContainer">

            <div id="leftAdminRow">

                <h1>Profiles</h1>
                <profiles-component></profiles-component>

            </div>

            <div id="rightAdminRow">

                <h1>Kweets</h1>
                <kweets-component></kweets-component>
            </div>

        </div>


    </div>
</template>

<script>
    import KwetterLogo from "../KwetterLogo";
    import ProfilesComponent from "../components/adminpanel/ProfilesComponent";
    import KweetsComponent from "../components/adminpanel/KweetsComponent";
    export default {
        name: "AdminPanel",
        components: {KweetsComponent, ProfilesComponent, KwetterLogo}
    }
</script>

<style scoped>

    @font-face {
        font-family: "HelveticaNeue-Thin";
        src: url('../assets/fonts/HelveticaNeue-Thin.otf');
    }

    #adminRowContainer{

        margin-top: 5vw;
        text-align: left;

    }

    #leftAdminRow{

        height: 100vw;
        width: 45.5%;

        float: left;

        margin-left: 3%;

    }

    #rightAdminRow{

        height: 100vw;
        width: 45.5%;

        float: right;

        margin-right: 3%;

    }

    h1{

        font-family: HelveticaNeue-Thin, Roboto, sans-serif;
        color: #737373;

        font-size: 5vw;
        font-weight: 100;

        margin-top: 0;

    }


</style>