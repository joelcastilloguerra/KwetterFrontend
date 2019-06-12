<template>
    <div>

        <kwetter-logo></kwetter-logo>

        <div id="loginFormBackground">

            <input v-model="userObject.username" placeholder="Username" type="text" id="username">
            <input v-model="userObject.password" placeholder="Password" type="password" id="password">


            <vue-recaptcha @verify="onVerify" sitekey="6LcrMqgUAAAAABJFQElQr62weSJmuzAGEJs_w9nx">
            </vue-recaptcha>
                <div id="loginButton" @click="login">

                LOGIN

            </div>



        </div>

    </div>
</template>

<script>
    import KwetterLogo from "../KwetterLogo";
    import Axios from "axios"
    import VueRecaptcha from 'vue-recaptcha';

    export default {
        name: "LoginPage",
        components: {KwetterLogo, VueRecaptcha },
        data: function () {

            return {

                userObject: {

                    username: '',

                    password: ''

                },
                verified: true

            }

        },
        methods: {

            login() {

                if(this.verified){

                    Axios.post('http://127.0.0.1:8081/user/signin',
                        this.userObject,
                        {
                            headers: {
                                'Content-type': 'application/json'
                            }
                        }).then(value => {

                        //Store token in localstorage
                        localStorage.setItem('token', value.data.token);

                        Axios.defaults.headers['Authorization'] = "Bearer " + localStorage.getItem('token');

                        this.$router.push({ name: 'home' })

                    })

                }



            },
            onVerify(){

                this.verified = true;

            }

        },
        mounted() {
            let recaptchaScript = document.createElement('script');
            recaptchaScript.setAttribute('src', 'https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit');
            document.head.appendChild(recaptchaScript)
        },
    }
</script>

<style scoped>

    @font-face {
        font-family: "HelveticaNeue-Thin";
        src: url('../assets/fonts/HelveticaNeue-Thin.otf');
    }

    @font-face {
        font-family: "HelveticaNeueCondensedBold";
        src: url('../assets/fonts/HelveticaNeueCondensedBold.ttf');
    }

    #kwetterRecaptcha{

        margin-top: 10vw;

    }

    #loginFormBackground {

        width: 30vw;
        height: 15.6vw;

        background-color: white;
        filter: drop-shadow(40px 30px 50px #d7d7d7);

        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: 12vw auto 0;
        position: absolute;

        text-align: center;

        float: right;

    }

    input {

        background-color: white;
        width: 83%;
        height: 3vw;
        box-shadow: inset 0px 0px 23px #e9e9e9;

        padding: 4px 4px 4px 10px;
        -webkit-appearance: none;
        -moz-appearance: none;
        border: 2px solid #fff;

        font-family: HelveticaNeue-Thin, sans-serif;
        font-size: 1.3vw;

        color: #8c8c8c;

        outline: none;

        float: left;

        position: relative;

        margin-left: calc(8.5% - 9px);

    }

    ::placeholder {

        color: #d6d6d6;

    }

    #username {

        margin-top: 2vw;
        margin-bottom: 1vw;

    }

    .sppb-ajax-contact-content .g-recaptcha{
        clear: both;
    }

    #loginButton {

        height: 3vw;
        width: 6vw;
        background-color: #6FAED8;
        text-align: center;
        margin-top: 1vw;
        font-family: HelveticaNeueCondensedBold, "Roboto Condensed", sans-serif;
        color: white;
        font-size: 1.4vw;
        float: right;
        margin-right: calc(8.5% - 6px);
        line-height: 3vw;

        transition-duration: 0.2s;

    }

    #loginButton:hover {

        cursor: pointer;
        transform: scale(1.07);

    }

    #loginButton:active{

        cursor: pointer;
        transform: scale(0.93);

    }

</style>