<script setup>
import ColoredGroupIcon from '../icons/ColoredGroupIcon.vue';
import ColoredThubUpIcon from '../icons/ColoredThumbUpIcon.vue';
import ColoredChatIcon from '../icons/ColoredChatIcon.vue';
import ColoredAttachMoneyIcon from '../icons/ColoredAttachMoneyIcon.vue';

const props = defineProps({
    user: {
        type: Object,
        required: true,
    }
})
</script>

<template>
    <div class="profile-stats">
        <h2>Stats</h2>
        <div class="user-stats">
            <div class="stats-col frens">
                <ColoredGroupIcon class="icon"/>
                <h3>{{ props.user.stats.friends.length }} Friends</h3>
            </div>
            <div class="stats-col subs">
                <ColoredThubUpIcon class="icon"/>
                <h3>{{ props.user.stats.subs.length }} Subs</h3>
            </div>
            <div class="stats-col posts">
                <ColoredChatIcon class="icon"/>
                <h3>{{ props.user.stats.posts.length }} Posts</h3>
            </div>
            <div class="stats-col cache">
                <ColoredAttachMoneyIcon class="icon"/>
                <h3>{{ props.user.stats.balance }} $</h3>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url('../../assets/profileview-styles.css');

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