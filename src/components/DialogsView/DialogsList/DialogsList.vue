<script setup>
defineProps({
    chatList: {
        type: Object,
        required: true
    }
});
const defaultPhotoUrl = 'src/components/pictures/anon_user.png';
</script>

<template>
    <div class="dialogs-list">
        <a class="chat active">
            <div class="user-chat">
                <div class="user-picture">
                    <img class="profile-avatar" :src="defaultPhotoUrl" alt="User Avatar">
                </div>
                <h3 class="target-username">Username</h3>
                <p class="last-message">Last message text ...</p>
                <p class="message-time">22:16</p>
                <div class="circle">
                    <p>+1</p>
                </div>
            </div>
        </a>    
        <a v-for="chat in chatList" class="chat">
            <div class="user-chat">
                <div class="user-picture">
                    <img class="profile-avatar" :src="defaultPhotoUrl" alt="User Avatar">
                </div>
                <h3 class="target-username">Username</h3>
                <p class="last-message">Last message text ...</p>
                <p class="message-time">22:16</p>
                <div class="circle">
                    <p>+1</p>
                </div>
            </div>
        </a>
    </div>
</template>

<style scoped>
.dialogs-list {
    display: flex;
    flex-direction: column;
    border-right: 2px solid #222222;
    background-color: #2a2a2a;
    overflow-y: auto;
    overflow-x: hidden;
}

.dialogs-list:hover::-webkit-scrollbar {
    width: 6px;
}

.dialogs-list:hover .chat {
    padding-right: 0;
}

.dialogs-list::-webkit-scrollbar {
    width: 0px;
}

.dialogs-list::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 4px;
}

.dialogs-list::-webkit-scrollbar-thumb {
    background-color: #222222;
    border-radius: 4px;
}

.chat {
    box-sizing: border-box;
    width: 100%;
    height: 80px;
    padding: 4px;
    padding-right: 6px;
}

.user-chat {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0);
    border-radius: 12px;
    display: grid;
    gap: 0 5px;
    padding: 0 8px;
    grid-template-columns: 60px 200px 50px;
    grid-template-rows: 36px 36px;
}

.target-username {
    font-size: 12pt;
    grid-column: 2;
    grid-row: 1;
    align-content: center;
}

.last-message {
    grid-column: 2;
    grid-row: 2;
    font-size: 10pt;
    opacity: 0.7;
}

.chat:hover .user-chat {
    background-color: rgba(255, 255, 255, 0.1);
}

.chat.active .user-chat {
    background-color: #534283;
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