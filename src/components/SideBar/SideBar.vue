<script setup>
import { ref } from 'vue'
import BurgerButton from './BurgerButton.vue'
import MenuButton from './MenuButton.vue'
import ProfileIcon from '../icons/ProfileIcon.vue'
import ChatIcon from '../icons/ChatIcon.vue'
import FrensIcon from '../icons/FrensIcon.vue'
import SettingsIcon from '../icons/SettingsIcon.vue'
import PowerOffIcon from '../icons/PowerOffIcon.vue'

const props = defineProps({
    defaultComponent: {
        type: String,
        required: true
    }
})

const sideBarEmits = defineEmits(['select']);

const activeButton = ref(props.defaultComponent)

const setActiveButton = (buttonName) => {
    activeButton.value = buttonName
    sideBarEmits("select", buttonName)
}

const sideBarOpened = ref(false)

const switchSideBar = () => {
    sideBarOpened.value = !sideBarOpened.value
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
            <template #btn-name>
                <h2 class="btn-text" v-if="sideBarOpened">Hide</h2>
                <h2 v-else></h2>
            </template>
            </BurgerButton>
            <MenuButton
                class="sidebar-btn"
                :isActive="activeButton === 'profile'"
                @update:active="() => setActiveButton('profile')"
                title="Profile"
            >
                <template #btn-name>
                    <h2 class="btn-text" v-if="sideBarOpened">Profile</h2>
                    <h2 v-else></h2>
                </template>
                <template #icon>
                    <ProfileIcon class="btn-icon" />
                </template>
            </MenuButton>
            <MenuButton
                class="sidebar-btn"
                :isActive="activeButton === 'frens'"
                @update:active="() => setActiveButton('frens')"
                title="Frens"
            >
                <template #btn-name>
                    <h2 class="btn-text" v-if="sideBarOpened">Friends</h2>
                    <h2 v-else></h2>
                </template>
                <template #icon>
                    <FrensIcon class="btn-icon" />
                </template>
                <template #notification>
                    <div class="circle">
                        <p>+12</p>
                    </div>
                </template>
            </MenuButton>
            <MenuButton
                class="sidebar-btn"
                :isActive="activeButton === 'chat'"
                @update:active="() => setActiveButton('chat')"
                title="Dialogs"
            >
                <template #btn-name>
                    <h2 class="btn-text" v-if="sideBarOpened">Dialogs</h2>
                    <h2 v-else></h2>
                </template>
                <template #icon>
                    <ChatIcon class="btn-icon" />
                </template>
                <template #notification>
                    <div class="circle">
                        <p>92</p>
                    </div>
                </template>
            </MenuButton>
            <MenuButton
                class="sidebar-btn"
                :isActive="activeButton === 'settings'"
                @update:active="() => setActiveButton('settings')"
                title="Settings"
            >
                <template #btn-name>
                    <h2 class="btn-text" v-if="sideBarOpened">Settings</h2>
                    <h2 v-else></h2>
                </template>
                <template #icon>
                    <SettingsIcon class="btn-icon" />
                </template>
            </MenuButton>
        </div>
        <div class="bottom-menu">
            <MenuButton
                class="sidebar-btn"
                :isActive="false"
                title="LogOut"
            >
                <template #btn-name>
                    <h2 class="btn-text" v-if="sideBarOpened">LogOut</h2>
                    <h2 v-else></h2>
                </template>
                <template #icon>
                    <PowerOffIcon class="btn-icon" />
                </template>
            </MenuButton>
        </div>
    </aside>
</template>
<style scoped>
aside {
    min-width: 60px;
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

.sidebar-btn:hover .btn-icon,
.sidebar-btn:hover .btn-text
{
    opacity: 1;
    transition: opacity 0.3s;
}

.sidebar-btn.active .btn-icon,
.sidebar-btn.active .btn-text {
    opacity: 1;
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
    width: 7ch;
    text-align: start;
    white-space: nowrap;
    overflow: hidden;
    color: #ffffff;
    font-family: 'Montserrat', sans-serif;
    animation: printedText 0.4s steps(9);
    opacity: 0.6;
    transition: opacity 0.3s;
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
        min-width: 60px;
    }
    100% {
        min-width: 160px;
    }
}

@keyframes closeSideBar {
    0% {
        min-width: 160px;
    }
    100% {
        min-width: 60px;
    }
}

@keyframes printedText {
    from {
        width: 0;
    }
}
</style>