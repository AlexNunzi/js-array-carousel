const imgArray = [
    'img/01.webp', 
    'img/02.webp', 
    'img/03.webp', 
    'img/04.webp', 
    'img/05.webp'
];
const imgListDom = document.querySelector('.imgList');




let sliderImg = '';

for (let i = 0; i < imgArray.length; i++) {
    const newImgWrapper = `<div class="imgWrapper">
                                <img class="img" src="${imgArray[i]}" alt="">
                                <div id="up" class="arrow">
                                    <i class="fa-solid fa-arrow-up"></i>
                                </div>
                                <div id="down" class="arrow">
                                    <i class="fa-solid fa-arrow-down"></i>
                                </div>
                            </div>`;

    sliderImg += newImgWrapper;       
}

imgListDom.innerHTML = sliderImg;


const imgWrappersDom = document.getElementsByClassName('imgWrapper');
console.log(imgWrappersDom);

imgWrappersDom[1].classList.add('show');
