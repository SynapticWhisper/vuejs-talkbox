<script setup>
import { reactive } from 'vue';
import MessagesList from './MessagesList.vue';
import CreateMessage from './CreateMessage.vue';
import UserInfo from './UserInfo.vue';

const messagesList = reactive([
    {
        'message_id': 1,
        'from_user': 123,
        'to_user': 122,
        'message_date': "19:19",
        'message_edited': true,
        'message_status': 'Readen', 
        'message_text': "Привет, Борис!"
    },
    {
        'message_id': 2,
        'from_user': 122,
        'to_user': 123,
        'message_date': "19:23",
        'message_edited': false,
        'message_status': 'Delivered', 
        'message_text': "Привет, Алиса! Как дела?"
    },
]);

const targetUser = reactive({
    id: 122,
    name: "Username",
    photo_url: null,
    last_visit: 'Last seen recently'
});

// При открытии диалога надо будет отправлять запрос на сервер, чтобы получить последние N сообщений
// потому что через вебсокет мы будем получать сообщения от пользователей не пачкой (N сообщений из диалога),
// а по сообщению в виде JSON объекта, не зависимо от того какой диалог открыт, по вебсокету нам идут входящие
// сообщения от друзей и тд, и соответствующим образом обрабатываются, если открыт диалог.
// диалоги которые уже были загружены с сервера имеет смысл, закидывать в localstorage или другой cache.
// Диалоги которые не открывались пользователем, для экономии ресурсов, не сохраняем, а просто обновляем
// последнее сообщение, которое отображается в DialogsList и обновляем количество новых сообщений от 
// пользователя и от всех пользователей

const sendMessage = (messageText) => {
    // По идее тут мы через вебсокет говорим серверу, что пользователь написал сообщение
    // И ожидаем что сервер отдаст нам его ID сообщения и тд, в идеале вернет JSON объект 
    // Который имеет согласованную структуру, а мы уже добавим этот объект в наш REF
    const keys = Object.keys(messagesList.value);
    const newIndex = Math.max(...keys.map(Number)) + 1;
    messagesList.value.push({
        'message_id': 3,
        'from_user': 123,
        'to_user': 122,
        'message_date': "19:30",
        'message_edited': false,
        'message_status': 'Delivered', 
        'message_text': messageText
    })
}
</script>

<template>
    <div class="dialog">
        <UserInfo :targetUser="targetUser"/>
        <MessagesList :messages="messagesList"/>
        <CreateMessage @send="sendMessage"/>
    </div>
</template>

<style scoped>
.dialog {
    grid-column: 2;
    max-height: 100vh;
    display: grid;
    grid-template-rows: 60px auto 60px;
    background-color: #323232;
    overflow: hidden;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
}
</style>