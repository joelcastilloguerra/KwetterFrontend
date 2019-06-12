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

        <li @click="logout">


            LOG OUT


        </li>
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

               if(menuItem === 'account'){

                   this.$store.commit('SET_CURRENT_VIEWING_PROFILE', this.$store.getters.CURRENT_USER.id);

                   console.log(this.$store.getters.CURRENT_VIEWING_PROFILE);

               }

            },
            isActive(menuItem){

                return this.$store.getters.ACTIVE_ITEM === menuItem;

            },
            logout(){

                localStorage.removeItem('token');
                this.$router.push({ name: 'login' })

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

        position: sticky;
        float: left;
        margin-left: 3.83%;
        margin-top: 0.6vw;

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

        transition-duration: 0.2s;

    }

    li:hover{

        transform: scale(1.1);
        cursor: pointer;

    }

    .active {

        color: #6faed8;

    }
</style>