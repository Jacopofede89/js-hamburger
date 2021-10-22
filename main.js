const menuRight     = document.querySelector('.header-right > a');
const menuHamburger = document.querySelector('.hamburger-menu');
const closeButton   = document.querySelector('.close');

menuRight.addEventListener("click", 
    function() { 
       menuHamburger.classList.add('active');
    }
);

closeButton.addEventListener("click", 
    function() { 
       menuHamburger.classList.remove('active');
    }
);