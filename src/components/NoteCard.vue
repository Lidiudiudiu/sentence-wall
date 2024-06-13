<template>
    <div class="my-note-card" :style="{ width: width, background: cardColor[card.imgurl] }">
        <div class="top">
            <p class="time">{{ dateOne(card.moment) }}</p>
            <p class="label">{{ label[card.type][card.label] }}</p>
        </div>
        <div class="message">
            {{ card.message }}
        </div>
        <div class="footer">
            <div class="foot-left">
                <div class="icon">
                    <span class="icon-heart"></span>
                    <span class="value">{{ card.like }}</span>
                </div>
                <div class="icon">
                    <span class="icon-chat-bubble-dots"></span>
                    <span class="value">{{ card.comment }}</span>
                </div>
            </div>
            <div class="name">{{ card.name }}</div>
        </div>
    </div>
</template>

<script>
import { label, cardColor } from '@/utils/data'
import { dateOne } from '@/utils/meth'
export default {
    data() {
        return {
            label,
            dateOne,
            cardColor
        }
    },
    props: {
        width: {
            default: '300px'
        },
        note: {
            default: {}
        }
    },
    computed: {
        card() {
            return this.note;
        }
    },
    created() {

    }
}
</script>

<style lang="less" scoped>
@font-face {
    font-family: zihunbaige;
    src: url("@/assets/fonts/font-bag/zihunbaige.ttf");
}

@font-face {
    font-family: qianming;
    src: url("@/assets/fonts/font-bag/qingming.ttf");
}

.my-note-card {
    height: 240px;
    background-color: rgba(252, 175, 162, .3);
    padding: 10px 20px 16px;
    box-sizing: border-box;
    position: relative;
    cursor: pointer;
    // opacity: 0.95;

    .top {
        display: flex;
        justify-content: space-between;
        padding-bottom: 16px;

        p {
            font-size: 13px;
            color: @gray-3;
        }
    }

    .message {
        text-shadow: 1px rgba(0, 0, 0, 0.5);
        height: 140px;
        font-family: qianming;
        font-size: 17px;
        line-height: 1.5em;
        color: #333;
    }

    .footer {
        display: flex;
        justify-content: space-between;
        position: absolute;
        bottom: 16px;
        left: 0;
        padding: 0 20px;
        box-sizing: border-box;
        width: 100%;

        .foot-left {
            display: flex;

            .value {
                font-size: 14px;

                color: @gray-3;
                line-height: 16px;
                padding-left: 4px;
            }

            .icon-heart,
            .icon-chat-bubble-dots {
                font-size: 16px;
                color: @gray-2;
            }

            .icon-heart {
                cursor: pointer;
                transition: @tr;

                &:hover {
                    color: rgba(255, 0, 0, 0.46);
                }
            }

            .icon {
                padding-right: 8px;
                display: flex;
                align-items: center;
            }
        }

        .name {
            font-family: qianming;
            font-size: 16px;
            color: rgba(2, 11, 14, 0.752);
            font-weight: 600;
        }
    }
}
</style>