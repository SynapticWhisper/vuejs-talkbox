<script setup>
import { ref, computed } from 'vue';
import ProfileIcon from '../icons/ProfileIcon.vue';
import ChatIcon from '../icons/ChatIcon.vue';
import FrensIcon from '../icons/FrensIcon.vue';
import SettingsIcon from '../icons/SettingsIcon.vue';

const props = defineProps({
    btnName: {
        type: String,
        required: true
    },
    sidoBarIsOpened: {
        type: Boolean,
        required: true,
    },
    currentComponent: {
        type: String,
        required: true
    }
});

const tmp = {
    'profile': {
        text: 'Profile',
        btnIcon: ProfileIcon
    },
    'friends': {
        text: 'Friends',
        btnIcon: FrensIcon
    },
    'dialogs': {
        text: 'Dialogs',
        btnIcon: ChatIcon
    },
    'settings': {
        text: 'Settings',
        btnIcon: SettingsIcon
    }
};

const currentButton = computed(() => {
    return tmp[props.btnName] || {}
});
</script>

<template>
    <a :href="`#/${btnName}`" class="sidebar-btn" :class="{ active: currentComponent === btnName }">
        <slot name="notification"></slot>
        <component :is="currentButton.btnIcon" class="btn-icon"/>
        <h2 class="btn-text">{{sidoBarIsOpened ? currentButton.text : ''}}</h2>
    </a>
</template>

<style scoped>
.sidebar-btn.active::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    border-left: 3px solid #0044ff;
    animation: growBorder 0.3s forwards;
    transform: translateY(-50%);
    transition: none;
}

.sidebar-btn.active::after {
    content: '';
    position: absolute;
    top: 0;
    left: 3px;
    width: 0;
    height: 100%;
    background-color: #004466;
    animation: fillBackground 0.3s 0.3s forwards;
    transition: none;
}

.sidebar-btn.active .btn-icon,
.sidebar-btn.active .btn-text {
    opacity: 1;
}


@keyframes growBorder {
    0% {
        height: 0;
    }
    100% {
        height: 100%;
    }
}

@keyframes fillBackground {
    0% {
        width: 0;
    }
    100% {
        width: 100%;
    }
}
</style>