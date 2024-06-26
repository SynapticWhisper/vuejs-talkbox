<script setup>
import Message from './Message/Message.vue';
defineProps({
    messages: {
        type: Object,
        required: true,
    }
})
</script>

<template>
    <div class="messages-list" ref="messages">
        <div v-for="message in messages" :key="message.message_id" class="message">
            <Message :message="message"/>
        </div>
    </div>
</template>

<style scoped>
.messages-list {
    padding: 6px;
    margin: 12px 6px 24px 6px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
}

.messages-list::-webkit-scrollbar {
    width: 8px;
}

.messages-list::-webkit-scrollbar-track {
    background: #444444;
    border-radius: 4px;
}

.messages-list::-webkit-scrollbar-thumb {
    background-color: #222222;
    border-radius: 4px;
}
.message {
    margin-bottom: 12px;
}
</style>
