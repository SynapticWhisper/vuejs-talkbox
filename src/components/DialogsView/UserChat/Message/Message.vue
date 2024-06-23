<script setup>
import MessageFromUser from './MessageFromUser.vue';
import MessageToUser from './MessageToUser.vue';
defineProps({
    message: {
        type: Object,
        required: true
    }
})
const user_id = 123; // Нужно получать user_id из localstorage или другой тип кеша
</script>

<template>
    <MessageFromUser 
        v-if="message.from_user == user_id"
        :messageId="message.message_id"
        :messageText="message.message_text"
        :messageTime="message.message_date"
        :messageEdited="message.message_edited"
        :messageStatus="message.message_status"
    />
    <MessageToUser
        v-else
        :messageId="message.message_id"
        :messageText="message.message_text"
        :messageTime="message.message_date"
        :messageEdited="message.message_edited"
    />
</template>