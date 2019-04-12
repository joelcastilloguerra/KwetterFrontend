<template>
    <div id="userDescriptionBackground">

        <div id="userDescriptionLeftRow">

            <div id="profilePicture"></div>

        </div>

        <div id="userDescriptionRightRow">

            <h1> {{ user.firstname + " "  + user.lastname}} </h1>
            <h2> @{{user.username}} </h2>

            <p id="bio">{{user.bio}}</p>

            <img id="locationIcon" src="../../assets/images/location-icon.svg">
            <h3 id="location">{{user.location}}</h3>

            <img id="websiteIcon" src="../../assets/images/website-icon.svg">
            <h3 id="website">{{user.websiteUrl}}</h3>

            <h4>FOLLOWERS <br> <h5>{{followers}}</h5></h4>
            <h4>FOLLOWING <br> <h5>{{following}}</h5></h4>


        </div>

    </div>
</template>

<script>
    export default {
        name: "UserDescription",
        mounted() {

            this.$store.dispatch('SET_USER');

        },
        computed : {

            followers(){

                return this.user.followers.length;

            },
            following(){

                return this.user.following.length;

            },
            user(){

                return this.$store.getters.USER;

            }

        }
    }
</script>

<style scoped>

    @font-face {
        font-family: "HelveticaNeueCondensedBold";
        src: url('../../assets/fonts/HelveticaNeueCondensedBold.ttf');
    }

    @font-face {
        font-family: "HelveticaNeue-ThinItalic";
        src: url('../../assets/fonts/HelveticaNeue-ThinItalic.otf');
    }

    @font-face {
        font-family: "HelveticaNeue-Thin";
        src: url('../../assets/fonts/HelveticaNeue-Thin.otf');
    }

    #userDescriptionBackground {

        width: 100%;
        height: auto;
        background-color: white;
        filter: drop-shadow(40px 30px 50px #d7d7d7);

        padding-bottom: 3vw;

        margin: 7vw auto 3vw;
    }

    #userDescriptionLeftRow {

        position: relative;
        margin-left: 3vw;
        top: 3vw;
        height: auto;
        width: 15%;
        float: left;
        text-align: left;

    }

    #userDescriptionRightRow {

        position: relative;
        margin-left: 16vw;
        top: 4vw;
        height: 30vw;
        width: 75%;
        text-align: left;
        /*background-color: black;*/

    }

    #profilePicture {

        height: 10vw;
        width: 10vw;
        background-color: #d2d2d2;
        -webkit-border-radius: 100px;
        -moz-border-radius: 100px;
        border-radius: 100px;
        position: relative;
    }

    h1 {

        color: #707070;

        font-size: 3vw;

        font-family: "HelveticaNeueCondensedBold", "Roboto Condensed", "Roboto", "Arial", sans-serif;

        margin-bottom: 0;
        letter-spacing: 1px;

    }

    h2 {

        color: #b6b6b6;
        font-size: 1.8vw;
        font-family: "HelveticaNeue-Thin", "Roboto Light", "Roboto", "Arial", sans-serif;
        margin-bottom: 0;
        margin-top: 0;
        letter-spacing: 0.6px;

    }

    #bio {

        color: #494949;

        font-size: 2vw;

        font-family: "HelveticaNeue-Thin", "Roboto Light", "Roboto", "Arial", sans-serif;

        margin-bottom: 1vw;
        margin-top: 2vw;
        max-width: 40vw;

        letter-spacing: 0.2px;

    }

    #locationIcon {

        height: 2vw;
        float: left;
        margin-top: 1vw;
        margin-left: 0.2vw;

    }

    #websiteIcon {

        height: 2vw;
        float: left;

    }

    #location {


        margin-top: 2.2vw;

    }

    #website {

        margin-top: 1.5vw;

    }

    h3 {

        font-family: "HelveticaNeue-Thin", "Roboto Light", "Roboto", "Arial", sans-serif;
        color: #b6b6b6;
        margin-left: 3vw;
        letter-spacing: 0.1vw;
        font-size: 1.4vw;

    }

    h4 {

        color: #707070;

        font-size: 1.3vw;

        font-family: "HelveticaNeueCondensedBold", "Roboto Condensed", "Roboto", "Arial", sans-serif;

        margin-bottom: 0;

        margin-top: 1vw;

        float: left;

        margin-right: 10vw;

    }

    h5 {

        color: #B6B6B6;

        font-size: 1.8vw;

        font-family: "HelveticaNeue-ThinItalic", "Roboto Light", "Roboto", "Arial", sans-serif;

        letter-spacing: 1px;

        width: auto;

        margin-top: 1vw;

        margin-bottom: 10vw;


    }

</style>