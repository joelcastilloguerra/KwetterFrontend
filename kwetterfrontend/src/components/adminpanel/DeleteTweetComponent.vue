<template>
    <div id="deleteKweetComponent">

        <div id="kweetBackground">

            <div id="profilePicture"></div>

                <h1>Joel Castillo Guerra <h2>@joelcastilloguerra</h2></h1>

            <p>{{this.$store.state.test}} <it class=""></it></p>
            <h3>12-12-2012 12:12</h3>

        </div>

        <img id="deleteKweetIcon" src="../../assets/images/delete-kweet-icon.svg">

    </div>
</template>

<script>
    import KweetComponent from "../kweet/kweetComponent";
    export default {
        name: "DeleteTweetComponent",
        components: {KweetComponent}
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
        font-family: "HelveticaNeue-ThinItalic";
        src: url('../../assets/fonts/HelveticaNeue-ThinItalic.otf');
    }

    #deleteKweetComponent{

        height: 7vw;
        width: 86%;
        margin-left: 7%;

    }

    #kweetBackground{

        height: auto;
        width: 80%;

        background-color: white;
        filter: drop-shadow(40px 30px 50px #d7d7d7);
        margin-bottom: 2vw;

        float: left;

    }

    #profilePicture{

        position: relative;
        display: inline-block;

        margin-top: 1vw;

        height: 3vw;
        width: 3vw;

        margin-left: 2vw;

        float: left;

        background-color: #d2d2d2;

        -webkit-border-radius: 100px;
        -moz-border-radius: 100px;
        border-radius: 100px;

    }

    #deleteKweetIcon{

        height: 3vw;
        float: left;
        margin-top: 6.5vw;
        margin-left: 2.8vw;

        transition: 0.2s;

    }

    #deleteKweetIcon:hover{

        transform: scale(1.2);
        cursor: pointer;

    }

    #editUserIconheart:active{

        transform: scale(0.9);

    }

    h1{

        color: #707070;

        font-size: 1.5vw;
        height: 3.3vw;

        margin: 0.7vw 0 0 1vw;
        width: auto;
        display: inline-block;

        font-family: "HelveticaNeueCondensedBold", "Roboto Condensed", "Roboto", "Arial", sans-serif;

    }

    h2{
        color: #B6B6B6;
        font-size: 1.3vw;
        margin-left: 0.4vw;

        font-family: "HelveticaNeue-Thin", "Roboto Light", "Roboto", "Arial", sans-serif;

        display: inline-block;
    }

    p{
        color: #707070;
        font-size: 1.8vw;

        font-family: "HelveticaNeue-Thin", "Roboto Light", "Roboto", "Arial", sans-serif;

        display: inline-block;

        margin: 1vw 0 0 2vw;

        width: 27vw;
        line-height: 2.3vw;

    }

    h3{

        color: #B6B6B6;
        font-size: 1vw;
        margin-left: 2vw;
        margin-top: 1vw;

        font-family: "HelveticaNeue-Thin", "Roboto Light", "Roboto", "Arial", sans-serif;

    }

</style>