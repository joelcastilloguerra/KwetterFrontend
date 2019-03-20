<template>
  <div id="app">



    <!--<KweetComponent :kweet="kweetObject"></KweetComponent>-->
  </div>
</template>

<script>
  import KweetComponent from "./components/kweet/kweetComponent";
  export default {
    components: {KweetComponent},
    data: function () {

      return{

        kweetObject : {

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
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
  }
</style>