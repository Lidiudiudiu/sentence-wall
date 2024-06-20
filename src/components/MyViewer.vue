<template>
    <Transition name="view">
        <div class="my-viewer" v-if="props.isView">
            <div class="bg"></div>
            <div class="viewer-photo">
                <img :src="require('../../static/' + photos[props.nowNumber] + '.jpg')" alt="">
            </div>
            <div class="switch sw-left" @click="changeNumber(0)">
                <span class="icon-cheveron-left"></span>
            </div>
            <div class="switch sw-right" @click="changeNumber(1)">
                <span class="icon-cheveron-right"></span>
            </div>
        </div>
    </Transition>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
const props = defineProps({
    photos: {
        default: []
    },
    nowNumber: {
        type: Number,
        default: 0
    },
    isView: {
        disfault: false
    }
})
const emit = defineEmits(['viewSwitch'])
function changeNumber(e) {
    emit('viewSwitch', e)
}
</script>



<style lang="less" scoped>
.view {
    &-enter {
        &-from {
            opacity: 0;
        }

        &-active {
            transition: all .5s ease-out;
        }

        &-to {
            opacity: 1;
        }
    }

    &-leave {
        &-from {
            opacity: 1;
        }

        &-active {
            transition: all .5s ease-in;
        }

        &-to {
            opacity: 0;
        }
    }
}

.my-viewer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    .bg {
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(255, 255, 255, .9);
        backdrop-filter: blur(20px);
        height: 100%;
        width: 100%;
    }

    .viewer-photo {
        position: absolute;
        padding: 82px 454px 0 96px;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        overflow-y: auto;
        display: flex;
        justify-content: center;

        img {
            width: 100%;
        }
    }

    @media (max-width: 768px) {

        /* 针对小屏幕的样式 */
        .viewer-photo {
            padding: 82px 20px 0 20px;
            /* 减少 padding 以适应小屏幕 */
        }
    }

    .switch {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        background: @gray-3;
        color: @gray-10;
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0.5;
        transition: @tr;
        cursor: pointer;

        &:hover {
            opacity: 1;
        }
    }

    .sw-left {
        left: 20px;
    }

    .sw-right {
        right: 380px;
    }
}
</style>