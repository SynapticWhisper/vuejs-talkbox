<script setup>
import { ref } from 'vue';
import ProfileInfo from './ProfileInfo.vue';
import ProfileBio from './ProfileBio.vue';
import ProfilePhoto from './ProfilePhoto.vue';
import ProfileStats from './ProfileStats.vue';

const userName = ref("User Name");
const userEmail = ref("example@example.com");
const userBirthday = ref(new Date('2000-01-01'));
const userTelegram = ref("@telegram_username");
const userBio = ref("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus distinctio officia fuga iste animi. Sed velit, tempore similique soluta facilis architecto obcaecati voluptatibus ut, et, cumque molestias doloremque autem nesciunt.")
const userPhotoUrl = ref(null)
const userFriends = ref(123)
const userSubs = ref(80)
const userPosts = ref(12)
const userMoney = ref(512.5)

</script>

<template>
    <main>
        <div class="profile-container">
            <ProfileInfo 
                :username="userName"
                :email="userEmail"
                :birthday="userBirthday"
                :telegram="userTelegram"
            />
            <ProfileBio 
                :userBio="userBio"
            />
            <ProfilePhoto :userPhotoUrl="userPhotoUrl"/>
            <ProfileStats 
                :userFriends="userFriends"
                :userSubs="userSubs"
                :userPosts="userPosts"
                :userMoney="userMoney"
            />
        </div>
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