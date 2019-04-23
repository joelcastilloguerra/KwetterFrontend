<template>

    <div id="kweetsBackground">

        <search-kweets></search-kweets>

        <ul>
            <li v-for="kweet in searchResults" :key="kweet.id">
                <delete-tweet-component :kweet="kweet"></delete-tweet-component>
            </li>
        </ul>


    </div>

</template>

<script>
    import SearchKweets from "./SearchKweets";
    import DeleteTweetComponent from "./DeleteTweetComponent";

    export default {
        name: "KweetsComponent",
        components: {DeleteTweetComponent, SearchKweets},
        computed: {

            searchResults() {

                return this.$store.getters.SEARCH_KWEETS

            }

        }
    }
</script>

<style scoped>

    #kweetsBackground {

        width: 100%;
        height: 100%;
        background-color: white;
        filter: drop-shadow(40px 30px 50px #d7d7d7);
        padding-top: 2vw;

    }

</style>