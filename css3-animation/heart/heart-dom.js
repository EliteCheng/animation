import $ from 'jquery'

const domStr = `<div class="heart-wrapper">
    <div class="heart-left"></div>
    <div class="heart-right"></div>
</div>`

export class HeartDom {
    constructor({right, color}) {
        this.$dom = $(domStr)
        this.$dom.css({right})
        this.$dom.find('.heart-left').css({
            background: color
        })
        this.$dom.find('.heart-right').css({
            background: color
        })
        $('body').append(this.$dom)
        window.setTimeout(() => {
            this.$dom.remove()
        }, 3600)
    }
}