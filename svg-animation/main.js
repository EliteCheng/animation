import $ from 'jquery'

import './heart-animation.less'
import {HeartDom} from './heart/heart-dom'
import {generateRandom} from './util/random-util'

const $clickHeartDiv = $(`<svg t="1583074855474" class="click-heart-svg" 
       p-id="2287" viewBox="0 0 1159 1024" width="36">
    <path d="M590.223661 90.966914C378.65076-101.42474 27.357977 25.825628 27.357977 336.711735 
    27.357977 763.094159 590.223661 1007.54433 590.223661 1007.54433 
    590.223661 1007.54433 1153.089344 742.005008 1153.089344 336.711735 
    1153.123414 25.825628 840.022777-96.178004 590.223661 
    90.966914L590.223661 90.966914Z"
    p-id="2288" fill="rgb(255, 131, 131)">
    </path>
</svg>`)

$clickHeartDiv.click(() => {
    new HeartDom({
        //TODO:这里应该结合less中@base-rate变量设置
        right: generateRandom(20, 40),
        color: [[183,186,186], [0,186,186], [255, 131, 131]][generateRandom(0, 2).toFixed(0)]
    })
})
$('body').append($clickHeartDiv)











