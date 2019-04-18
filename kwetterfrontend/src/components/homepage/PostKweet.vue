<template>
    <div id="postKweet">

        <textarea v-model="kweetObject.content" maxlength="160" placeholder="What's on your mind?" id="kweetContent"></textarea>

        <img @click="postKweet" id="kweetButton" src="../../assets/images/kweet-button.svg"/>

    </div>
</template>

<script>

    import Axios from 'axios'
    export default {
        name: "PostKweet",
        data: function(){

          return {

            kweetObject: {

                content: '',
                dateTime : this.getDate,
                poster : {"id" : this.$store.getters.USER.id},
                likedBy : []

            }

          }

        },
        methods: {

            postKweet(){

                if(this.kweetObject.content.length !== 0){

                    this.kweetObject.dateTime = new Date();

                    Axios.defaults.headers['Authorization'] = "Bearer " + localStorage.getItem('token');

                    Axios.post('http://127.0.0.1:8081/kweet/add',
                        this.kweetObject , // the data to post
                        { headers: {
                                'Content-type': 'application/json',
                                'Authorization': 'Bearer '+ localStorage.getItem('token')

                            }
                        }).then(value =>{

                        this.kweetObject.content = ''
                        this.$store.dispatch('SET_TIMELINE');

                    })

                }

            }

        }
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
        transition-duration: 0.2s;

    }

    #kweetButton:hover{

        cursor: pointer;
        -webkit-transform: scale(1.05);
        -moz-transform: scale(1.05);
        -ms-transform: scale(1.05);
        -o-transform: scale(1.05);
        transform: scale(1.05);

    }

    ::placeholder{

        color: #d6d6d6;

    }

</style>