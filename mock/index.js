let Mock = require('mockjs')

//留言note
export const note = Mock.mock({
    "data|20": [{
        //创建时间
        "moment": new Date(),
        //id
        "id|+1": 1,
        //userid
        "userId|+1": 10,
        //内容
        "message|24-80": "@cword",
        //label
        "label|0-10": 0,
        //name
        "name": "@cname",
        //like
        "like|0-120": 0,
        //评论
        "comment|0-120": 0,
        //背景颜色
        "imgurl|0-7": 0,
        //是否撤销
        "revoke|0-20": 0,
        //是否举报
        "report|0-20": 0,
        //类型
        "type": 0,
    }]
})