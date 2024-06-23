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
.profile-bio {
    grid-row: 3;
    grid-column: 1 / span 2;
}
</style>