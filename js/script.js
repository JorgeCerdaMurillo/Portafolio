const nav = document.querySelector('.nav');
const menu_btn = document.querySelector('.menu-btn');
const menu= document.querySelector('.menu');

const $portfolio = document.querySelector(".sec-portfolio-js");
const $modalImgPortfolio=document.querySelector(".img-modal-js");


    window.addEventListener('scroll', function(){
        nav.classList.toggle('active', window.scrollY >0)
    })

    menu_btn.addEventListener('click', () =>{
        menu.classList.toggle('active')
    })

    $portfolio.addEventListener('click', (e)=>{
     if(e.target.classList.contains("img-btn-modal-js")){
        //obtengo el src
       let urlImg=e.target.attributes[0].nodeValue
       //añado el modal
       $modalImgPortfolio.src=urlImg
     }
    })