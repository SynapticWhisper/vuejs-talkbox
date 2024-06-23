<script setup>
import UserChat from './UserChat/UserChat.vue';
import DialogsList from './DialogsList/DialogsList.vue';
</script>

<template>
    <main>
        <div class="dialogs-frame">
            <DialogsList />
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
    box-shadow: 0 0 5px rgba(0, 170, 255, 0.6);
    max-width: 1024px;
    min-height: 100%;
    margin: auto;
    display: grid;
    gap: 0px;
    grid-template-columns: 300px auto;
    transition: all 0.3s;
}
</style>