<script setup>
import { ref } from 'vue';
import { useFetch } from '../../fetch.js'
import ProfileInfo from './ProfileInfo.vue';
import ProfileBio from './ProfileBio.vue';
import ProfilePhoto from './ProfilePhoto.vue';
import ProfileStats from './ProfileStats.vue';
import LoadingUserProfile from './LoadingUserProfile.vue';

const testUserUrl = ref('/UserFromApi.json');
const { data: user, error, isLoading } = useFetch(testUserUrl.value);

</script>

<template>
    <main>
        <div class="container profile" v-if="!isLoading && user">
            <ProfileInfo :user="user" />
            <ProfileBio :userBio="user.bio" />
            <ProfilePhoto :userPhotoUrl="user.profile_picture_url" />
            <ProfileStats :user="user" />
        </div>
        <div v-else-if="isLoading">
            <LoadingUserProfile />
        </div>
        <div v-else-if="error">Error loading data: {{ error.message }}</div>
    </main>
</template>

<style scoped>
@import url('../../assets/profileview-styles.css');
</style>

<style>
.profile h2 {
    padding-bottom: 12px;
    border-bottom: 2px solid #0070A6;
    margin-bottom: 12px;
    color: #00aaff;
}
</style>