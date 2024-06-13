<script setup>
import { defineProps } from 'vue'
const props = defineProps({
    title: {
        default: '标题'
    }
})
</script>

<template>
    <div class="my-modal">
        <div class="my-modal-head">
            <p class="modal-name">{{ props.title }}</p>
            <span class="icon-close"></span>
        </div>
    </div>
</template>

<style lang="less" scoped>
.my-modal {
    box-sizing: border-box;
    width: 360px;
    height: 100%;
    position: fixed;
    right: 0;
    top: 52px;
    z-index: 1000;
    background-color: rgba(255, 255, 255, .8);
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.08);
    backdrop-filter: blur(20px);
    padding: 20px;

    .my-modal-head {
        display: flex;
        justify-content: space-between;

        .modal-name {
            font-size: 16px;
            color: @gray-1;
            font-weight: 600;
        }

        .icon-close {
            color: @gray-2;
            cursor: pointer;
            padding-left: 8px;
        }
    }
}
</style>