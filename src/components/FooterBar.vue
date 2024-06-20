<template>
    <div class="foot-bar">
        <div>
            <fieldset class="copyright-fieldset">
                <legend class="copyright-legend">版权声明</legend>
                <span class="btn-info btn-xs">1</span> 本网站名称：<span class="site-name">只讲一丢丢</span><br />
                <span class="btn-info btn-xs">2</span> 本站永久网址：<a href="https://www.yidiudiu.site/" target="_blank"
                    class="site-url">https://www.yidiudiu.site/</a><br />
                <span class="btn-info btn-xs">3</span> 本网站的部分内容可能来源于转载，仅供大家阅读与赏析，如有侵权，请联系管理员进行删除处理。<br />
                <span class="btn-info btn-xs">4</span> 本站一切言论不代表本站立场，并不代表本站赞同其观点和对其真实性负责。<br />
                <span class="btn-info btn-xs">5</span> 本站一律禁止以任何方式发布或转载任何违法的相关信息，访客发现请向站长举报<br />
            </fieldset>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    }
}
</script>

<style lang="less" scoped>
.foot-bar {


    .copyright-fieldset {

        border: 1.5px dashed #008cff;
        padding: 10px;
        border-radius: 5px;
        line-height: 2em;
        font-weight: 700;
        color: var(--key-color);
        background-color: var(--body-bg-color);

        .copyright-legend {
            margin-bottom: -2px;
            width: 30%;
            text-align: center;
            background-color: #008cff;
            border-radius: 999px;
            background-image: linear-gradient(to right, #FFCC99, #FF99CC);
            border: 1.5px dashed #008cff;
        }

        .btn-info {
            &.btn-xs {
                font-size: 12px;
            }
        }

        .site-name {
            color: #3333ff;

            span {
                color: #09ace2;

                strong {
                    font-weight: bold;
                }
            }
        }

        .site-url {
            color: #09ace2;
        }
    }
}
</style>
