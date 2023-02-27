let isPlay = false;
let playNum = 0;
button = document.querySelector('.play');
button_play_next = document.querySelector('.play-next')
button_play_prev = document.querySelector('.play-prev')
const playListContainer = document.querySelector('.play-list');



const audio = new Audio();
function playAudio() {
    if (isPlay == false){
        audio.src = playList[playNum].src;
        audio.currentTime = 0;
        isPlay = true;
        audio.play();
        document.querySelectorAll('.play-item')[playNum].classList.add('item-active')
        }
    else{
        isPlay = false;
        document.querySelectorAll('.play-item')[playNum].classList.remove('item-active')
        audio.pause();
    }
  }

function playNext(){
    isPlay = false;
    button.classList.add('pause');
    document.querySelectorAll('.play-item')[playNum].classList.remove('item-active')
    playNum++
    if(playNum == playList.length){
        playNum = 0;
    }
    playAudio()
    /*isPlay = true;
    button.classList.add('pause');
    audio.src = playList[playNum].src
    document.querySelectorAll('.play-item')[playNum].classList.remove('item-active')
    console.log(playNum)
    playNum++;
    document.querySelectorAll('.play-item')[playNum].classList.add('item-active')
    audio.play();
    if(playNum == playList.length){
        playNum = 0;
    }
*/
}

function playPrev(){
    isPlay = false;
    button.classList.add('pause');
    document.querySelectorAll('.play-item')[playNum].classList.remove('item-active')
    playNum--
    if(playNum < 0){
        playNum = (playList.length - 1);
    }
    playAudio()
  /*  isPlay = true;
    button.classList.add('pause');
    audio.src = playList[playNum].src
    console.log(playNum)
    playNum--;
    audio.play();
    if(playNum < 0){
        playNum = (playList.length - 1);
    }*/
}

 //Смена кнопки 
  function toggleBtn() {
    button.classList.toggle('pause');
    playAudio();
  }

  button.addEventListener('click', toggleBtn);
  button_play_next.addEventListener('click', playNext);
  button_play_prev.addEventListener('click', playPrev);

  const playList = [
    {      
      title: 'Aqua Caelestis',
      src: '../assets/sounds/Aqua Caelestis.mp3',
      duration: '00:58'
    },  
    {      
      title: 'Ennio Morricone',
      src: '../assets/sounds/Ennio Morricone.mp3',
      duration: '01:37'
    },  
    {      
      title: 'River Flows In You',
      src: '../assets/sounds/River Flows In You.mp3',
      duration: '01:37'
    },  
    {      
      title: 'Summer Wind',
      src: '../assets/sounds/Summer Wind.mp3',
      duration: '01:50'
    }
  ]

playList.forEach(element => {
    item = document.createElement('li');
    item.classList.add('play-item');
    item.textContent = `${element.title}`
    playListContainer.append(item);   
  });
  audio.onended = playNext;