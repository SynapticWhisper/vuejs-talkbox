<script setup>
import { computed } from 'vue';
import { format } from 'date-fns';

const props = defineProps({
    dialog: {
        type: Object,
        required: true,
    },
});

// Динамический импорт изображения
const defaultPhotoUrl = new URL('@/components/pictures/anon_user.png', import.meta.url).href;

const my_id = 124;

const prepareDate = (date) => {
    if (typeof date === 'string') {
        date = new Date(date);
    }
    return format(date, 'd MMM yyyy'); // Пример формата даты
};

const getShortMessageContent = () => {
    let filesCount = 0;
    let messageContent = props.dialog.last_message.message_content;
    if (messageContent.message_text !== '') {
        return messageContent.message_text;
    } else if (messageContent.message_pictures.length > 0) {
        filesCount = messageContent.message_pictures.length;
        return `${filesCount} Pictures`;
    } else if (messageContent.message_files.length > 0) {
        filesCount = messageContent.message_files.length;
        return `${filesCount} Files`;
    } else {
        return '...';
    }
};

const lastMessageShortCut = computed(() => getShortMessageContent());
const preparedDate = computed(() => prepareDate(props.dialog.last_message.departure_date));

</script>

<template>
    <div class="user-chat">
        <div class="user-picture">
            <img
                class="profile-avatar"
                :src="props.dialog.profile_picture_url || defaultPhotoUrl"
                alt="User Avatar"
            />
        </div>
        <h3 class="target-username">{{ props.dialog.username }}</h3>
        <p class="last-message">{{ lastMessageShortCut }}</p>
        <p class="message-time">{{ preparedDate }}</p>
        <div class="circle" v-if="props.dialog.id === props.dialog.last_message.sender_id">
            <p>+1</p>
        </div>
        <div v-else class="empty-circle"></div>
    </div>
</template>

<style scoped>
.chat-link {
    padding: 6px;
}

.user-chat {
    box-sizing: border-box;
    background-color: rgba(255, 255, 255, 0);
    border-radius: 12px;
    display: grid;
    gap: 0 5px;
    padding: 10px;
    margin: 4px;
    grid-template-columns: 60px 200px 50px;
    grid-template-rows: 50% 50%;
}

.target-username {
    font-size: 12pt;
    grid-column: 2;
    grid-row: 1;
    align-content: center;
}

.user-picture {
    grid-row: 1 / span 2;
    grid-column: 1;
    margin: auto;
    max-width: 60px;
    max-height: 60px;
    align-content: center;
    text-align: center;
}

.profile-avatar {
    max-width: 55px;
    max-height: 55px;
    border-radius: 50%;
    border: 3px solid #00aaff;
}

.last-message {
    grid-column: 2;
    grid-row: 2;
    font-size: 10pt;
    opacity: 0.7;
}

.message-time {
    grid-column: 3;
    grid-row: 1;
    font-size: 10pt;
    opacity: 0.7;
    align-content: center;
}

.circle {
    grid-column: 3;
    grid-row: 2;
    color: #ffffff;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    font-weight: 700;
    font-size: 12px;
    width: 20px;
    height: 20px;
    padding: 3px;
    border-radius: 50%;
    background-color: #666666;
    align-content: center;
}
</style>
