<script setup>
import SearchIcon from '@/components/icons/SearchIcon.vue';
import MoreVertIcon from '@/components/icons/MoreVertIcon.vue';
defineProps({
    targetUser: {
        type: Object,
        required: true
    }
})

const defaultPhotoUrl = 'src/components/pictures/anon_user.png';
</script>

<template>
    <div class="user-info">
        <div class="user-picture">
            <img class="profile-avatar" :src="targetUser.photo_url || defaultPhotoUrl" alt="User Avatar">
        </div>
        <h3 class="username">{{ targetUser.name }}</h3>
        <p class="last-seen">{{ targetUser.last_visit }}</p>
        <button class="btn" id="search">
            <SearchIcon class="icon"/>
        </button>
        <button class="btn" id="more">
            <MoreVertIcon class="icon"/>
        </button>
    </div>
</template>

<style scoped>
.user-info {
    min-height: 40px;
    box-sizing: border-box;
    background-color: #2a2a2a;
    display: grid;
    grid-template-columns: 50px auto 30px 30px;
    grid-template-rows: 25px 25px; 
    padding: 5px 12px;
    align-content: center;
}

.user-picture {
    grid-row: 1 / span 2;
    grid-column: 1;
    margin: auto;
    max-width: 50px;
    max-height: 50px;
    align-content: center;
    text-align: center;
}

.profile-avatar {
    box-sizing: border-box;
    max-width: 50px;
    max-height: 50px;
    border-radius: 50%;
    border: 3px solid #00aaff;
}

.username {
    margin-left: 15px;
    grid-row: 1;
    grid-column: 2;
}

.last-seen {
    grid-row: 2;
    grid-column: 2;
    margin-left: 15px;
    font-size: 10pt;
    opacity: 0.7;
}

.btn {
    grid-row: 1 / span 2;
    opacity: 0.6;
    max-width: 30px;
    transition: all 0.5s;
}

.btn:hover {
    opacity: 1;
    transition: all 0.5s;
}

.icon {
    width: 28px;
    height: 28px;
}
</style>