<script setup>
import { defineProps, defineEmits } from 'vue'
const props = defineProps({
    title: {
        default: '标题'
    },
    isModal: {
        default: false
    }
})

const emit = defineEmits(['close'])

function closeModal() {
    emit('close')
}

</script>

<template>
    <Transition name="modal">
        <div class="my-modal" v-if="isModal">
            <div class="my-modal-head">
                <p class="modal-name">{{ props.title }}</p>
                <span class="icon-close" @click="closeModal"></span>
            </div>
            <div class="my-modal-main">
                <slot></slot>
            </div>
        </div>
    </Transition>
</template>

<style lang="less" scoped>
.modal {
    &-enter {
        &-from {
            transform: translateX(360px)
        }

        &-active {
            transition: all .5s ease-out;
        }

        &-to {
            transform: translateX(0px);
        }
    }

    &-leave {
        &-from {
            transform: translateX(0px)
        }

        &-active {
            transition: all .5s ease-in;
        }

        &-to {
            transform: translateX(360px);
        }
    }
}

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

    .my-modal-head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        box-sizing: border-box;

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

    .my-modal-main {
        border: 1px solid #eee;
        height: 100%;
        overflow-y: auto;
        padding-bottom: 116px;
        box-sizing: border-box;
    }


    // 滚动条
    ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }

    // 滚动条头
    ::-webkit-scrollbar-thumb {
        border-radius: 1em;
        background-color: rgba(0, 21, 41, 0.2);
    }

    // 滚动条轨道
    ::-webkit-scrollbar-track {
        border-radius: 1em;
        background-color: rgba(181, 164, 164, 0.2);
    }

}
</style>