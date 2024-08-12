<script setup>
import { computed } from 'vue';
import { format } from 'date-fns';
import EditIcon from '../icons/EditIcon.vue';

const props = defineProps({
    user: {
        type: Object,
        required: true
    }
});
const prepareDate = (date) => {
    if (typeof date === 'string') {
        date = new Date(date);
    }
    return format(date, "d MMM yyyy");
};
const preparedDate = computed(() => prepareDate(props.user.birth_date));
</script>

<template>
    <div class="profile-info">
        <div class="cpmponent-header">
            <h2>{{ props.user.name }}</h2>
            <button class="edit-profile-info">
                <EditIcon class="icon"/>
                edit
            </button>
        </div>
        <div class="common-info">
            <h3 class="status">{{ props.user.status }}</h3>
            <h3 class="username-key">Username: </h3>
            <h3 class="username-value">{{ props.user.username }}</h3>
            <h3 class="birthday-key">Birthday: </h3>
            <h3 class="birthday-value">{{ preparedDate }}</h3>
        </div>
    </div>
</template>

<style scoped>
@import url('../../assets/profileview-styles.css');

.common-info .username-key,
.common-info .birthday-key {
    grid-column: 1;
}

.common-info .status {
    grid-column: 1 / span 2;
    color: #ccc;
    padding-bottom: 12px;
    grid-row: 1;
}

.common-info .username-value,
.common-info .birthday-value {
    grid-column: 2;
    color: #ccc;
    text-align: end;
}

.common-info .email-value,
.common-info .email-key {
    grid-row: 2;
}

.common-info .birthday-value,
.common-info .birthday-key {
    grid-row: 3;
}

a.text:active,
a.text {
    text-decoration:underline;
    color: #4056FF;
}

a.text:hover {
    color: #003399;
}
</style>