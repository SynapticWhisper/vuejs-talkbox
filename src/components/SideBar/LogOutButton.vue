<script setup>
import PowerOffIcon from '../icons/PowerOffIcon.vue';
defineProps({
    sidoBarIsOpened: {
        type: Boolean,
        required: true,
    }
})

const btnEmit = defineEmits(['logout']);
const handleClick = () => {
    btnEmit('logout')
}
</script>

<template>
    <button class="sidebar-btn" @click="handleClick">
        <PowerOffIcon class="btn-icon"/>
        <h2 class="btn-text">{{sidoBarIsOpened ? 'LogOut' : ''}}</h2>
    </button>
</template>
