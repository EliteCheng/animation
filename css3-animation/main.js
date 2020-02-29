import $ from 'jquery'

import './heart-animation.less'
import {HeartDom} from './heart/heart-dom'
import {generateRandom} from './util/random-util'

const $clickHeartDiv = $(`<div class="click-heart-div">
    <div class="heart-left"></div>
    <div class="heart-right"></div>
</div>`)

$clickHeartDiv.click(() => {
    new HeartDom({
        //TODO:这里应该结合less中@base-rate变量设置
        right: generateRandom(20, 40),
        color: ['rgb(183,186,186)', 'rgb(0,186,186)', ''][generateRandom(0, 2).toFixed(0)]
    })
})
$('body').append($clickHeartDiv)











