//Burger

(function () {
    const burger = document.querySelector('.burgerjs');
    const burgermenu = document.querySelector(".header-nav");
    const closeburger = document.querySelector(".close");
    const burgeritem = document.querySelectorAll('.header-list-item');
    
    burger.addEventListener("click", () => {
        burgermenu.classList.add("header-nav-active")
    });
   closeburger.addEventListener("click", () => {
        burgermenu.classList.remove("header-nav-active")
   });
   burgeritem.forEach((el) =>{
          el.addEventListener("click", () => {
              burgermenu.classList.remove("header-nav-active")
    })});
})();