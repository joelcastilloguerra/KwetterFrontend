<template>
    <div id="app">

        <router-view></router-view>

    </div>
</template>

<script>

    import Axios from 'axios'
    export default {
        components: {},
        mounted() {

            if(localStorage.getItem('token') !== null){

                Axios.defaults.headers['Authorization'] = "Bearer " + localStorage.getItem('token');

            }


        }


    }

</script>

<style>
    #app {
        width: 100%;
    }
</style>