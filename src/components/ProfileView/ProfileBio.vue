<script setup>
import EditIcon from '../icons/EditIcon.vue';

defineProps({
    userBio: {
        type: String,
        required: false
    }
})
</script>

<template>
    <div class="profile-bio">
        <div class="cpmponent-header">
            <h2>BIO</h2>
            <button class="edit-profile-info">
                <EditIcon class="icon"/>
                edit
            </button>
        </div>
        <p>{{ userBio }}</p>
    </div>
</template>

<style scoped>
@import url('../../assets/profileview-styles.css');
</style>