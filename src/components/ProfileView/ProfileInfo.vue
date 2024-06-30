<script setup>
import { computed } from 'vue';
import { format } from 'date-fns';

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
        <h2>{{ props.user.username }}</h2>
        <div class="common-info">
            <h3 class="email-key">Email: </h3>
            <h3 class="email-value">{{ props.user.email }}</h3>
            <h3 class="birthday-key">Birthday: </h3>
            <h3 class="birthday-value">{{ preparedDate }}</h3>
            <h3 class="telegram-key">Telegram: </h3>
            <h3 class="telegram-value"><a href="#" class="text">{{ "@" + props.user.telegram_username }}</a></h3>
        </div>
    </div>
</template>

<style scoped>
@import url('../../assets/profileview-styles.css');

.common-info .email-key,
.common-info .birthday-key,
.common-info .telegram-key {
    grid-column: 1;
}

.common-info .email-value,
.common-info .birthday-value,
.common-info .telegram-value {
    grid-column: 2;
    color: #ccc;
}

.common-info .email-value,
.common-info .email-key {
    grid-row: 1;
}

.common-info .birthday-value,
.common-info .birthday-key {
    grid-row: 2;
}
.common-info .telegram-value,
.common-info .telegram-key {
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