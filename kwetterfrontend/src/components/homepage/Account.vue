<template>
    <div id="accountBackground">

        <div id="profilePicture"></div>

        <p>{{ '@' + this.$store.getters.CURRENT_USER.username}}</p>

    </div>
</template>

<script>
    export default {
        name: "Account",
        mounted(){

            this.$store.dispatch("SET_CURRENT_USER");

        }
    }
</script>

<style scoped>



    #accountBackground{

        width: 100%;
        height: 5vw;
        background-color: #fff;
        filter: drop-shadow(13px 6px 14px #ececec);
        line-height: 5vw;
        margin-bottom: 3vw;

    }

    #profilePicture{

        height: 3vw;
        width: 3vw;
        background-color: #d2d2d2;
        -webkit-border-radius: 100px;
        -moz-border-radius: 100px;
        border-radius: 100px;
        top: 1vw;
        position: relative;
        margin-left: 1vw;
        float: left;

    }

    @font-face {
        font-family: "HelveticaNeue-Thin";
        src: url('../../assets/fonts/HelveticaNeue-Thin.otf');
    }

    p{

        font-family: HelveticaNeue-Thin,sans-serif;
        color: #393939;
        font-size: 1.6vw;
        float: left;
        margin: 0 0 0 1vw;

    }

    #downArrow{

        height: 0.7vw;
        float: right;
        margin-top: 2vw;
        margin-right: 2vw;

    }

</style>