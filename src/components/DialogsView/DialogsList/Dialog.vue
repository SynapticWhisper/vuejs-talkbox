<script setup>
import { reactive } from 'vue';
defineProps({
    dialog: {
        type: Object,
        required: true,
    }
})

const lastMessage = reactive({
    targetUser: dialog.targetUser,
    lastMessage: dialog.LastMessage,
})

</script>

<template>
    <a 
        :href="lastMessage.target_id"
        class="dialog"
    >
    </a>
</template>

<style scoped>
.dialog {
    width: 100%;
    height: 80px;
}
</style>