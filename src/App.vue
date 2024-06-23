<script setup>
import { ref } from 'vue'
import SideBar from './components/SideBar/SideBar.vue'
import ProfileView from './components/ProfileView/ProfileView.vue'
import DialogsView from './components/DialogsView/DialogsView.vue'
// import FriendsView from '@/views/FriendsView.vue'
// import ChatView from '@/views/ChatView.vue'
// import SettingsView from '@/views/SettingsView.vue'
// import LogOutView from '@/views/LogOutView.vue'

const defaultComponent = 'profile'
const currentComponent = ref(defaultComponent)

const handleSelect = (selectedComponent) => {
	currentComponent.value = selectedComponent
}
</script>

<template>
    <SideBar :defaultComponent="defaultComponent" @select="handleSelect" />
    <component v-if="currentComponent==='profile'" :is="ProfileView" />
	<component v-else-if="currentComponent==='chat'" :is="DialogsView" />
</template>

<style>
#app {
	display: flex;
	width: 100%;
}
</style>
