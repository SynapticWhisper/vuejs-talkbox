<script setup>
import { ref } from 'vue'
import BurgerButton from './BurgerButton.vue'
import MenuButton from './MenuButton.vue'
import ProfileIcon from '../icons/ProfileIcon.vue'
import ChatIcon from '../icons/ChatIcon.vue'
import FrensIcon from '../icons/FrensIcon.vue'
import SettingsIcon from '../icons/SettingsIcon.vue'
import PowerOffIcon from '../icons/PowerOffIcon.vue'

const activeButton = ref('')

const setActiveButton = (buttonName) => {
    activeButton.value = buttonName
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
            </MenuButton>
            <MenuButton
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
            </MenuButton>
            <MenuButton
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

.btn-icon {
    z-index: 1;
    margin: 15px;
    min-width: 30px;
    min-height: 30px;
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

@keyframes printedText {
    from {
        width: 0;
    }
}
</style>