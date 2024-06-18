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
    <button class="btn" @click="handleClick" :title="isActive ? 'Hide menu' : 'Show menu'">
        <div class="burger" :class="{ active: isActive }">
            <span class="line first"></span>
            <span class="line second"></span>
            <span class="line third"></span>
            <span class="line fourth"></span>
        </div>
        <slot name="btn-name"></slot>
    </button>
</template>

<style scoped>
.btn {
    background-color: transparent;
    border: none;
    min-width: 60px;
    width: 100%;
    min-height: 60px;
    display: flex;
    justify-content: start;
    align-items: center;
    opacity: 0.6;
    transition: opacity 0.3s;
}

.btn:hover {
    opacity: 1;
    transition: opacity 0.3s;
}

.burger {
    position: relative;
    margin: 18px;
    min-width: 24px;
    min-height: 24px;
}

.line {
    display: block;
    position: absolute;
    width: 100%;
    height: 3px;
    left: 0;
    background-color: aliceblue;
    transition: .3s all linear;
}

.first {
    top: 0;
}

.second, .third {
    top: 50%;
    transform: translateY(-50%);
}

.fourth {
    bottom: 0;
}

.burger.active .first, .burger.active .fourth {
    opacity: 0;
}

.burger.active .second {
    transform: translateY(-50%) rotate(45deg);
}

.burger.active .third {
    transform: translateY(-50%) rotate(-45deg);
}
</style>