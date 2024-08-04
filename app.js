const header = document.querySelector('header')
const navNormal = document.querySelector('.nav-normal')
const lookbook = document.getElementById('lookbook')
const banners = document.getElementById('banners')
const bannerFirst = document.querySelector('.banner.first')
const bannerLast = document.querySelector('.banner.last')
const imgContainer = document.getElementById('img-container')
const showControlImg = document.getElementById('show-control-img')
const creditsPageBtns = document.querySelector('.credits-page-btns')
const creditsContainer = document.querySelector('.credits-container')
const modal = document.getElementById('modal')
const modalImg = document.querySelector('.modal-img')
const resizeNav = document.querySelector('.resize-nav')

function moveToPage(e){
    if(e.target.className === 'page-btn'){
        if(e.target.innerText === 'RUNWAY'){
            header.scrollIntoView({behavior: "smooth"})
        }else if(e.target.innerText === 'LOOKBOOK'){
            lookbook.scrollIntoView({behavior: "smooth"})
        }else if(e.target.innerText === 'SHOP'){
            banners.scrollIntoView({behavior: "smooth"})
        }else if(e.target.innerText === 'LAST SEASON'){
            bannerLast.scrollIntoView({behavior: "smooth"})
        }
    }
}

function addImg(n, i){
    while(i<n){
        const img = document.createElement('div')
        img.className = 'img'
        img.innerText = i
        img.style.backgroundImage = `url(imgs/model-${i}.jpg)`
        imgContainer.appendChild(img)
        i++
    }
}

function controlImg(e){
    if(e.target.innerText === 'SEE ALL THE LOOKS'){
        imgContainer.style.height = 1980 + 'vh'
        addImg(66, 7)
        showControlImg.innerText = 'CLOSE'
    }else if(e.target.innerText === 'CLOSE'){
        imgContainer.style.height = 180 + 'vh'
        imgContainer.innerHTML = ''
        addImg(7, 1)
        showControlImg.innerText = 'SEE ALL THE LOOKS'
    }
}

function controlCredit(e){
    if(e.target.classList.contains('credits-page-btn')){
        if(e.target.innerText === '<' && creditsContainer.offsetLeft !== 0){
            creditsContainer.style.left = 0 + 'vw'
            creditsPageBtns.childNodes[2].textContent = '1 / 2'
        }else if(e.target.innerText === '>' && creditsContainer.offsetLeft === 0){
            creditsContainer.style.left = -30 + 'vw'
            creditsPageBtns.childNodes[2].textContent = '2 / 2'
        }
    }
}

let imgIndex

function modalOpen(e){
    if(e.target.className === 'img'){
        imgIndex = e.target.innerText
        modal.style.display = 'flex'
        document.body.style.overflow = 'hidden'
        modalImg.style.backgroundImage = `url(imgs/model-${imgIndex}.jpg)`
    }
}

function controlModal(e){
    if(e.target.className === 'modal-btn close'){
        modal.style.display = 'none'
        document.body.style.overflow = 'visible'
        modalImg.style.backgroundImage = ``
    }else if(e.target.className === 'modal-btn left' && imgIndex > 1){
        modalImg.style.backgroundImage = `url(imgs/model-${parseInt(imgIndex)-1}.jpg)`
        imgIndex--
    }else if(e.target.className === 'modal-btn right' && imgIndex < 65){
        modalImg.style.backgroundImage = `url(imgs/model-${parseInt(imgIndex)+1}.jpg)`
        imgIndex++
    }

}

function resize(){
    if(document.documentElement.offsetWidth<900){
        resizeNav.style.display = 'block'
        navNormal.style.display = 'none'
    }else{
        resizeNav.style.display = 'none'
        navNormal.style.display = 'block'
    }
    if(document.documentElement.offsetWidth<600){
        bannerFirst.style.backgroundImage = 'url(/240308/imgs/annie-spratt-VviNSpJuGj0-unsplash.jpg)'
        bannerLast.style.backgroundImage = 'url(/240308/imgs/kilyan-sockalingum-FXmn2BZn2A4-unsplash.jpg)'
    }else{
        bannerFirst.style.backgroundImage = ''
        bannerLast.style.backgroundImage = ''

    }
}

addImg(7, 1)
navNormal.addEventListener('click', moveToPage)
showControlImg.addEventListener('click', controlImg)
creditsPageBtns.addEventListener('click', controlCredit)
imgContainer.addEventListener('click', modalOpen)
modal.addEventListener('click', controlModal)
window.addEventListener('resize', resize)