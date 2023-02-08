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

//Service
const order_button = document.querySelector(".service-content-button");
const order_service = document.querySelectorAll(".service-item");
//console.log(order_service);
order_button.addEventListener('click',buttonClick);


function buttonClick(item){
    const count = order_button.querySelectorAll('.select_button').length;
    if (item.target.tagName.toLowerCase() !== 'button') return;
    if (!item.target.classList.contains('select_button') && count < 2) {
        item.target.classList.add('select_button');
        for(let el of order_service){
            include = el.classList.contains(item.target.textContent);
            if( include != 1 && !el.classList.contains("unblur")){
                el.classList.add("blur")
                //console.log("blur")
            };
            if( include == 1 ){
                el.classList.add("unblur")
                //console.log("unblur")
             };
            if( include == 1 && el.classList.contains("blur")){
                el.classList.remove("blur")
                //console.log("rblur")
            };
        }

    }
     else if (item.target.classList.contains('select_button')) {
        item.target.classList.remove('select_button');
        for(let el of order_service){
            include = el.classList.contains(item.target.textContent);
            if( (include == 1 || include != 1) && count == 1){
                //console.log(count);
                el.classList.remove("blur")
                el.classList.remove("unblur")
            };
            if( include == 1 && count > 1){
                el.classList.add("blur")
                el.classList.remove("unblur")
            };

        }
    }
}

//accordion

const price_items = document.querySelectorAll(".price_item");



const price_item = document.querySelector(".price_item");
const price_item_act = document.querySelector(".price_item_active");
const according_content = document.querySelector(".according_content");

const price_btn = document.querySelectorAll('.price_button');


for (let el of price_btn){
  el.addEventListener('click', clickItem)
}

function clickItem(el){
  const parents = el.target.closest('.price_item');
  if(parents.classList.contains('price_item_active')){
      parents.classList.remove('price_item_active');
      parents.querySelector(".according_content").classList.add("according_content_hedden");
  }
  else {
    for(let el of document.querySelectorAll('.price_item_active')){
      el.classList.remove('price_item_active');
    }
    for(let el of document.querySelectorAll('.according_content')){
      el.classList.add('according_content_hedden');
    }
    parents.classList.add('price_item_active');
    parents.querySelector(".according_content").classList.remove("according_content_hedden");
  }

}


//Contact
const city = document.querySelector('.city');
const button_city = document.querySelector('.button_dropdown_city');
const unhidden =document.querySelector('.dropdown-content');
const color_button =document.querySelector('.city_button');

button_city.addEventListener('click', citySelect);

function citySelect(){
    if (city.classList.contains("city_select")){
        city.classList.remove("city_select"); 
    document.querySelector('.dropdown-content').classList.remove('unhidden_dropdown-content');    
    }
    else{
    city.classList.add("city_select"); 
    color_button.classList.add('color_button_city')
    document.querySelector('.dropdown-content').classList.add('unhidden_dropdown-content');
    }
}
