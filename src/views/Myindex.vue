<template>
    <div class="wall-index">
        <TopBar></TopBar>
        <video src="@/assets/images/bg.mp4" playinline autoplay="autoplay" muted="muted" loop="loop"
            class="bg-video"></video>
        <router-view></router-view>
        <FooterBar></FooterBar>
    </div>
</template>

<script>
import TopBar from '@/components/TopBar.vue';
import FooterBar from '@/components/FooterBar.vue'
export default {
    name: "MyIndex",
    data() {
        return {
            aaa: ''
        }
    },
    components: {
        TopBar,
        FooterBar
    },
    computed: {

    },
    created() {
        // this.getUser()
    },
    methods: {
        // getUser() {
        //     this.axios.post("http://182.61.20.123:3001/singin/match", {
        //         data: 'aaa',
        //         pwd: 'bbb',
        //     }).then((res) => {
        //         console.log(res)
        //     })
        // }
    }
}
</script>

<style lang="less" scoped>
.wall-index {
    position: relative;
    overflow: hidden;

    .bg-video {
        height: 100%;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
        object-fit: cover;
        /* 确保视频覆盖整个容器 */
        /* 调整亮度，50% 为一半亮度 */

    }

    /* 可选：设置背景图片作为后备 */
    &::before {
        content: "";
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url('@/assets/images/bg-fallback.png') no-repeat center center;
        background-size: cover;
        z-index: -2;
    }
}
</style>
