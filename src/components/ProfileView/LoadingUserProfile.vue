<template>
    <main>
        <div class="container profile">
            <div class="profile-info">
                <div class="underlined">
                    <h3 class="title"></h3>
                </div>
                <div class="common-info">
                    <span class="key"></span>
                    <span class="value"></span>
                    <span class="key"></span>
                    <span class="value"></span>
                    <span class="key"></span>
                    <span class="value"></span>
                </div>
            </div>
            <div class="profile-picture">
                <div class="profile-avatar"></div>
            </div>
            <div class="profile-stats">
                <div class="underlined">
                    <h3 class="title"></h3>
                </div>
                <div class="user-stats">
                    <div class="stats-col" v-for="i in 4" :key="i">
                        <span class="icon"></span>
                        <span class="key"></span>
                    </div>
                </div>
            </div>
            <div class="profile-bio">
                <div class="underlined">
                    <h3 class="title"></h3>
                </div>
                <p class="profile-bio-text"></p>
            </div>
        </div>
    </main>
</template>

<style scoped>
@import url('../../assets/profileview-styles.css');

.underlined {
    padding-bottom: 12px;
    border-bottom: 2px solid #222222;
    margin-bottom: 12px;
}

.title, .key, .value, .profile-bio-text{
    border-radius: 8px;
}

.title, .key, .value,
.profile-avatar, .profile-bio-text {
    background: linear-gradient(
        45deg, #282828, #222222, #282828);
    background-size: 300% 300%;
    animation: gradient 3s ease infinite;
	transform: translate3d(0, 0, 0);
}

.title {
    height: 1.5em;
    width: 12em;
}

.key {
    grid-column: 1;
    height: 1.3em;
    width: 6em;
    background-color: #222222;
    border-radius: 8px;
}

.value {
    grid-column: 2;
    height: 1.3em;
    width: 12em;
    background-color: #222222;
    border-radius: 8px;
}

.profile-bio-text {
    background-color: #222222;
    border-radius: 8px;
    height: 3.9em;
}


.stats-col .icon {
    border-radius: 12px;
    margin-bottom: 12px;
    background-color: #222222;
}

.stats-col .key {
    margin: auto;
    height: 1.3em;
    text-align: center;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
</style>