<template>
    <div class="wall-message">
        <p class="title">{{ wallType[id].name }}</p>
        <p class="slogan">{{ wallType[id].slogan }}</p>
        <div class="label">
            <p class="label-list" :class="{ lbseleted: nlabel == -1 }" @click="selectNode(-1)">全部</p>
            <p class=" label-list" :class="{ lbseleted: nlabel == index }" @click="selectNode(index)" v-for=" (e, index) in
                label[id]" :key="index">{{ e
                }}</p>
        </div>
        <div class="card">
            <NoteCard v-for="(e, index) in note" :key="index" :note="e"
                :class="{ cardselected: index === cardSelected }" @click="selectCard(index)">
            </NoteCard>
        </div>
        <div class="add" :style="{ bottom: addBottom + 'px' }" @click="addCard" v-show="!modal">
            <span class="icon-plus"></span>
        </div>
        <MyModal :title="title" @close="closeModal" :isModal="modal">
            <NewCard :id="id" @addClose="changeModal" v-if="cardSelected == -1"></NewCard>
            <CardDetail v-if="cardSelected != -1" :card="note[cardSelected]"></CardDetail>
        </MyModal>
    </div>
</template>

<script>
import { wallType, label } from '@/utils/data';
import NoteCard from '@/components/NoteCard.vue'
import { note } from "../../mock/index.js"
import MyModal from '@/components/MyModal.vue'
import NewCard from '@/components/NewCard.vue'
import CardDetail from '@/components/CardDetail.vue'
export default {
    data() {
        return {
            wallType,
            label,
            id: 0, //留言墙与照片墙的切换
            nlabel: -1,
            note: note.data,
            addBottom: 30,
            title: '写留言',
            modal: false,
            cardSelected: -1
        }
    },
    components: {
        NoteCard,
        MyModal,
        NewCard,
        CardDetail
    },
    methods: {
        selectNode(e) {
            this.nlabel = e;
        },

        //监听页面滚动条的变化
        scrollBottom() {
            //距离顶部高度
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            //屏幕高度
            let clientHeight = document.documentElement.clientHeight;
            //内容高度
            let scrollHeight = document.documentElement.scrollHeight;
            if (scrollTop + clientHeight + 280 >= scrollHeight) {
                this.addBottom = scrollTop + clientHeight + 250 - scrollHeight
            } else {
                this.addBottom = 30
            }
            console.log('生效了')
        },
        //弹窗的打开与关闭
        changeModal() {
            this.modal = !this.modal;
        },

        closeModal() {
            this.changeModal();
            this.cardSelected = -1;
        },

        //卡片的样式
        selectCard(e) {
            this.title = '';
            if (e != this.cardSelected) {
                this.cardSelected = e;
                this.modal = true;
            } else {
                this.cardSelected = -1
                this.modal = false;
            }
        },
        addCard() {
            this.title = '写留言';
            this.changeModal();
        }
    },
    mounted() {
        window.addEventListener('scroll', this.scrollBottom)
    }
}
</script>

<style lang="less" scoped>
.wall-message {
    padding-top: 52px;

    .title {
        padding-top: 48px;
        padding-bottom: 8px;
        font-size: 56px;
        color: @gray-1;
        text-align: center;
        font-weight: 600;
    }

    .slogan {
        color: @gray-2;
        text-align: center;
    }

    .label {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 40px;

        .label-list {
            height: 30px;
            display: flex;
            align-items: center;
            line-height: 28px;
            padding: 0 14px;
            height: 28px;
            margin: 4px;
            color: @gray-2;
            box-sizing: border-box;
            cursor: pointer;
        }

        .lbseleted {
            color: @gray-1;
            font-weight: 600;
            border: 1px solid rgba(32, 32, 32, 1);
            border-radius: 16px;
            cursor: pointer;
        }
    }

    .card {
        display: grid;
        grid-template-columns: repeat(auto-fill, 300px);
        gap: 20px 30px;
        justify-content: center;
        padding-top: 30px;
        padding-bottom: 20px;


        .cardselected {
            border: 1px solid @primary-color;
        }


    }

    .add {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 56px;
        height: 56px;
        background-color: @gray-1;
        box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.08);
        border-radius: 28px;
        position: fixed;
        right: 30px;

        transition: all 1s;

        .icon-plus {
            color: white;
            font-size: 24px;
        }
    }

}
</style>