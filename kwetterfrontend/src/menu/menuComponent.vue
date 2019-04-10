<template>
    <ul>

        <router-link to="/">
            <li :class="{ active : isActive('home') }" @click="setActive('home')">

                HOME

            </li>
        </router-link>

        <router-link to="/account">

            <li :class="{ active : isActive('account') }" @click="setActive('account')">


                ACCOUNT


            </li>

        </router-link>

    </ul>

</template>

<script>
    export default {
        name: "menuComponent",
        data: function(){

          return {

              activeItem: 'home'

          }

        },
        methods : {

            setActive(menuItem){

               this.$store.commit("SET_ACTIVE_ITEM", menuItem);

            },
            isActive(menuItem){

                return this.$store.getters.ACTIVE_ITEM === menuItem;

            }

        }
    }
</script>

<style scoped>

    @font-face {
        font-family: "HelveticaNeueLight";
        src: url('../assets/fonts/HelveticaNeueLight.ttf');
    }

    ul {

        position: fixed;
        left: 3.33%;
        top: 5vw;

    }

    li {

        display: inline-block;
        color: #7a7a7a;

        font-size: 1.4vw;

        font-family: "HelveticaNeueLight", "Roboto Light", "Roboto", "Arial", sans-serif;

        margin-bottom: 1vw;
        margin-top: 2vw;
        max-width: 40vw;

        margin-right: 1.4vw;

        letter-spacing: 0.2px;

        transition-duration: 2s;

    }

    .active {

        color: #6faed8;

    }

</style>