<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Dialog from './Dialog.vue';
import SearchIcon from '@/components/icons/SearchIcon.vue';

const props = defineProps({
    chatList: {
        type: Array,
        required: true
    }
});
const dialogsStaticHash = '#/dialogs'
const currentHash = ref(window.location.hash)

const updateHash = () => {
    currentHash.value = window.location.hash;
};

onMounted(() => {
    window.addEventListener('hashchange', updateHash);
});

onBeforeUnmount(() => {
    window.removeEventListener('hashchange', updateHash);
});
</script>

<template>
    <div class="dialogs-list">    
        <div class="dialogs-search">
            <input type="text">
            <SearchIcon class="icon"/>
        </div>
        <a :href="`${dialogsStaticHash}/${chat.id}`" v-for="chat in chatList" :key="chat.id" class="chat">
            <Dialog
            :dialog="chat"
            :isActive="`${dialogsStaticHash}/${chat.id}` === currentHash" 
            />
        </a>
    </div>
</template>

<style scoped>
.dialogs-list {
    display: flex;
    flex-direction: column;
    border-right: 2px solid #222222;
    overflow-y: auto;
    overflow-x: hidden;
}

.dialogs-search {
    display: flex;
    justify-content: center;
    height: 60px;
    position: relative;
}

.dialogs-search input {
    height: 36px;
    width: 90%;
    background-color: #444444;
    margin: auto;
    border: none;
    border-radius: 18px;
}

.dialogs-search .icon {
    width: 24px;
    height: 24px;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    right: 30px;
}

.dialogs-list:hover::-webkit-scrollbar {
    width: 6px;
}

.dialogs-list::-webkit-scrollbar {
    width: 0px;
}

.dialogs-list::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 4px;
}

.dialogs-list::-webkit-scrollbar-thumb {
    background-color: #222222;
    border-radius: 4px;
}

.chat.active .user-chat {
    background-color: #534283;
}
</style>

<style>
.chat:hover .user-chat {
    background-color: rgba(255, 255, 255, 0.1);
}

.chat:hover .user-chat.active {
    background-color: rgb(0, 68, 102, 75%);
}

a {
    text-decoration: none;
    color: inherit;
}

a:hover {
    color: inherit;
}
</style>
