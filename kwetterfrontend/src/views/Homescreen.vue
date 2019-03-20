<template>
    <div>

        <div id="rows">

            <div id="leftRow">

                <account></account>

                <search-box></search-box>

                <post-kweet></post-kweet>

            </div>

            <div id="rightBackground">

                <div id="rightRow">

                    <kwetter-logo></kwetter-logo>

                    <ul>

                        <li id="kweet" v-for="kweet in kweetObjects" :key="kweet.kweetId">

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
    import KwetterLogo from "../KwetterLogo";
    import SearchBox from "../components/homepage/SearchBox";
    import PostKweet from "../components/homepage/PostKweet";
    import Account from "../components/homepage/Account";
    export default {
        name: "Homescreen",
        components: {Account, PostKweet, SearchBox, KwetterLogo, KweetComponent},
        data() {
            return {


                kweetObjects: [

                    {
                        kweetId: 1,
                        fullName: "Joel Castillo Guerra",
                        username: "@joel123",
                        content: "This is the first kweet send with kwetter",
                        dateTime: "20-04-2019 10:23",
                        kweetLiked: false,
                        likesCount: 14
                    },
                    {
                        kweetId: 2,
                        fullName: "Chad Whitley",
                        username: "@Chad",
                        content: "Gewoonterecht is recht dat gebaseerd is op gewoonten. Een belangrijk \n" +
                            "kenmerk van gewoonterecht is dat het van generatie op generatie \n" +
                            "mondeling wordt doorgegeven. Daarom wordt gewoonterecht ook \n" +
                            "wel ongeschreven recht en costumier recht genoemd. ",
                        dateTime: "12-05-2019 21:42",
                        kweetLiked: true,
                        likesCount: 1
                    },
                    {
                        kweetId: 3,
                        fullName: "Anthony Corker",
                        username: "@AnthonyCorker",
                        content: "Gewoonterecht is recht dat gebaseerd is op gewoonten.",
                        dateTime: "01-01-2018 20:13",
                        kweetLiked: false,
                        likesCount: 39
                    }


                ]

            }
        }
    }
</script>

<style>

    html, body{

        margin: 0;

    }

    #rows{

        width: 96.67%;
        height: 100vw;
        margin-left: 3.33%;

    }

    #leftRow{

        height: 100vw;
        width: 29.3%;
        float: left;
        position: fixed;
        z-index: 10;
        margin-top: 8.4vw;


    }

    #rightRow{

        height: auto;
        width: 94%;
        margin: 0 0 0 4.66%;
        float: right;

    }

    #rightBackground{

        width: 61vw;
        float: right;
        height: auto;
        padding-right: 3.3%;
        overflow-y: auto;

    }

    ul{

        list-style: none;
        margin: 0;
        padding: 0;

    }

    #kweet{

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