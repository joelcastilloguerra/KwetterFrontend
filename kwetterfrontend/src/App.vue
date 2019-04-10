<template>
    <div id="app">

        <router-view></router-view>

    </div>
</template>

<script>
    import KweetComponent from "./components/kweet/kweetComponent";

    export default {
        components: {KweetComponent},
        data: function () {

            return {

                kweetObject: {

                    fullName: "Joel Castillo Guerra",
                    username: "@joel123",
                    content: "This is the first kweet send with kwetter",
                    dateTime: "20-04-2019 10:23",
                    kweetLiked: false,
                    likesCount: 14

                }

            }

        }
    }

</script>

<style>
    #app {
        width: 100%;
    }
</style>