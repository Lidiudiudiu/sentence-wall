<template>
    <div class="my-photo-card">
        <img :src="require('../../static/' + props.photo.imgurl + '.jpg')" class="photo-img">
        <div class="photo-bg"></div>
        <div class="photo-like">
            <span class="icon-heart"></span>
            <span class="like-data">{{ props.photo.like }}</span>
        </div>
    </div>
</template>

<script setup>
// import { label, cardColor } from '@/utils/data'
import { defineProps } from 'vue'
const props = defineProps(["photo"])
</script>

<style lang="less" scoped>
.my-photo-card {
    position: relative;

    .photo-img {
        width: 100%;
    }

    .photo-bg {
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, .2);
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: @tr;
    }

    .photo-like {
        position: absolute;
        left: 8px;
        top: 8px;
        background: rgba(255, 255, 255, .8);
        border-radius: 20px;
        height: 28px;
        padding: 0 10px;
        display: flex;
        align-items: center;
        backdrop-filter: blur(10px);
        opacity: 0;
        cursor: pointer;
        transition: @tr;

        .icon-heart {
            color: @gray-3;
            padding-right: 4px;
        }

        .like-data {
            color: @gray-1;
        }
    }

    &:hover {
        .photo-bg {
            opacity: 1;
        }

        .photo-like {
            opacity: 1;
        }
    }
}
</style>