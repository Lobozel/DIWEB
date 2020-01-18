//El evento onclick no funciona al tener el script en un archivo externo
//por lo que voy a añadir los eventos primero
window.onload = function() {
    this.showName();
    //Recogo todos los botones que tendrán eventos
    let btnPlay = document.getElementById("btnPlay");
    let btnPause = document.getElementById("btnPause");
    let btnStop = document.getElementById("btnStop");
    let btnRewind = document.getElementById("btnRewind");
    let btnPrev = document.getElementById("btnPrev");
    let btnNext = document.getElementById("btnNext");
    let btnShuffle = document.getElementById("btnShuffle");
   
    this.console.log(btnPlay.value);

    //les doy los eventos a los botones
    btnPlay.addEventListener("click",playAudio);
    btnPause.addEventListener("click",pauseAudio);
    btnStop.addEventListener("click",stopAudio);
    btnRewind.addEventListener("click",rewindAudio);
    btnPrev.addEventListener("click",prevAudio);
    btnNext.addEventListener("click",nextAudio);
    btnShuffle.addEventListener("click",shuffleAudio);

}

let canciones=[
    'resources/audio/01 Genjyo Destruction.mp3',
    'resources/audio/02 Sakura Mitsutsuki.mp3',
    'resources/audio/03 Samurai Heart(Some Like It Hot!!).mp3'
  ];

  let cancionActual = 0;

   theAudio = document.querySelector("#myAudio");

    function playAudio() {
       theAudio.play();
    }
    
    function pauseAudio() {
       theAudio.pause();
    }

    function stopAudio() {
      theAudio.currentTime = 0 ;
      theAudio.pause();
    }
    
    function rewindAudio() {
      theAudio.currentTime = 0;
    }

    function prevAudio() {
      cancionActual = cancionActual -1;

      if(cancionActual<0){
        cancionActual = canciones.length -1;
      }
      theAudio.src = canciones[cancionActual];
      theAudio.currentTime = 0;
      theAudio.play();
      showName();
    }

    function nextAudio() {
      cancionActual = cancionActual +1;

      if(cancionActual>canciones.length-1){
        cancionActual = 0;
      }

      theAudio.src = canciones[cancionActual];
      theAudio.currentTime = 0;
      theAudio.play();
      showName();
    }

    function shuffleAudio() {
      cancionActual = Math.floor(Math.random()*canciones.length);
      theAudio.src = canciones[cancionActual];
      theAudio.currentTime = 0;
      theAudio.play();
      showName();
    }

    function showName(){
      let songName = document.getElementById("info");
      songName.innerHTML=canciones[cancionActual].split('/')[2];
    }