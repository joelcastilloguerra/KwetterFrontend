<template>

    <div>
        <header-component></header-component>
        <div id="accountPage" >


            <user-description></user-description>

            <h1>Kweets</h1>

            <ul>

                <ul v-for="kweet in kweets" v-bind:key="kweet.id">

                    <kweet-component :kweet="kweet"></kweet-component>

                </ul>

            </ul>

        </div>
    </div>
    
</template>

<script>
    import UserDescription from "../components/accountpage/UserDescription";
    import KweetComponent from "../components/kweet/kweetComponent";
    import HeaderComponent from "../header/headerComponent";
    export default {
        name: "AccountPage",
        components: {HeaderComponent, KweetComponent, UserDescription},
        computed:{

            kweets(){

                return this.$store.getters.USER_KWEETS;

            }

        },
        mounted() {

            this.$store.dispatch('SET_CURRENT_VIEWING_PROFILE');
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