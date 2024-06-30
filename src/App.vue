<script setup>
import { ref, computed } from 'vue'
import NotFound from './components/NotFound.vue'
import SideBar from './components/SideBar/SideBar.vue'
import ProfileView from './components/ProfileView/ProfileView.vue'
import DialogsView from './components/DialogsView/DialogsView.vue'


const routes = {
	'/': NotFound,
	'profile': ProfileView,
	'dialogs': DialogsView
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
	currentPath.value = window.location.hash
})

const currentView = computed(() => {
	return routes[currentPath.value.split('/')[1] || '/'] || NotFound
})

const currentComponent = computed(() => {
	return currentPath.value.split('/')[1] || '/'
})
</script>

<template>
    <SideBar :currentComponent="currentComponent"/>
    <component :is="currentView" />
</template>

<style>
#app {
	display: flex;
	width: 100%;
}
</style>
