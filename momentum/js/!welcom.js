//Welcom
const welcom = document.querySelector(".greeting");
const getname = document.querySelector(".name");
bckgrn = document.querySelector('.body')
slide_next = document.querySelector('.slide-next')
slide_prev = document.querySelector('.slide-prev')
bgNum = getRandomNum();
//console.log(bgNum)

function setLocalStorage() {
    localStorage.setItem('name', getname.value);
  }
  window.addEventListener('beforeunload', setLocalStorage)

  function getLocalStorage() {
    if(localStorage.getItem('name')) {
      getname.value = localStorage.getItem('name');
    }
  }
  window.addEventListener('load', getLocalStorage)

function getTimeofDay(){
    const date = new Date();
    const hours = date.getHours();
    switch(true){
        case(hours >= 0 ) && (hours <= 6): x = 'night';
        break;
        case(hours > 6 ) && (hours <= 12): x = 'morning';
        break;
        case(hours > 12 ) && (hours <= 18): x = 'afternoon';
        break;
        case(hours > 18 ) && (hours <= 23): x = 'evening';
        break;
    }
    //x = getTimeofDay(); 
    welcom.textContent = `Goog ${x}`;
    setTimeout(getTimeofDay, 1000);
    return x;
}
getTimeofDay();

//Backgroung

function getRandomNum(){
  return (Math.floor(Math.random()*(20-1) + 1))
  
}
//body.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/18.jpg')";

state = [];
function change_bg(){
  newState = getTimeofDay();
  state[1] = newState;
  if(state[0] == state[1]){
  }
  else {
    setBg()
    state[0] = state[1]
  }
  //console.log(state)
  setTimeout(change_bg, 1000);
}
change_bg()

function setBg(){
  //console.log("!!!!!" + bgNum)
  const img = new Image();
  if(bgNum < 10){ 
    bgNum = "0"+ bgNum;
    bgNum = String(bgNum)
    //console.log(typeof(bgNum))
  }
  //console.log("????"+ bgNum)
  img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${newState}/${bgNum}.jpg`;
  //console.log(img.src)
  img.onload = () => {
    document.body.style.backgroundImage = "url(" + img.src + ")"; 
  };
  //document.body.style.background = `url(https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/${bgNum}.jpg)`;
}

function getSlideNext(){
  slide_next.addEventListener('click', () => {
      bgNum++
      if(bgNum > 20){
        bgNum = 1
      }
      setBg();
})
}
getSlideNext()

function getSlidePrev(){
  slide_prev.addEventListener('click', () => {
    bgNum--
    if(bgNum < 1){
      bgNum = 20
    }
    setBg()
  })
}
getSlidePrev()