<template>
    <div id="postKweet">

        <textarea maxlength="160" placeholder="What's on your mind?" id="kweetContent"></textarea>

        <img id="kweetButton" src="../../assets/images/kweet-button.svg"/>

    </div>
</template>

<script>
    export default {
        name: "PostKweet"
    }
</script>

<style scoped>

    @font-face {
        font-family: "HelveticaNeueCondensedBold";
        src: url('../../assets/fonts/HelveticaNeueCondensedBold.ttf');
    }

    #postKweet{

        width: 100%;
        height: 18.5vw;
        background-color: #fff;
        filter: drop-shadow(13px 6px 14px #ececec);
        margin-top: 3vw;
    }

    #kweetContent{

        background-color: white;
        width: 83%;
        height: 10vw;
        box-shadow: inset 0px 0px 23px #e9e9e9;

        padding: 3% 4px 4px 3%;
        -webkit-appearance: none;
        -moz-appearance: none;
        border: 2px solid #fff;

        font-family: HelveticaNeue-Thin,sans-serif;
        font-size: 1.2vw;

        margin-left: 5%;
        margin-top: 1.5vw;

        color: #838383;

        outline: none;

        resize: none;

        overflow: auto;

    }

    #kweetButton{

        height: 3vw;
        line-height: 2vw;
        float: right;
        margin-right: 6.9%;
        color: white;
        margin-top: 0.6vw;

    }

    ::placeholder{

        color: #d6d6d6;

    }

</style>