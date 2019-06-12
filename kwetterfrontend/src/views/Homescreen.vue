<template>
    <div id="homescreen">

        <header-component></header-component>

        <div id="rows">

            <div id="leftRow">

                <account></account>

                <search-box></search-box>

                <post-kweet></post-kweet>

            </div>

            <div id="rightBackground">

                <div id="rightRow">

                    <ul>

                        <li id="kweet" v-for="kweet in timeline" :key="kweet.id">

                            <kweet-component :kweet="kweet"></kweet-component>

                        </li>

                    </ul>

                </div>
            </div>

        </div>

    </div>
</template>

<script>
    import KweetComponent from "../components/kweet/kweetComponent";
    import SearchBox from "../components/homepage/SearchBox";
    import PostKweet from "../components/homepage/PostKweet";
    import Account from "../components/homepage/Account";
    import HeaderComponent from "../header/headerComponent";
    import Axios from 'axios'

    export default {
        name: "Homescreen",
        components: {HeaderComponent, Account, PostKweet, SearchBox, KweetComponent},
        computed: {

            timeline() {

                return this.$store.getters.TIMELINE;

            }

        },
        created() {

            this.$store.dispatch('SET_TIMELINE');
            Axios.defaults.headers['Authorization'] = "Bearer " + localStorage.getItem('token');

        }
    }
</script>

<style>

    html, body {

        margin: 0;

    }

    #homescreen {

        width: auto;
        text-align: center;

    }

    #rows {

        width: 96.67%;
        height: auto;
        margin-left: 3.33%;

    }

    #leftRow {

        height: 100vw;
        width: 29.3%;
        float: left;
        position: fixed;
        z-index: 10;
        margin-top: 10vw;


    }

    #rightRow {

        height: auto;
        width: 94%;
        margin: 0 0 0 4.66%;
        float: right;

    }

    #rightBackground {

        width: 61vw;
        float: right;
        height: auto;
        padding-right: 3.3%;
        overflow-y: auto;
        padding-top: 10vw;
        min-height: 39vw;

    }

    ul {

        list-style: none;
        margin: 0;
        padding: 0;

    }

    #kweet {

        margin-bottom: 3vw;
        z-index: 15;
        position: relative;

    }

    ::selection {
        background: #6faed8; /* WebKit/Blink Browsers */
        color: white;
    }

    ::-moz-selection {
        background: #6faed8; /* Gecko Browsers */
        color: white;
    }


</style>