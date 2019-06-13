<template>
    <div id="userDescriptionBackground">

        <div id="userDescriptionLeftRow">

            <div id="profilePicture"></div>

        </div>

        <div id="userDescriptionRightRow">

            <h1> {{ user.firstname + " " + user.lastname}} </h1>
            <h2> @{{user.username}} </h2>

            <p id="bio">{{user.bio}}</p>

            <img id="locationIcon" src="../../assets/images/location-icon.svg">
            <h3 id="location">{{user.location}}</h3>

            <img id="websiteIcon" src="../../assets/images/website-icon.svg">
            <h3 id="website">{{user.websiteUrl}}</h3>

            <h4>FOLLOWERS <br> <h5>{{followers}}</h5></h4>
            <h4>FOLLOWING <br> <h5>{{following}}</h5></h4>

            <div @click="changeButton" v-if="showButton" v-show="hideButton" class="button" id="followButton">Follow</div>
            <div @click="changeButton" v-if="!showButton" v-show="hideButton" class="button" id="unfollowButton">Unfollow</div>


        </div>

    </div>
</template>

<script>

    import Axios from 'axios';
    export default {
        name: "UserDescription",
        data: function () {

            return {

               showButton: true,
                hideButton: true

            }

        },
        mounted() {

            this.$store.dispatch('SET_CURRENT_VIEWING_PROFILE').then(value =>{

                if (this.$store.getters.CURRENT_USER.username === this.$store.getters.CURRENT_VIEWING_PROFILE.username) {

                    this.hideButton = false;

                }

                Axios.get('http://127.0.0.1:8081/user/isFollowing/' + this.$store.getters.CURRENT_VIEWING_PROFILE.id, {headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}})
                    .then(value => {

                        this.showButton = !value.data;

                    });

            });

        },
        computed: {

            followers() {

                if (undefined !== this.user.followers && this.user.followers.length) {

                    return this.user.followers.length;

                }

                return 0;


            },
            following() {

                if (undefined !== this.user.following && this.user.following.length) {

                    return this.user.following.length;

                }
                return 0;

            },
            user() {

                return this.$store.getters.CURRENT_VIEWING_PROFILE;

            }
        },
        methods : {

            changeButton(){

                Axios.post('http://127.0.0.1:8081/user/addOrRemoveFollower/' + this.$store.getters.CURRENT_VIEWING_PROFILE.id,
                    {
                        headers: {
                            'Content-type': 'application/json'
                        }

                    }).then(value => {

                    this.showButton = !this.showButton;

                })



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
        height: 28vw;
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

    .button {

        height: 3vw;
        width: 8vw;
        margin-top: 3.8vw;
        margin-left: 65.6vw;
        font-family: HelveticaNeueCondensedBold, sans-serif;
        text-align: center;
        line-height: 3vw;
        font-size: 1.6vw;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px;
        transition-duration: 0.2s;
        -webkit-user-select: none; /* Safari */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* IE10+/Edge */
        user-select: none; /* Standard */
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
    }

    #followButton{

        background-color: #6faed8;
        color: white;

    }

    #unfollowButton{

        background-color: white;
        color: #6faed8;
        border: 2px solid #6faed8;
        line-height: 2.7vw;

    }

    .button:hover {

        cursor: pointer;

    }

</style>