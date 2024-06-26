<script setup>
import { ref } from 'vue'
import BurgerButton from './BurgerButton.vue'
import MenuButton from './MenuButton.vue'
import LogOutButton from './LogOutButton.vue';


defineProps({
    currentPath: {
        type: String,
        required: true,
    },
})

const sideBarOpened = ref(false)

const switchSideBar = () => {
    sideBarOpened.value = !sideBarOpened.value
}

const logOut = () => {
    console.log("User try to logout")
}
</script>

<template>
    <aside
        :class="{ opened: sideBarOpened, closed: !sideBarOpened }"
    >
        <div class="top-menu">
            <BurgerButton
                :isActive="sideBarOpened"
                @update:active="switchSideBar"
            >
            </BurgerButton>
            <MenuButton :btnName="'#/profile'"
                :sidoBarIsOpened="sideBarOpened"
                :currentPath="currentPath"
                title="Profile"
            />
            <MenuButton :btnName="'#/friends'"
                :sidoBarIsOpened="sideBarOpened"
                :currentPath="currentPath"
                title="Frens"
            >
                <template #notification>
                    <div class="circle">
                        <p>+12</p>
                    </div>
                </template>
            </MenuButton>
            <MenuButton :btnName="'#/dialogs'"
                :sidoBarIsOpened="sideBarOpened"
                :currentPath="currentPath"
                title="Dialogs"
            >
                <template #notification>
                    <div class="circle">
                        <p>92</p>
                    </div>
                </template>
            </MenuButton>
            <MenuButton :btnName="'#/settings'"
                :sidoBarIsOpened="sideBarOpened"
                :currentPath="currentPath"
                title="Settings"
            />
        </div>
        <div class="bottom-menu">
            <LogOutButton
                :sidoBarIsOpened="sideBarOpened"
                @logout="logOut"
                title="LogOut"
            />
        </div>
    </aside>
</template>
<style scoped>
aside {
    width: 60px;
    height: 100vh;
    background-color: #333;
    color: white;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

aside.opened {
    animation: openSideBar 0.3s forwards;
}

aside.closed {
    animation: closeSideBar 0.3s forwards;
}

.circle {
    color: #ffffff;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    font-weight: 700;
    font-size: 12px;
    min-width: 16px;
    min-height: 16px;
    max-height: 16px;
    padding: 3px;
    border-radius: 8px;
    background-color: #534283;
    position: absolute;
    top: 5px;
    right: 5px;
    z-index: 2;
}

@keyframes openSideBar {
    0% {
        width: 60px;
    }
    100% {
        width: 160px;
    }
}

@keyframes closeSideBar {
    0% {
        width: 160px;
    }
    100% {
        width: 60px;
    }
}
</style>

<style>
.sidebar-btn {
    min-width: 60px;
    min-height: 60px;
    width: 100%;
    border: none;
    background-color: transparent;
    display: flex;
    justify-content: start;
    align-items: center;
    position: relative;
    overflow: hidden;
}

.sidebar-btn,
.sidebar-btn:active,
.sidebar-btn:hover {
    text-decoration: none;
}

.sidebar-btn:hover .btn-icon,
.sidebar-btn:hover .btn-text,
.sidebar-btn:hover .burger {
    opacity: 1;
    transition: opacity 0.3s;
}

.btn-icon {
    z-index: 1;
    margin: 15px;
    min-width: 30px;
    min-height: 30px;
    opacity: 0.6;
    transition: opacity 0.3s;
}

.btn-text {
    z-index: 1;
    text-align: start;
    white-space: nowrap;
    overflow: hidden;
    color: #ffffff;
    font-family: 'Montserrat', sans-serif;
    opacity: 0.6;
    transition: opacity 0.3s;
    font-size: 16pt;
}
</style>