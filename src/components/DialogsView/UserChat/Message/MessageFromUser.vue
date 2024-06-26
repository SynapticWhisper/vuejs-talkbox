<script setup>
import ReplyIcon from '@/components/icons/ReplyIcon.vue';
import PinIcon from '@/components/icons/PinIcon.vue';
import CopyIcon from '@/components/icons/CopyIcon.vue';
import MessageDeliveredIcon from '@/components/icons/MessageDeliveredIcon.vue';
import MessageReadenIcon from '@/components/icons/MessageReadenIcon.vue';

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
    },
    messageStatus: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="message">
        <div class="message-actions">
            <button class="message-btn" title="Pin message">
                <PinIcon class="icon"/>
            </button>
            <button class="message-btn" title="Copy">
                <CopyIcon class="icon"/>
            </button>
            <button class="message-btn" title="Reply">
                <ReplyIcon class="icon"/>
            </button>
        </div>
        <div class="message-container">
            <div class="bubble">
                {{ messageText }}
                <div class="message-info">
                    <div class="edited-status">{{ messageEdited ? 'edited.' : '' }}</div>
                    <div class="message-delivery-time">{{ messageTime }}</div>
                    <div class="message-status-icon">
                        <MessageReadenIcon v-if="messageStatus === 'Readen'" class="message-icon"/>
                        <MessageDeliveredIcon v-else-if="messageStatus === 'Delivered'" class="message-icon"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.message {
    width: 100%;
    min-height: 50px;
    display: flex;
}

.message:hover .message-actions {
    opacity: 1;
    transition: opacity 0.5s;
}

.message-container {
    max-width: 480px;
}

.message-actions {
    min-width: 220px;
    display: flex;
    flex: 1;
    opacity: 0;
    transition: opacity 0.5s;
    padding: 5px 0;
    align-items: end;
    justify-content: end;
}

.bubble {
    --r: 1em;  /* the radius */
    --t: 1.5em; /* the size of the tail */
    --_p: 100%;

    
    color: #fff;
    padding: 12px;
    background: #4725A6 border-box;
    place-self: end;
    border-inline: var(--t) solid #0000;
    border-radius: calc(var(--r) + var(--t))/var(--r);
    border-bottom-right-radius: 0 0;
    mask:
        radial-gradient(100% 100% at var(--_p) 0,#0000 99%,#000 102%) 
        var(--_p) 100%/var(--t) var(--t) no-repeat,
        linear-gradient(#000 0 0) padding-box;
}

.message-btn {
    width: 25px;
    height: 25px;
    margin: 1px;
    border: none;
    border-radius: 8px;
    background-color: transparent;
    opacity: 0.6;
    transition: border 0.1s, opacity 0.5s;
    cursor: pointer;
}

.message-btn .icon {
    width: 20px;
    height: 20px;
}

.message-btn:hover {
    border: 1px solid #e8eaed4a;
    opacity: 1;
    transition: border 0.1s, opacity 0.5s;
}

.message-info {
    display: flex;
    width: 100%;
    justify-content: end;
    font-size: 10pt;
    opacity: 0.7;
}

.edited-status,
.message-delivery-time {
    margin-left: 5px;
}

.message-status-icon {
    width: 17px;
    height: 17px;
}

.message-icon {
    margin-left: 5px;
    max-width: 17px;
    max-height: 17px;
}
</style>