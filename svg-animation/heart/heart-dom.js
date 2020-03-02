import $ from 'jquery'

const domStr = `<svg t="1583074855474" class="heart-svg" 
      viewBox="0 0 1159 1024" height="260" width="36">
    <path d="M590.223661 90.966914
    C378.65076-101.42474 27.357977 25.825628 27.357977 336.711735 
    27.357977 763.094159 590.223661 1007.54433 590.223661 1007.54433 
    590.223661 1007.54433 1153.089344 742.005008 1153.089344 336.711735 
    1153.123414 25.825628 840.022777-96.178004 590.223661 
    90.966914L590.223661 90.966914Z">
        <animateMotion path="M 0 3600 V 0 -3000 " dur="3s" repeatCount="1" />
        <animate attributeName="fill" values=""
                 dur="3s" repeatCount="1" />       
    </path>
</svg>`

export class HeartDom {
    constructor({right, color}) {
        const [r, g, b] = color
        this.$dom = $(domStr)
        this.$dom.css({right})
        this.$dom.find('path').attr('fill', `rgb(${r},${g},${b})`)
        this.$dom.find('animate').attr('values',
            `rgba(${r},${g},${b},1);rgba(${r},${g},${b},0)`
        )
        $('body').append(this.$dom)
        window.setTimeout(() => {
            this.$dom.remove()
        }, 2900)
    }
}