<script setup>
import { computed } from 'vue';
import { format } from 'date-fns';

const props = defineProps({
    dialog: {
        type: Object,
        required: true,
    },
    isActive: {
        type: Boolean,
        required: true,
    }
}); 
// Динамический импорт изображения
const defaultPhotoUrl = new URL('@/components/pictures/anon_user.png', import.meta.url).href;

const my_id = 124;

const getWeekNumber = (date) => {
    var date = new Date(date.getTime());
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    var week1 = new Date(date.getFullYear(), 0, 4);
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
}

const prepareDate = (dateStr) => {
    let currentDate = new Date();
    let givenDate = new Date(dateStr);
    if (givenDate.getUTCDate() === currentDate.getUTCDate() && 
    givenDate.getUTCMonth() === currentDate.getUTCMonth() &&
    givenDate.getUTCFullYear() === currentDate.getUTCFullYear()) {
        return format(givenDate, 'H:mm')
    } else if (givenDate.getUTCFullYear() === currentDate.getUTCFullYear() && 
    getWeekNumber(currentDate) === getWeekNumber(givenDate)) {
        return format(givenDate, 'EEE')
    } else {
        return format(givenDate, 'd MM yyyy'); // Пример формата даты
    }
    
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
    <div class="user-chat" :class="{ active: isActive }">
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
        <div class="circle-container">
            <div class="circle" v-if="props.dialog.id === props.dialog.last_message.sender_id">
                <p>+1</p>
            </div>
            <div v-else class="empty-circle"></div>
        </div>
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
    gap: 2px 6px;
    padding: 10px;
    margin: 4px;
    grid-template-columns: 60px 150px auto 30px;
    grid-template-rows: 28px 28px;
}

.target-username {
    font-size: 12pt;
    grid-column: 2;
    grid-row: 1;
    align-content: center;
}

.user-picture {
    grid-row: 1 / 3;
    grid-column: 1;
    margin: auto;
    max-width: 60px;
    max-height: 60px;
    align-content: center;
    text-align: center;
}

.profile-avatar {
    max-width: 60px;
    max-height: 60px;
    border-radius: 50%;
}

.last-message {
    grid-column: 2 / 4;
    grid-row: 2;
    font-size: 10pt;
    font-weight: bolder;
    align-content: center;
    opacity: 0.7;
}

.message-time {
    grid-column: 3 / 5;
    grid-row: 1;
    font-size: 10pt;
    opacity: 0.7;
    align-content: center;
    text-align: end;
}

.circle-container {
    grid-row: 2;
    grid-column: 4;
    display: flex;
    justify-content: flex-end;
}

.circle {
    color: #ffffff;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    font-weight: bold;
    font-size: 14px;
    width: 20px;
    height: 20px;
    padding: 3px;
    border-radius: 50%;
    background-color: #8774e1;
    align-content: center;
}

.user-chat.active {
    background-color: #8774e1;
}

.user-chat.active .last-message,
.user-chat.active .message-time {
    opacity: 1;
}

.user-chat.active .circle {
    color: #8774e1;
    background-color: #ffffff;
}
</style>
