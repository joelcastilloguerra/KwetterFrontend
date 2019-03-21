<template>

    <div id="kweetsBackground">

        <search-kweets></search-kweets>
        <delete-tweet-component></delete-tweet-component>
        <delete-tweet-component></delete-tweet-component>
        <delete-tweet-component></delete-tweet-component>
        <delete-tweet-component></delete-tweet-component>



    </div>

</template>

<script>
    import SearchKweets from "./SearchKweets";
    import DeleteTweetComponent from "./DeleteTweetComponent";
    export default {
        name: "KweetsComponent",
        components: {DeleteTweetComponent, SearchKweets}
    }
</script>

<style scoped>

    #kweetsBackground{

        width: 100%;
        height: 100%;
        background-color: white;
        filter: drop-shadow(40px 30px 50px #d7d7d7);
        padding-top: 2vw;

    }

</style>