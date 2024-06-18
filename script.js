class Text {
    constructor(obj){
       this.text = document.querySelector(obj.text); 
       this.fullText = this.text.innerHTML
       this.text.innerHTML = ""
       this.str()
       
    }
    str(x = 0){
        this.text.innerHTML += this.fullText[x]
        x++
        if(x < this.fullText.length){
            setTimeout(() => {
                this.str(x)
            }, 100);
        }
    }
}
const text = new Text({
    text: '.header__title'
})

class Scroll {
    constructor(obj) {
        this.section = document.querySelector(obj.section);
        window.addEventListener("scroll", () => {
            this.fadeRightAnim(this.section, 2)
            this.fadeLeftAnim(this.section, 2)
        })  
    }
    fadeRightAnim(section, coordinate){
        console.log(section.offsetHeight, section.offsetTop, window.scrollY )
        const fadeRight = section.querySelectorAll('.fade-right')
        fadeRight.forEach(fadeRight => {
            const speed = fadeRight.getAttribute('data-speed')
            fadeRight.style.transition = speed + "ms"
            if (window.scrollY >= (section.offsetTop - section.offsetHeight * coordinate)){
                fadeRight.classList.add('active')
            }else{
                fadeRight.classList.remove('active')
            }
        })
    } 
    
    fadeLeftAnim(section, coordinate){
        console.log(section.offsetHeight, section.offsetTop, window.scrollY )
        const fadeLeft = section.querySelectorAll('.fade-left')
        fadeLeft.forEach(fadeLeft => {
            const speed = fadeLeft.getAttribute('data-speed')
            fadeLeft.style.transition = speed + "ms"
            if (window.scrollY >= (section.offsetTop - section.offsetHeight * coordinate)){
                fadeLeft.classList.add('active')
            }else{
                fadeLeft.classList.remove('active')
            }
        })
    }
}
const scroll = new Scroll({
    section : '.team'
})
const scroll2 = new Scroll({
    section : '.oneImg'
})
const scroll3 = new Scroll({
    section : '.twoImg'
})

class Bubble {
    constructor(obj){
     this.bubble = document.querySelectorAll(obj.bubble);   
     
     this.bubble.forEach(btn => {
        btn.addEventListener('mousemove',(e) =>{
            this.bubbbleShow(e, btn)
        })
     })
    }
    bubbbleShow(e, btn){
        const X = e.pageX - btn.offsetLeft
        const Y = e.pageY - btn.offsetTop
        
        let span = btn.querySelector("span")
        
        span.style.left = `${X}px`
        span.style.top = `${Y}px`
    }
    
}
const bubble = new Bubble(
    {
        bubble: '.timer__btn'
    }
)

class Rotate3D{
    constructor(obj){
        this.card = document.querySelectorAll(obj.card);
        this.card.forEach(card => {
            card.addEventListener('mousemove', (e) => this.rotate(e, card))
            card.addEventListener('mouseout', (e) => this.rotateNone(card))
        })
    }
    rotate (e, item){
        const cardItem = item.querySelector('.card__item');
        const halfHeight = cardItem.offsetHeight / 2
        cardItem.style.transform = `rotateX(${(halfHeight - e.offsetY)/15}deg) rotateY(${-(halfHeight - e.offsetX)/15}deg)`
    }
    rotateNone(item){
        const cardItem = item.querySelector('.card__item');
        cardItem.style.transform = 'rotate(0)'
    }
}
const rotate3D = new Rotate3D({
    card: '.box'
})

class ParallaxMove {
    constructor(obj){
        this.moveE1 =document.querySelectorAll(obj.moveE1);
        window.addEventListener('mousemove' , (e) =>{
            this.moveItems(e)
        })   
    }
    moveItems(e){
        this.moveE1.forEach(item => {
            const speed = item.getAttribute('data-speed')
            const X = (window.innerWidth - e.pageX * speed) / 50
            const Y = (window.innerWidth - e.pageY * speed) / 100
            
            item.style.transform = `translate(${X}%, ${Y}%)`
        })
    }
}


