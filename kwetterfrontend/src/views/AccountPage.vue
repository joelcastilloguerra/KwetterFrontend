<template>

    <div id="accountPage" >

        <kwetter-logo></kwetter-logo>
        <user-description></user-description>

        <h1>Tweets</h1>

        <ul>

            <ul v-for="kweet in kweetObjects" :key="kweetId">

                <kweet-component :kweet="kweet"></kweet-component>

            </ul>

        </ul>

    </div>
    
</template>

<script>
    import KwetterLogo from "../KwetterLogo";
    import UserDescription from "../components/accountpage/UserDescription";
    import KweetComponent from "../components/kweet/kweetComponent";
    export default {
        name: "AccountPage",
        components: {KweetComponent, UserDescription, KwetterLogo},
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

<style scoped>

    @font-face {
        font-family: "HelveticaNeue-Thin";
        src: url('../assets/fonts/HelveticaNeue-Thin.otf');
    }

    #accountPage{

        text-align: center;
        width: 83%;
        margin-left: auto;
        margin-right: auto;
        height: auto;
        
    }

    h1{

        font-family: HelveticaNeue-Thin, Roboto, sans-serif;
        color: #737373;

        font-size: 8vw;
        font-weight: lighter;

    }



</style>