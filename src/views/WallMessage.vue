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
        <div class="card" v-show="id == 0">
            <NoteCard v-for="(e, index) in note" :key="index" :note="e"
                :class="{ cardselected: index === cardSelected }" @click="selectCard(index)">
            </NoteCard>
        </div>
        <div class="photo" v-show="id == 1">
            <PhotoCard :photo="e" class="photo-card" v-for="(e, index) in photo" :key="index"
                @click="selectCard(index)"></PhotoCard>
        </div>
        <div class="add" :style="{ bottom: addBottom + 'px' }" @click="addCard" v-show="!modal">
            <span class="icon-plus"></span>
        </div>
        <MyModal :title="title" @close="closeModal" :isModal="modal">
            <NewCard :id="id" @addClose="changeModal" v-if="cardSelected == -1"></NewCard>
            <CardDetail v-if="cardSelected != -1" :card="cards[cardSelected]"></CardDetail>
        </MyModal>
        <MyViewer :isView="view" :photos="photoArr" :nowNumber="cardSelected" @viewSwitch="viewSwitch"></MyViewer>
    </div>
</template>

<script>
import { wallType, label } from '@/utils/data';
import NoteCard from '@/components/NoteCard.vue'
import { note, photo } from "../../mock/index.js"
import MyModal from '@/components/MyModal.vue'
import NewCard from '@/components/NewCard.vue'
import CardDetail from '@/components/CardDetail.vue'
import PhotoCard from '@/components/PhotoCard.vue'
import MyViewer from '@/components/MyViewer.vue'
export default {
    data() {
        return {
            wallType,
            label,
            nlabel: -1,
            note: note.data,
            photo: photo.data,
            photoArr: [],
            addBottom: 30,
            title: '写留言',
            modal: false,
            cardSelected: -1,
            view: false
        }
    },
    components: {
        NoteCard,
        MyModal,
        NewCard,
        CardDetail,
        PhotoCard,
        MyViewer
    },
    computed: {
        id() {
            return this.$route.query.id
        },
        cards() {
            let a = '';
            if (this.$route.query.id == 0) {
                a = note.data;
            } else if (this.$route.query.id == 1) {
                a = photo.data;
            }
            return a;
        }
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
            this.modal = false;
            this.cardSelected = -1;
            if (this.id == 1) {
                this.view = false
            }
        },

        //卡片的样式
        selectCard(e) {
            this.title = '';
            if (e != this.cardSelected) {
                this.cardSelected = e;
                this.modal = true;
                if (this.id == 1) {
                    this.view = true;
                }
            } else {
                this.cardSelected = -1
                this.modal = false;
                if (this.id == 1) {
                    this.view = false
                }
            }
        },
        addCard() {
            this.title = '写留言';
            this.modal = true;
        },
        getPhoto() {
            for (let i = 0; i < this.photo.length; i++) {
                this.photoArr.push(this.photo[i].imgurl)
            }
            console.log(this.photoArr)
        },
        viewSwitch(e) {
            if (e == 0) {
                if (this.cardSelected == 0) {
                    this.cardSelected = this.photoArr.length
                }
                this.cardSelected--;
            }
            else {
                if (this.cardSelected == this.photoArr.length - 1) {
                    this.cardSelected = -1;
                }
                this.cardSelected++;
            }
        }
    },
    watch: {
        id() {
            this.modal = false;
            this.view = false;
            this.nlabel = -1;
            this.cardSelected = -1;
        }
    },
    mounted() {
        window.addEventListener('scroll', this.scrollBottom)
        this.getPhoto();
    },

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

    .photo {
        padding-top: 30px;
        width: 88%;
        margin: 0 auto;
        columns: 6;
        column-gap: 4px
    }

    .photo-card {
        margin-bottom: 4px;
        break-inside: avoid;
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