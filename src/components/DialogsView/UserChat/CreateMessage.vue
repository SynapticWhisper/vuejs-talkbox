<script setup>
import { ref } from 'vue';
import AddFileIcon from '../../icons/AddFileIcon.vue';
import SendMessageIcon from '../../icons/SendMessageIcon.vue';
import AddSmileIcon from '../../icons/AddSmileIcon.vue';

const messageEmit = defineEmits(['send']);

const messageText = ref('');

const sendMessageTask = () => {
    if (messageText.value !== '') {
        messageEmit('send', messageText.value);
        messageText.value = '';
    };
};
</script>

<template>
    <div class="create-message">
        <button class="btn add-file" id="add-file">
            <AddFileIcon class="icon"/>
        </button>
        <input v-model="messageText" class="message" type="text" name="message" id="user-message" placeholder="Write a message...">
        <button class="btn add-smile" id="send-message">
            <AddSmileIcon class="icon"/>
        </button>
        <button class="btn send-message" id="send-message" @click="sendMessageTask">
            <SendMessageIcon class="icon"/>
        </button>
    </div>
</template>

<style scoped>
.create-message {
    background-color: #2a2a2a;
    display: grid;
    grid-template-columns: 60px auto 50px 50px;
}

.btn {
    width: 60px;
    height: 60px;
    border: none;
    background-color: transparent;
    cursor: pointer;
}

.btn.send-message,
.btn.add-smile{
    width: 50px;
    height: 60px;
    border: none;
    background-color: transparent;
}

.btn:hover .icon {
    opacity: 1;
    transition: opacity 0.3;
}

.btn .icon {
    width: 30px;
    height: 30px;
    opacity: 0.7;
    transition: opacity 0.3;
}

.btn.add-file .icon {
    transform: rotate(45deg);
}

.btn.send-message .icon {
    transform: rotate(-20deg);
}

.message {
    padding: 10px 8px;
    margin: auto 5px;
    box-sizing: border-box;
    background-color: #666;
    outline: none;
    color: #fff;
    font-size: 14pt;
    border-radius: 12px;
    border: 2px solid #555;
}

.message::-webkit-input-placeholder {
    color: #ccc;
}

.message::-moz-placeholder {
    color: #ccc
}
</style>