const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const btnLeft = $('.btn-left');
// const page = $('.current-page');
const totalPage = $('.total-page');
const btnRight = $('.btn-right');
const pages = $$('[class^="page-"]');

const countPage = pages.length;
var currentPage = 0;
function showPage(index) {
    if(index < 0 || index >= pages.length) return;
    btnLeft.toggleAttribute('disabled', index === 0);
    btnRight.toggleAttribute('disabled', index === pages.length - 1);
    $('.active')?.classList.remove('active');
    pages[currentPage].classList.add('fade-out');
    // pages[index].classList.add('active');
    setTimeout(() => {
        pages.forEach(page => page.classList.remove('fade-out'));
        pages[currentPage].classList.add('active');
    }, 10); // Match this with animation duration
    // page.innerHtml = currentPage + 1 + ' '; 
    totalPage.innerHTML = `<span class="current-page">${currentPage + 1}</span> / ${countPage}`
    // $('.next-page')?.classList.remove('.next-page');
}  
showPage(currentPage);
function nextPage(){
    currentPage+=1;
    showPage(currentPage);
    pages.classList.add('next-page');
}

function prevPage(){
    currentPage-=1;
    showPage(currentPage);
    pages.classList.add('next-page');
}
