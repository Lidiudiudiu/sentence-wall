<template>
    <div class="new-card">
        <div class="colors">
            <p class="color-li" v-for="(e, index) in cardColor" :key="index" :style="{ background: e }"
                :class="{ colorSelected: index === colorSelected }" @click="changeColor(index)"> </p>
        </div>
        <div class="card-main" :style="{ background: cardColor[colorSelected] }">
            <textarea placeholder="留言..." class="message" v-model="message"></textarea>
            <input type="text" placeholder="签名" class="name" v-model="name" />
        </div>
        <div class="labels">
            <p class="title">
                选择标签
            </p>
            <div class="label">
                <p v-for="(e, index) in label[props.id]" :key="index" class="label-li"
                    :class="{ labelselected: index === labelSelected }" @click="changeLabel(index)">{{ e }}</p>
            </div>
        </div>
        <p class="title">免责声明</p>
        <p class="mzsm">
            请不要以任何方式发布或转载任何违法的相关信息，上传，下载，复制转发如下内容：<br>
            1.违反国家法律法规的信息、暴力、色情、赌博、毒品等非法内容。<br>
            2.未经授权的版权作品、商标、专利、商业秘密等侵权内容<br>
            3.伪造或篡改的新闻、数据和声明等虚假信息<br>
            4.对他人的恶意中伤、种族歧视、性别歧视、宗教歧视等歧视内容<br>
            5.他人的电话号码、地址、身份证号码、银行账号等隐私内容<br>
            6.涉及国家安全、颠覆国家政权、分裂国家、破坏国家统一的敏感政治内容。<br><br>
        </p>
        <p class="other-mzsm">
            用户应对其在本平台发布的所有内容承担全部法律责任，本平台不对用户发布内容的合法性、准确性、完整性负责。<br>
            对于发布上述禁止内容的用户，本平台将保留追究其法律责任的权利，并将根据需要向相关执法机构提供必要的信息和协助。<br>
        </p>
        <div class="footbt">
            <MyButton size="max" nom="secondary" @click="closeModal(0)">丢弃</MyButton>
            <MyButton size="max" class="submit">确定</MyButton>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import { cardColor, label } from '@/utils/data';
import { ref } from 'vue'
import MyButton from './MyButton.vue';
const colorSelected = ref(0) //当前选择颜色
const labelSelected = ref(0) //当前选择标签
const message = ref('') //留言信息
const name = ref('') //签名
const props = defineProps({
    id: {
        default: 0
    }
})
const emit = defineEmits(['addClose'])
function changeColor(e) {
    colorSelected.value = e;
}

function changeLabel(e) {
    labelSelected.value = e;
}

function closeModal(data) {
    emit('addClose', data)
}
</script>

<style lang="less" scoped>
.new-card {
    padding: 0 20px 120px;
    position: relative;

    .colors {
        padding-bottom: 16px;
        display: flex;
        align-items: center;

        .color-li {
            width: 24px;
            height: 24px;
            margin-right: 14px;
            float: left;
        }

        .colorSelected {
            border: 2px solid rgba(11, 74, 161, 0.513)
        }
    }

    .card-main {

        height: 240px;
        width: 100%;
        padding: 12px;
        box-sizing: border-box;
        transition: @tr;

        .message {
            font-size: 18px;
            color: #fff;
            background: none;
            border: none;
            resize: none;
            height: 172px;
            width: 100%;
            padding: 8px;
            box-sizing: border-box;

            &::placeholder {
                color: #eee;
            }
        }

        .name {
            width: 100%;
            box-sizing: border-box;
            padding: 8px;
            background: none;
            border: #fff 1px solid;
            line-height: 20px;
            font-family: qianming;
            font-size: 19px;
            font-weight: 600;

            &::placeholder {
                color: #eee;
            }
        }
    }

    .title {
        color: @gray-1;
        font-weight: 600;
        padding-top: 30px;
    }


    .label {
        display: flex;
        flex-wrap: wrap;
        width: 320px;

        .label-li {
            padding: 2px 8px;
            border-radius: 20px;
            margin: 16px 4px 0 0;
            cursor: pointer;
        }

        .labelselected {
            background: #0c96c4;
            font-weight: 700;
            color: @gray-1;
            line-height: 1.2em;
        }

    }

    .mzsm {
        padding-top: 10px;
        font-size: 12px;
        color: @gray-3;
    }

    .other-mzsm {
        font-size: 14px;
        color: @gray-3;
        font-family: zihunbaige;
    }

    .footbt {
        display: flex;
        position: fixed;
        padding: 20px;
        box-sizing: border-box;
        bottom: 52px;
        left: 0;
        background: rgba(255, 255, 255, .6);
        width: 100%;
        backdrop-filter: blur(10px);

        .submit {
            margin-left: 20px;
            width: 200px;
        }
    }
}
</style>