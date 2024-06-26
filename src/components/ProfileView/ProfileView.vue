<script setup>
import { ref } from 'vue';
import { useFetch } from './fetch.js'
import ProfileInfo from './ProfileInfo.vue';
import ProfileBio from './ProfileBio.vue';
import ProfilePhoto from './ProfilePhoto.vue';
import ProfileStats from './ProfileStats.vue';

const testUserUrl = ref('/UserFromApi.json');
const { data: user, error, isLoading } = useFetch(testUserUrl.value);
</script>

<template>
    <main>
        <div class="profile-container" v-if="!isLoading && user">
            <ProfileInfo :user="user" />
            <ProfileBio :userBio="user.bio" />
            <ProfilePhoto :userPhotoUrl="user.profile_picture_url" />
            <ProfileStats :user="user" />
        </div>
        <div v-else-if="isLoading">Loading...</div>
        <div v-else-if="error">Error loading data: {{ error.message }}</div>
    </main>
</template>

<style scoped>
main {
    flex-grow: 1;
    padding: 20px;
    box-sizing: border-box;
    background-color: #222222;
}

.profile-container {
    background-color: #2a2a2a;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 0 5px rgba(0, 170, 255, 0.6);
    max-width: 760px;
    margin: auto;
    display: grid;
    gap: 20px;
    grid-template-rows: 210px auto;
    grid-template-columns: auto 210px;
    transition: all 0.3s;
}
</style>

<style>
.profile-container h2 {
    padding-bottom: 12px;
    border-bottom: 2px solid #0070A6;
    margin-bottom: 12px;
    color: #00aaff;
}
</style>