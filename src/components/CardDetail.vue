<template>
    <div class="card-detail">
        <div class="top-bt">
            <p class="revoke">联系墙主撕掉该标签</p>
            <p class="report">举报</p>
        </div>
        <NoteCard :note="props.card" width="100%"></NoteCard>
        <div class="form">
            <textarea class="message" placeholder="请输入..."></textarea>
            <div class="bt">
                <input type="text" class="name" placeholder="签名">
                <MyButton>确定</MyButton>
            </div>
            <div class="title">
                评论{{ card.comment }}
            </div>
            <div class="comment">
                <div class="comment-li" v-for="(e, index) in comments" :key="index">
                    <div class="user-head" :style="{ backgroundImage: portrait[e.imgurl] }"></div>
                    <div class="comment-main">
                        <div class="main-top">
                            <p class="name">{{ e.name }}</p>
                            <p class="time">{{ dateOne(e.moment) }} </p>
                        </div>
                        <div class="main-main">
                            {{ e.message }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import NoteCard from './NoteCard.vue';
import MyButton from './MyButton.vue';
import { comment } from '../../mock/index';
import { portrait } from '@/utils/data';
import { dateOne } from '@/utils/meth'
import { defineProps } from 'vue';
const props = defineProps({
    card: {
        default: {}
    }
})

const comments = comment.data

console.log('Comment Data:', comment);

</script>

<style lang="less" scoped>
.card-detail {
    position: relative;
    padding: 0 20px;

    .top-bt {

        position: fixed;
        top: 0;
        left: 0;
        padding: 20px;
        display: flex;

        .revoke {
            color: @primary-color;
            cursor: pointer;
            padding-right: 30px;
            font-size: 16px;
        }

        .report {
            font-size: 16px;
            color: @warning-color;
            cursor: pointer;
        }
    }

    .form {
        .message {
            color: #fff;
            background: none;
            border: 1px solid rgba(148, 148, 148, 1);
            resize: none;
            height: 56px;
            width: 100%;
            padding: 8px;
            box-sizing: border-box;
            margin-top: 12px;


        }

        .bt {
            display: flex;
            padding-top: 8px;
            justify-content: space-between;

            .name {
                width: 200px;
                box-sizing: border-box;
                padding: 8px;
                background: none;
                border: 1px solid rgba(148, 148, 148, 1);
                line-height: 20px;
                font-family: qianming;
                font-weight: 600;
            }
        }

        .title {
            font-weight: 600;
            padding-top: 30px;
            padding-bottom: 20px;
        }

        .comment-li {
            display: flex;
            padding-bottom: 30px;

            .user-head {
                flex: none;
                width: 28px;
                height: 28px;
                border-radius: 20px;
                overflow: hidden;
                // background-image: linear-gradient(180deg, rgba(235, 65, 65, 0.5) 0%, rgba(121, 123, 34, 0.6) 100%);
            }

            .comment-main {
                padding-left: 8px;
            }

            .main-top {
                display: flex;
                align-items: center;

                .name {
                    font-weight: 600;
                }

                .time {
                    font-size: 12px;
                    padding-left: 4px;
                    color: @gray-3;
                }
            }

            .main-main {
                padding-top: 4px;
            }

        }













    }

}
</style>