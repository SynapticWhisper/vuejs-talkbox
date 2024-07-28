<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Dialog from './Dialog.vue';
import SearchIcon from '@/components/icons/SearchIcon.vue';
import CloseIcon from '@/components/icons/CloseIcon.vue';

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
            <div class="search-view">
                <SearchIcon class="icon"/>
                <input type="text" class="search-input">
                <button class="clear-search" id="clear-search">
                    <CloseIcon class="icon"/>
                </button>
            </div>
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
    height: 60px;
    align-content: center;
}

.search-view {
    max-height: 36px;
    width: 90%;
    background-color: #444444;
    box-sizing: border-box;
    margin: auto;
    border: 3px solid #444444;
    border-radius: 18px;
    padding: 5px;
    display: flex;
    align-items: center;
}

.search-view input {
    background-color: transparent;
    height: 100%;
    border: none;
    outline: none;
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    flex-grow: 1;
    margin-left: 5px;
    margin-right: 0px;
}

.search-view .icon {
    display: flex;
    align-items: center;
    width: 24px;
    height: 24px;
}

.clear-search {
    background-color: transparent;
    border: none;
    border-radius: 50%;
    height: 30px;
    width: 30px;
    padding: 3px;
    position: relative;
    right: -4px;
}

.clear-search:hover {
    background-color: rgba(255, 255, 255, 10%);
}

.search-view:focus-within {
    border: 3px solid #8774e1;
}

.search-view:focus-within .icon {
    fill: #8774e1;
}

.search-view:focus-within .clear-search:hover {
    background-color: rgba(135, 116, 225, 25%);
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
    background-color: #8774e1;
}
</style>

<style>
.chat:hover .user-chat {
    background-color: rgba(255, 255, 255, 7%);
}

.chat:hover .user-chat.active {
    background-color: #8774e1;
}

a {
    text-decoration: none;
    color: inherit;
}

a:hover {
    color: inherit;
}
</style>
