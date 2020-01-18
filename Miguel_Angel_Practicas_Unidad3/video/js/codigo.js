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
    btnPlay.addEventListener("click",playVideo);
    btnPause.addEventListener("click",pauseVideo);
    btnStop.addEventListener("click",stopVideo);
    btnRewind.addEventListener("click",rewindVideo);
    btnPrev.addEventListener("click",prevVideo);
    btnNext.addEventListener("click",nextVideo);
    btnShuffle.addEventListener("click",shuffleVideo);

}

let canciones=[
    'resources/video/Gintama - Beat it AMV.mp4',
    'resources/video/Gintama for fun AMV.mp4',
    'resources/video/CRAZY - Gintama.mp4'
  ];

  let cancionActual = 0;

   theVideo = document.querySelector("#myVideo");
   

    function playVideo() {
      theVideo.style.margin="95px 0px 0px 0px";
      theVideo.style.transform = "scale(1.5)";
       theVideo.play();
       modeDark();
    }
    
    function pauseVideo() {
       theVideo.pause();
       modeLight();
       theVideo.style.margin="0px";
      theVideo.style.transform = "scale(1)";
    }

    function stopVideo() {
      theVideo.currentTime = 0 ;
      theVideo.pause();
      modeLight();
      theVideo.style.margin="0px";
      theVideo.style.transform = "scale(1)";
    }
    
    function rewindVideo() {
      theVideo.currentTime = 0;
    }

    function prevVideo() {
      cancionActual = cancionActual -1;

      if(cancionActual<0){
        cancionActual = canciones.length -1;
      }
      theVideo.src = canciones[cancionActual];
      theVideo.currentTime = 0;
      theVideo.play();
      showName();
      modeDark();
      theVideo.style.margin="95px 0px 0px 0px";
      theVideo.style.transform = "scale(1.5)";
    }

    function nextVideo() {
      cancionActual = cancionActual +1;

      if(cancionActual>canciones.length-1){
        cancionActual = 0;
      }

      theVideo.src = canciones[cancionActual];
      theVideo.currentTime = 0;
      theVideo.play();
      showName();
      modeDark();
      theVideo.style.margin="95px 0px 0px 0px";
      theVideo.style.transform = "scale(1.5)";
    }

    function shuffleVideo() {
      cancionActual = Math.floor(Math.random()*canciones.length);
      theVideo.src = canciones[cancionActual];
      theVideo.currentTime = 0;
      theVideo.play();
      showName();
      modeDark();
      theVideo.style.margin="95px 0px 0px 0px";
      theVideo.style.transform = "scale(1.5)";
    }

    function showName(){
      let videoName = document.getElementById("info");
      videoName.innerHTML=canciones[cancionActual].split('/')[2];
    }
    function modeDark(){
      document.body.style.backgroundColor="black";
      document.body.style.color="white";
    }
    function modeLight(){
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
    }