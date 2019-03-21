<template>

    <div id="editUserProfile">

        <div id="userInfoBackground">

            <div id="profilePicture"></div>

            <div id="userInfo">
                <h1>Joel Castillo Guerra <h2>@joelcastillog</h2></h1>
                <h3>User</h3>
            </div>

        </div>

        <img id="editUserIcon" src="../../assets/images/edit-user-icon.svg">

    </div>

</template>

<script>
    export default {
        name: "EditUserProfileComponent"
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

    #editUserProfile{

        height: 7vw;
        width: 86%;
        margin-left: 7%;

    }

    #userInfoBackground{

        height: 100%;
        width: 80%;

        background-color: white;
        filter: drop-shadow(40px 30px 50px #d7d7d7);
        margin-bottom: 2vw;
        display: flex;
        align-items: center;

        float: left;

    }

    #profilePicture{

        position: relative;
        display: inline-block;

        height: 5vw;
        width: 5vw;

        margin-left: 2vw;

        background-color: #d2d2d2;

        -webkit-border-radius: 100px;
        -moz-border-radius: 100px;
        border-radius: 100px;

    }

    #userInfo{

        margin-top: 0vw;
        height: 100%;

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

    h3{

        font-family: "HelveticaNeue-ThinItalic", "Roboto Light", "Roboto", "Arial", sans-serif;
        color: lightgray;
        font-weight: 500;
        margin: 0 0 0 1vw;
        font-size: 1.4vw;

    }

    #editUserIcon{

        height: 2vw;
        float: left;
        margin-top: 2.5vw;
        margin-left: 2.8vw;

        transition: 0.2s;

    }

    #editUserIcon:hover{

        transform: scale(1.2);
        cursor: pointer;

    }

    #editUserIconheart:active{

        transform: scale(0.9);

    }

</style>