<script setup>
import PhotoCameraIcon from '../icons/PhotoCameraIcon.vue';

defineProps({
    userPhotoUrl: {
        type: [String, null],
        required: true
    }
})

const defaultPhotoUrl = 'src/components/pictures/anon_user.png';
</script>

<template>
    <div class="profile-picture">
        <img class="profile-avatar" :src="userPhotoUrl || defaultPhotoUrl" alt="User Avatar">
        <button class="edit-profile-picture">
            <PhotoCameraIcon class="icon"/>
        </button>
    </div>
</template>

<style scoped>
.profile-picture {
    grid-row: 1;
    grid-column: 2;
    margin: auto;
    max-width: 210px;
    max-height: 210px;
    align-content: center;
    text-align: center;
}

.profile-avatar {
    max-width: 200px;
    max-height: 200px;
    border-radius: 50%;
    border: 3px solid #00aaff;
}

.edit-profile-picture {
    background-color: #00acff;
    border: none;
    border-radius: 50%;
    padding: 12px;
    position: relative;
    top: -64px;
    left: 75px;
    opacity: 0.9;
}

.edit-profile-picture .icon {
    width: 30px;
}

.edit-profile-picture:hover {
    opacity: 1;
}
</style>