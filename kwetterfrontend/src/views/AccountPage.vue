<template>

    <div id="accountPage" >

        <menu-component></menu-component>

        <kwetter-logo></kwetter-logo>
        <user-description></user-description>

        <h1>Kweets</h1>

        <ul>

            <ul v-for="kweet in kweets" v-bind:key="kweet.id">

                <kweet-component :kweet="kweet"></kweet-component>

            </ul>

        </ul>

    </div>
    
</template>

<script>
    import KwetterLogo from "../KwetterLogo";
    import UserDescription from "../components/accountpage/UserDescription";
    import KweetComponent from "../components/kweet/kweetComponent";
    import MenuComponent from "../menu/menuComponent";
    export default {
        name: "AccountPage",
        components: {MenuComponent, KweetComponent, UserDescription, KwetterLogo},
        computed:{

            kweets(){

                return this.$store.getters.USER_KWEETS;

            }

        },
        mounted() {

            this.$store.dispatch('SET_USER_KWEETS');

        }
    }
</script>

<style scoped>

    @font-face {
        font-family: "HelveticaNeue-Thin";
        src: url('../assets/fonts/HelveticaNeue-Thin.otf');
    }

    #accountPage{

        text-align: center;
        width: 93.34%;
        margin-left: auto;
        margin-right: auto;
        height: auto;
        margin-top: 10vw;
        
    }

    h1{

        font-family: HelveticaNeue-Thin, Roboto, sans-serif;
        color: #737373;

        font-size: 8vw;
        font-weight: lighter;

        z-index: 0;
        position: relative;

    }



</style>