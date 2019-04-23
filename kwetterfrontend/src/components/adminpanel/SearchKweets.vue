<template>
    <div id="searchBoxBackground">

        <form action="/search">

            <input v-model="searchString" placeholder="Search..." type="text" id="searchBox">

            <img @click="search" id="searchIcon" src="../../assets/images/search-icon.svg">

        </form>

    </div>
</template>

<script>

    import Axios from 'axios';

    export default {
        name: "SearchKweets",
        data: function () {

            return {

                searchString: ''

            }

        },
        methods: {

            search() {

                if (this.searchString !== '') {

                    Axios.get('http://127.0.0.1:8081/kweet/search/' + this.searchString,
                        {
                            headers: {
                                'Content-type': 'application/json'
                            }
                        }).then(value => {

                        this.$store.commit('SET_SEARCH_KWEETS', value.data);

                    })

                }

            }

        }
    }
</script>

<style scoped>

    @font-face {
        font-family: "HelveticaNeue-Thin";
        src: url('../../assets/fonts/HelveticaNeue-Thin.otf');
    }

    #searchBoxBackground {

        width: 86%;
        height: 5vw;
        background-color: #fff;
        filter: drop-shadow(13px 6px 14px #ececec);
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 3vw;

    }

    #searchBox {

        background-color: white;
        width: 78.3%;
        height: calc(3vw - 8px);
        box-shadow: inset 0px 0px 23px #e9e9e9;

        padding: 4px 4px 4px 10px;
        -webkit-appearance: none;
        -moz-appearance: none;
        border: 2px solid #fff;

        font-family: HelveticaNeue-Thin, sans-serif;
        font-size: 1.3vw;

        color: #8c8c8c;

        outline: none;

        float: left;

        top: 50%;
        transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        -moz-transform: translateY(-50%);
        -webkit-transform: translateY(-50%);
        -o-transform: translateY(-50%);

        position: absolute;
        left: 1vw;
    }

    ::placeholder {

        color: #d6d6d6;

    }

    #searchIcon {

        height: 3vw;
        float: right;

        top: 50%;
        transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        -moz-transform: translateY(-50%);
        -webkit-transform: translateY(-50%);
        -o-transform: translateY(-50%);

        position: absolute;
        right: 1.55vw;

    }

</style>