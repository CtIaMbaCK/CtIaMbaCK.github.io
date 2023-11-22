const listImage = document.querySelector('.list-image')
const imgs = document.getElementsByClassName('image')
const length  = imgs.length
let current = 0

//function chuyển slide
const  handleChangeSlide = () => {
    if (current == length -1) {
        current = 0
        let width = imgs[0].offsetWidth
        listImage.style.transform = `translateX(0px)`
        document.querySelector('.active').classList.remove('active')
        document.querySelector('.index-item-'+current).classList.add('active')
        
    } else {
        current ++ 
        let width = imgs[0].offsetWidth
        listImage.style.transform = `translateX(${width * -1 *current}px)`
        document.querySelector('.active').classList.remove('active')
        document.querySelector('.index-item-'+current).classList.add('active')
    }
}
let handleEventChangeSlide = setInterval(handleChangeSlide, 4000)

// chervon qua lại 
const btnLeft = document.querySelector(' .btn-left')
const btnRight = document.querySelector(' .btn-right')

btnRight.addEventListener('click', () =>{
    clearInterval(handleEventChangeSlide)
    handleChangeSlide()
    handleEventChangeSlide = setInterval(handleChangeSlide, 4000)
    
})

btnLeft.addEventListener('click', () =>{
    clearInterval(handleEventChangeSlide)
    if (current == 0) {
        current = length-1
        let width = imgs[0].offsetWidth
        listImage.style.transform = `translateX(${width * -1 *current}px)`
        document.querySelector('.active').classList.remove('active')
        document.querySelector('.index-item-'+current).classList.add('active')
    } else {
        current --
        let width = imgs[0].offsetWidth
        listImage.style.transform = `translateX(${width * -1 *current}px)`
        document.querySelector('.active').classList.remove('active')
        document.querySelector('.index-item-'+current).classList.add('active')
    }
    handleEventChangeSlide = setInterval(handleChangeSlide, 4000)

})
//
//little more

//