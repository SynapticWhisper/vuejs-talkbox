<script setup>
defineProps({
    isActive: {
        type: Boolean,
        required: true
    }
})
const btnEmit = defineEmits(['update:active']);
const handleClick = () => {
    btnEmit('update:active')
}
</script>

<template>
    <button class="btn" :class="{ active: isActive }" @click="handleClick">
        <slot name="icon"></slot>
        <slot name="btn-name"></slot>
    </button>
</template>

<style scoped>
.btn {
    min-width: 60px;
    min-height: 60px;
    width: 100%;
    border: none;
    background-color: transparent;
    display: flex;
    justify-content: start;
    align-items: center;
    position: relative;
    overflow: hidden;
    opacity: 0.6;
    transition: opacity 0.3s;
}

.btn:hover {
    opacity: 1;
}

.btn.active {
    opacity: 1;
}

.btn.active::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    border-left: 3px solid #0044ff;
    animation: growBorder 0.3s forwards;
    transform: translateY(-50%);
    transition: none;
}

.btn.active::after {
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