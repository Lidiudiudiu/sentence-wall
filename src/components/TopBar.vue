<template>
    <div class="top-bar">
        <div class="logo">
            <img src="@/assets/images/logo3.png" alt="" class="logo-img">
            <p class="logo-name"></p>
        </div>
        <div class="menu">
            <MyButton :nom="'cprimary'" class="menu-message">留言墙</MyButton>
            <MyButton :nom="'csecondary'" class="menu-photo">照片墙</MyButton>
        </div>
        <div class="user">
            <div class="user-head"></div>
        </div>
    </div>
</template>

<script>
import MyButton from '@/components/MyButton.vue'
export default {
    data() {
        return {

        }
    },
    components: {
        MyButton
    }
}
</script>

<style lang="less" scoped>
.top-bar {
    width: 100%;
    height: 52px;
    background-color: rgba(255, 255, 255, 0.811);
    box-shadow: 0px 0px 4px 8px rgba(0, 0, 0, .1);
    backdrop-filter: blur(10px);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    box-sizing: border-box;

    .logo {
        width: 300px;
        height: 100%;

        .logo-img {
            height: 100%;
        }
    }

    .menu {
        display: flex;

        .menu-message {
            margin-right: 25px;
        }
    }

    .user {
        width: 300px;

        .user-head {
            float: right;
            border-radius: 50%;
            height: 36px;
            width: 36px;
            background-image: linear-gradient(180deg, #78e7ff 2%, #fff);
        }
    }

}
</style>