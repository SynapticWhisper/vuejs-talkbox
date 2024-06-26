<script setup>
import { ref } from 'vue';
import UserChat from './UserChat/UserChat.vue';
import DialogsList from './DialogsList/DialogsList.vue';
const chatList = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
</script>

<template>
    <main>
        <div class="dialogs-frame">
            <DialogsList :chatList="chatList" />
            <UserChat />
        </div>
    </main>
</template>

<style scoped>
main {
    flex-grow: 1;
    padding: 0 20px;
    box-sizing: border-box;
    background-color: #222222;
}

.dialogs-frame {
    background-color: #323232;
    box-sizing: border-box;
    box-shadow: 0 0 5px rgba(0, 170, 255, 0.6);
    max-width: 1024px;
    height: 100vh;
    margin: auto;
    display: grid;
    gap: 0px;
    grid-template-columns: 340px auto;
    transition: all 0.3s;
}
</style>