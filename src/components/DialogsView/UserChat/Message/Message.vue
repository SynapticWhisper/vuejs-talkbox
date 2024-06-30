<script setup>
import { computed } from 'vue';
import MessageFromUser from './MessageFromUser.vue';
import MessageToUser from './MessageToUser.vue';
const props = defineProps({
    message: {
        type: Object,
        required: true
    }
})
const user_id = 123; // Нужно получать user_id из localstorage или другой тип кеша
const isMessageFromUser = computed(() => props.message.from_user === user_id);
</script>

<template>
    <MessageFromUser 
        v-if="isMessageFromUser"
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