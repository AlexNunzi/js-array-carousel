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
                            </div>`;

    sliderImg += newImgWrapper;       
}

imgListDom.innerHTML = sliderImg;


const imgWrappersDom = document.getElementsByClassName('imgWrapper');
console.log(imgWrappersDom);

let selectedImg = 0;

imgWrappersDom[selectedImg].classList.add('show');


const upDom = document.querySelector('#up');
const downDom = document.querySelector('#down');

downDom.addEventListener('click', function(){
    if (selectedImg < imgWrappersDom.length - 1) {
        imgWrappersDom[selectedImg].classList.remove('show');
        selectedImg++;
        imgWrappersDom[selectedImg].classList.add('show');

        upDom.classList.remove('hide');

    } else if (selectedImg == imgWrappersDom.length -1){
        imgWrappersDom[selectedImg].classList.remove('show');
        selectedImg = 0;
        imgWrappersDom[selectedImg].classList.add('show');
    }
});


upDom.addEventListener('click', function(){
    if (selectedImg > 0) {
        imgWrappersDom[selectedImg].classList.remove('show');
        selectedImg--;
        imgWrappersDom[selectedImg].classList.add('show');

        downDom.classList.remove('hide');

    } else if (selectedImg == 0) {
        imgWrappersDom[selectedImg].classList.remove('show');
        selectedImg = (imgWrappersDom.length - 1);
        imgWrappersDom[selectedImg].classList.add('show');
    }
});

