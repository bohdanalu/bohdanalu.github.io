const badges = document.querySelectorAll('.card__badge');
const cardBtns = document.querySelectorAll('.card__btn')
const slideWrapBtn = document.querySelector('.slider__inner');
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal-content');
let catalogSlide = document.querySelectorAll(".mySlides");
let slideIndex = 1;

slideWrapBtn.addEventListener('click', clickBtn);
modal.addEventListener('click', hideModal);

changeColor(badges);
changeColor(cardBtns);
showCatalogPage(slideIndex);

for (let item of catalogSlide) {
    item.addEventListener('click', showModal)
}

function showModal(e) {
    modal.style.display = 'block';
    modalImg.src = e.target.src;
}

function hideModal() {
    modal.style.display = 'none';
}

function changeColor(colection) {
    for (let item of colection) {

        let text = item.textContent.toLowerCase();
        switch (text) {
            case 'хіт продажів':
                addClass(item, 'hit')
                break;
            case 'новинка':
                addClass(item, 'new')
                break;
            case 'у корзину':
                addClass(item, 'cart')
                break;
            case 'незабаром у продажі':
                addClass(item, 'soon')
                break;
            default:
                break;
        }
    }
}

function addClass(item, word) {
    item.classList.add(`${item.classList}--${word}`)
}

function clickBtn(e) {

    if (e.target.classList.contains('slider__btn--left')) {
        plusBtn(-1)
    }
    if (e.target.classList.contains('slider__btn--right')) {
        plusBtn(+1)
    }
}

function plusBtn(n) {
    showCatalogPage(slideIndex += n);
}

function showCatalogPage(n) {
    let i;
    if (n > catalogSlide.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = catalogSlide.length
    };
    for (i = 0; i < catalogSlide.length; i++) {
        catalogSlide[i].style.display = "none";
    }
    catalogSlide[slideIndex - 1].style.display = "flex";
}