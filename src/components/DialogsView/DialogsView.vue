<script setup>
import { ref } from 'vue';
import { useFetch } from '@/fetch';
import UserChat from './UserChat/UserChat.vue';
import DialogsList from './DialogsList/DialogsList.vue';

const testUserUrl = ref('/DialogsFromApi.json');
const { data: chatList, error, isLoading } = useFetch(testUserUrl.value);

if (error.value) {
    console.error('Error fetching chat list:', error.value);
}
</script>

<template>
    <main>
        <div v-if="isLoading">Loading...</div>
        <div v-else-if="error">Error: {{ error.message }}</div>
        <div v-else class="container dialogs">
            <DialogsList :chatList="chatList" />
            <UserChat />
        </div>
    </main>
</template>

<style scoped>
main {
    padding: 0 20px;
}

.dialogs {
    max-width: 1024px;
    height: 100vh;
    gap: 0px;
    grid-template-columns: 340px auto;
}
</style>

<style>
.btn {
    border: none;
    background-color: transparent;
    cursor: pointer;
}
</style>
