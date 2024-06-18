<script setup>
import SideBar from '@/components/SideBar/SideBar.vue'
// import { ref } from 'vue'
// import ProfileView from '@/views/ProfileView.vue'
// import FriendsView from '@/views/FriendsView.vue'
// import ChatView from '@/views/ChatView.vue'
// import SettingsView from '@/views/SettingsView.vue'
// import LogOutView from '@/views/LogOutView.vue'

// const currentComponent = ref('ProfileView')

// const handleSelect = (selectedComponent) => {
  //   switch (selectedComponent) {
    //       case 'profile':
    //           currentComponent.value = ProfileView
    //           break
    //       case 'frens':
    //           currentComponent.value = FriendsView
    //           break
    //       case 'chat':
    //           currentComponent.value = ChatView
    //           break
    //       case 'settings':
    //           currentComponent.value = SettingsView
    //           break
    //       case 'logout':
    //           currentComponent.value = LogOutView
    //           break
    //       default:
    //           currentComponent.value = ProfileView
    //           break
    //   }
    // }
  </script>

<template>
  <div id="app">
      <SideBar @select="handleSelect" />
      <!-- <SideBar @select="handleSelect" /> -->
      <!-- <component :is="currentComponent" /> -->
  </div>
</template>

<style>
#app {
  display: flex;
}
</style>
