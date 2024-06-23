<script setup>
import ColoredGroupIcon from '../icons/ColoredGroupIcon.vue';
import ColoredThubUpIcon from '../icons/ColoredThumbUpIcon.vue';
import ColoredChatIcon from '../icons/ColoredChatIcon.vue';
import ColoredAttachMoneyIcon from '../icons/ColoredAttachMoneyIcon.vue';

defineProps({
    userFriends: {
        type: Number,
        required: true
    },
    userSubs: {
        type: Number,
        required: true
    },
    userPosts: {
        type: Number,
        required: true
    },
    userMoney: {
        type: Number,
        required: true
    }
})
</script>

<template>
    <div class="profile-stats">
        <h2>Stats</h2>
        <div class="user-stats">
            <div class="stats-col frens">
                <ColoredGroupIcon class="icon"/>
                <h3>{{ userFriends }} Friends</h3>
            </div>
            <div class="stats-col subs">
                <ColoredThubUpIcon class="icon"/>
                <h3>{{ userSubs }} Subs</h3>
            </div>
            <div class="stats-col posts">
                <ColoredChatIcon class="icon"/>
                <h3>{{ userPosts }} Posts</h3>
            </div>
            <div class="stats-col cache">
                <ColoredAttachMoneyIcon class="icon"/>
                <h3>{{ userMoney }} $</h3>
            </div>
        </div>
    </div>
</template>

<style scoped>
.profile-stats {
    grid-row: 2;
    grid-column: 1 / span 2;
}

.user-stats {
    display: grid;
    grid-template-columns: 25%;
}

.stats-col {
    grid-row: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.stats-col .icon {
    margin: auto;
    min-width: 48px;
    min-height: 48px;
}

.stats-col h3 {
    font-size: 16pt;
    text-align: center;
}

.stats-col.frens {
    grid-column: 1;
}

.stats-col.subs {
    grid-column: 2;
}

.stats-col.posts {
    grid-column: 3;
}

.stats-col.cache {
    grid-column: 4;
}
</style>