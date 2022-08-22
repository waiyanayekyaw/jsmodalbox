var getmodal = document.getElementById('signupmodal');
var getbtnsignup = document.getElementById('btn-signup');
var getbtnclose = document.querySelector('.btn-close');
var getbtnfullscreen = document.getElementById('btn-fullscreen');
var getbtnclosescreen = document.getElementById('btn-closescreen');


getbtnsignup.addEventListener('click',function(){
    getmodal.style.display = 'block';
});

getbtnclose.addEventListener('click',function(){
    getmodal.style.display = 'none';
});

window.onclick = function(e){

    if(e.target === getmodal){
        getmodal.style.display = 'none';
    }
}


var getde = document.documentElement;

function fullscreen(){
    localStorage.fullscreen = 1;
}


getbtnfullscreen.addEventListener('click',function(){

    fullscreen();


    if(localStorage.fullscreen === 1 && getde.requestFullscreen){
        getde.requestFullscreen();
    }else if(getde.msRequestFullscreen){
        getde.msRequestFullscreen();
    }else if(getde.webkitRequestFullscreen){
        getde.webkitRequestFullscreen();
    }

    getbtnclosescreen.style.display = 'inline-block';
});


function exitscreen(){
    localStorage.clear();
    localStorage.fullscreen = 0;
}


getbtnclosescreen.addEventListener('click',function(){

    exitscreen();


    if(localStorage.fullscreen === 0 && document.exitFullscreen){
        document.exitFullscreen();
    }else if(document.msExitFullscreen){
        document.msExitFullscreen();
    }else if(document.webkitExitFullscreen){
        document.webkitExitFullscreen();
    }

    getbtnclosescreen.style.display = 'none';
});