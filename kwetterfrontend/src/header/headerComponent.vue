<template>
    <div id="headerComponent" :class="{'scrolled' : this.scrolled}">

        <menu-component></menu-component>
        <kwetter-logo></kwetter-logo>

    </div>
</template>

<script>
    import MenuComponent from "../menu/menuComponent";
    import KwetterLogo from "../KwetterLogo";
    export default {
        name: "headerComponent",
        components: {KwetterLogo, MenuComponent},
        data: function(){

            return{

                scrolled: false

            }

        },
        methods: {
            handleScroll: function (event) {

                if(document.documentElement.scrollTop <= 5){

                    this.scrolled = false;

                }
                else{

                    this.scrolled = true;

                }

            }
        },
        created: function () {
            window.addEventListener('scroll', this.handleScroll);
        },
        destroyed: function () {
            window.removeEventListener('scroll', this.handleScroll);
        }

    }
</script>

<style scoped>
    
    #headerComponent{

        position: fixed;
        top: 0;
        height: 7vw;
        width: 99.44vw;
        z-index: 1000;
        margin-left: calc(-50vw + 50%);
    }

    .scrolled{

        background-color: white;
        transition-duration: 0.3s;
        box-shadow: 1px 1px 22px #cbcbcb;

    }

</style>