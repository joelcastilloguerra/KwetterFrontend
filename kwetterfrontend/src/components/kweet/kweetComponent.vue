<template>

    <div id="kweet">

        <div id="firstRow">

            <div id="profilepic"></div>

            <h1 @click="goToProfile">{{ this.poster.firstname + " " + this.poster.lastname }} <span
                    id="username">@{{ poster.username }}</span></h1>


        </div>

        <div id="secondRow">

            <p id="content">{{ kweet.content }}</p>

        </div>

        <div id="thirdRow">

            <p id="dateTime">{{ dateTime }}</p>

            <div @click="setKweetLiked()">

                <img class="heart" v-if="kweetLiked" src="../../assets/images/likedHeart.svg"/>
                <img class="heart" v-if="!kweetLiked" src="../../assets/images/unlikedHeart.svg"/>

            </div>

            <p id="likesCount">{{ likes }}</p>

        </div>

    </div>

</template>

<script>
    import Axios from 'axios'
    import Moment from 'moment'

    export default {
        name: "kweetComponent",
        props: {
            kweet: {
                type: Object
            }
        },
        data: function () {

            return {

                kweetLiked: this.kweet.kweetLiked,
                poster: [],
                extraLike: 0

            }

        },
        computed: {

            likes() {

                if (undefined !== this.kweet.likedBy && this.kweet.likedBy.length) {

                    return this.kweet.likedBy.length + this.extraLike;

                }

                return 0;

            },
            dateTime() {

                return Moment().format(this.kweet.dateTime);

            }

        },
        methods: {

            setKweetLiked() {

                this.kweetLiked = !this.kweetLiked;

                if (this.kweetLiked) {

                    Axios.post('http://127.0.0.1:8081/kweet/like/' + this.kweet.id + '/' + this.$store.getters.CURRENT_USER.id,
                        {
                            headers: {
                                'Content-type': 'application/json'
                            }

                        }).then(value => {

                        this.extraLike++;

                    })


                } else {

                    Axios.post('http://127.0.0.1:8081/kweet/unLike/' + this.kweet.id + '/' + this.$store.getters.CURRENT_USER.id,
                        {
                            headers: {
                                'Content-type': 'application/json'
                            }
                        }).then(value => {

                        this.extraLike--;

                    })

                }

            },

            goToProfile() {

                this.$store.commit('SET_CURRENT_VIEWING_PROFILE', this.kweet.poster);

                this.$router.push('/account');

            },

        },
        mounted() {

            Axios.get('http://127.0.0.1:8081/user/get/' + this.kweet.poster, {headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}})
                .then(value => this.poster = value.data);

            Axios.get('http://127.0.0.1:8081/kweet/liked/' + this.kweet.id, {headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}})
                .then(value => this.kweetLiked = value.data);

        }

    }
</script>

<style scoped>

    @font-face {
        font-family: "HelveticaNeueCondensedBold";
        src: url('../../assets/fonts/HelveticaNeueCondensedBold.ttf');
    }

    @font-face {
        font-family: "HelveticaNeue-Thin";
        src: url('../../assets/fonts/HelveticaNeue-Thin.otf');
    }

    @font-face {
        font-family: "HelveticaNeueLight";
        src: url('../../assets/fonts/HelveticaNeueLight.ttf');
    }

    @font-face {
        font-family: "HelveticaNeue-Medium";
        src: url('../../assets/fonts/HelveticaNeue-Medium.otf');
    }

    #kweet {

        width: 100%;
        height: auto;

        background-color: white;
        filter: drop-shadow(40px 30px 50px #d7d7d7);

        text-align: left;
    }

    #firstRow {

        width: 100%;
        height: 9vw;

        margin-bottom: 0;
        line-height: 9vw;
    }

    h1 {

        color: #707070;
        float: left;

        font-size: 2.2vw;

        height: 0;
        margin: 0 0 0 1vw;

        font-family: "HelveticaNeueCondensedBold", "Roboto Condensed", "Roboto", "Arial", sans-serif;

        transition-duration: 0.2s;

    }

    #username {
        color: #B6B6B6;

        font-size: 1.7vw;
        margin-top: 2.6px;
        margin-left: 1vw;

        font-family: "HelveticaNeue-Thin", "Roboto Light", "Roboto", "Arial", sans-serif;

    }

    #profilepic {

        position: relative;
        float: left;

        height: 5vw;
        width: 5vw;

        margin-left: 2vw;
        top: 50%;
        transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        -moz-transform: translateY(-50%);
        -webkit-transform: translateY(-50%);
        -o-transform: translateY(-50%);

        background-color: #d2d2d2;

        -webkit-border-radius: 100px;
        -moz-border-radius: 100px;
        border-radius: 100px;

    }


    #secondRow {

        margin-left: 2vw;

        width: 87%;

        margin-bottom: 0;

    }

    #content {

        font-family: "HelveticaNeue-Thin", "Roboto Light", "Roboto", "Arial", sans-serif;;

        font-size: 2.3vw;

        color: #707070;

        margin-top: 0;

        margin-bottom: 0;

        clear: both;
    }

    #thirdRow {

        margin-left: 2vw;
        margin-top: 2vw;

        height: 6.1vw;

    }

    #dateTime {

        font-family: "HelveticaNeue-Thin", "Roboto Light", "Roboto", "Arial", sans-serif;;

        color: #AEAEAE;

        font-size: 1.3vw;

        float: left;

        margin: 2.7vw 0 0;

    }

    #likesCount {

        font-family: "HelveticaNeue-Medium", "Roboto Light", "Roboto", "Arial", sans-serif;
        font-size: 1.3vw;

        float: right;

        color: #C0C0C0;

        margin: 0 -1.52vw 0 0;
    }

    h1:hover{

        color: #6faed8;
        cursor: pointer;

    }

    .heart {

        height: 2vw;
        margin-right: 3vw;

        float: right;

        margin-top: 2vw;

        transition: 0.2s;

        padding: 1px;

    }

    .heart:hover {

        transform: scale(1.2);
        cursor: pointer;

    }

    .heart:active {

        transform: scale(0.9);

    }

</style>