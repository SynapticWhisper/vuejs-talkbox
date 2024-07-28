<script setup>
import ReplyIcon from '@/components/icons/ReplyIcon.vue';
import PinIcon from '@/components/icons/PinIcon.vue';
import CopyIcon from '@/components/icons/CopyIcon.vue';

defineProps({
    messageId: {
        type: Number,
        required: true,
    },
    messageText: {
        type: String,
        required: true
    },
    messageTime: {
        type: String,
        required: true
    },
    messageEdited: {
        type: Boolean,
        required: true
    }
})
// Динамический импорт изображения
const defaultPhotoUrl = new URL('@/components/pictures/anon_user.png', import.meta.url).href;
</script>

<template>
    <div class="message">
        <div class="user-picture">
            <img
                class="profile-avatar"
                :src="defaultPhotoUrl"
                alt="User Avatar"
            />
        </div>
        <div class="message-container">
            <div class="bubble">
                {{ messageText }}
                <div class="message-info">
                    <div class="edited-status">{{ messageEdited ? 'edited.' : ''}}</div>
                    <div class="message-delivery-time">{{ messageTime }}</div>
                </div>
            </div>
        </div>
        <div class="message-actions">
            <button class="message-btn" title="Reply">
                <ReplyIcon class="icon"/>
            </button>
            <button class="message-btn" title="Copy">
                <CopyIcon class="icon"/>
            </button>
            <button class="message-btn" title="Pin message">
                <PinIcon class="icon"/>
            </button>
        </div>
    </div>
</template>

<style scoped>
@import url('../../../../assets/message-styles.css');
.message-actions {
    justify-content: start;
    position: relative;
    left: -15px;
    z-index: 1;
}

.user-picture {
    grid-row: 1 / 3;
    grid-column: 1;
    margin: auto;
    max-width: 50px;
    max-height: 50px;
    align-content: center;
    text-align: center;
}

.profile-avatar {
    max-width: 50px;
    max-height: 50px;
    border-radius: 50%;
}

.bubble {
    --r: 1em;
    --t: 1.5em;
    --_p: 0;

    color: #fff;
    background: #2548A6 border-box;
    place-self: start;
    padding: 12px;
    border-inline: var(--t) solid #0000;
    border-radius: calc(var(--r) + var(--t))/var(--r);
    border-bottom-left-radius: 0 0;
    mask:
        radial-gradient(100% 100% at var(--_p) 0,#0000 99%,#000 102%) 
        var(--_p) 100%/var(--t) var(--t) no-repeat,
        linear-gradient(#000 0 0) padding-box;
}
</style>