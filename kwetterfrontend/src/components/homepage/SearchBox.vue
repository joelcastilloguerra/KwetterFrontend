<template>
    <div id="searchBoxBackground">

        <form action="/search">

            <input placeholder="Search..." type="text" id="searchBox">

            <img id="searchIcon" src="../../assets/images/search-icon.svg">

        </form>

    </div>
</template>

<script>
    export default {
        name: "SearchBox"
    }
</script>

<style scoped>

    @font-face {
        font-family: "HelveticaNeue-Thin";
        src: url('../../assets/fonts/HelveticaNeue-Thin.otf');
    }

    #searchBoxBackground{

        width: 100%;
        height: 5vw;
        background-color: #fff;
        filter: drop-shadow(13px 6px 14px #ececec);

        text-align: center;

    }

    #searchBox{

        background-color: white;
        width: 70.5%;
        height: calc(3vw - 8px);
        box-shadow: inset 0px 0px 23px #e9e9e9;

        padding: 4px 4px 4px 10px;
        -webkit-appearance: none;
        -moz-appearance: none;
        border: 2px solid #fff;

        font-family: HelveticaNeue-Thin,sans-serif;
        font-size: 1.3vw;

        color: #8c8c8c;

        outline: none;

        margin-top: 1vw;

        float: left;

        margin-left: 5%;
    }

    ::placeholder{

        color: #d6d6d6;

    }

    #searchIcon{

        height: calc(3vw);
        float: right;
        margin-top: calc(1vw + 2px);
        margin-right: 2.05vw;

    }

</style>