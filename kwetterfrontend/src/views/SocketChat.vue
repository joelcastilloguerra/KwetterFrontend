<template>
    <div>


        <input v-model="inputMessage">
        <br>
        <input type="button" @click="sendMessage" value="Send message" />

    </div>
</template>

<script>

    import * as Stomp from 'stompjs';
    import * as SockJS from 'sockjs-client';
    import $ from 'jquery';

    export default {
        name: "SocketChat",
        data: function (){

            return {

                inputMessage: "Hello!"

            }

        },
        mounted() {

            this.initWebSocketConnection();

        },
        methods : {

            initWebSocketConnection() {
                let ws = new SockJS("http://localhost:8081/socket");
                this.stompClient = Stomp.over(ws);
                let that = this;
                this.stompClient.connect(
                    { Authorization: "Bearer" + localStorage.getItem('token') },
                    function(frame) {
                        that.stompClient.subscribe("/chat", message => {
                            if (message.body) {
                                alert(message.body);
                            }
                        });
                    }
                );
            },

            sendMessage() {

                this.stompClient.send("/app/send/message", {}, this.inputMessage);

            }

        }
    }
</script>

<style scoped>

</style>