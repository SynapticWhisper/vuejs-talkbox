<script setup>
defineProps({
    userBio: {
        type: String,
        required: false
    }
})
</script>

<template>
    <div class="profile-bio">
        <h2>BIO</h2>
        <p>{{ userBio }}</p>
    </div>
</template>

<style scoped>
@import url('../../assets/profileview-styles.css');
</style>