
let homescore=0
let guestscore=0
let homescoreEl=document.getElementById("homescore")
let guestscoreEl=document.getElementById("guestscore")
let guestfoulsEL=document.getElementById("guestfoulss")
let homefoulsEL=document.getElementById("homefoulss")
let minutes=90
let seconds=0
let homefouls=0
let guestfouls=0

var beep= new Audio('Dj Air Horn Sound Effects.mp3');
beep.loop=false;

var x


guestscoreEl.textContent=guestscore
homescoreEl.textContent=homescore
homefoulsEL.textContent=homefouls
guestfoulsEL.textContent=guestfouls
guestfoulsEL.textContent=guestfouls

changecolor()
function changecolor(){
if (homescore>guestscore){
    document.getElementById("home").style.color="#F94F6D";
    document.getElementById("guest").style.color="#FFFFFF"; 
}
else if(homescore<guestscore){
    document.getElementById("guest").style.color="#F94F6D";
    document.getElementById("home").style.color="#FFFFFF";
}
else{
    document.getElementById("home").style.color="#F94F6D";  
    document.getElementById("guest").style.color="#F94F6D"; 
}
}
function addoneguest(){
    guestscore+=1
    guestscoreEl.textContent=guestscore
    changecolor()
}
function addtwoguest(){
    guestscore+=2
    guestscoreEl.textContent=guestscore
    changecolor()
}
function addthreeguest(){
    guestscore+=3
    guestscoreEl.textContent=guestscore
    changecolor()
}
function addonehome(){
    homescore+=1
    homescoreEl.textContent=homescore
    changecolor()
}
function addtwohome(){
    homescore+=2
    homescoreEl.textContent=homescore
    changecolor()
}
function addthreehome(){
    homescore+=3
    homescoreEl.textContent=homescore
    changecolor()
}


function resetgame(){
 homescore=0
 guestscore=0
 homefouls=0
 guestfouls=0
 homescoreEl.textContent=homescore
 guestscoreEl.textContent=guestscore
 guestfoulsEL.textContent=guestfouls
 homefoulsEL.textContent=homefouls
 changecolor()
 document.getElementById("timer").textContent=minutes+":"+seconds
 clearInterval(x);
 timer()
 minutes=90
 seconds=0

}

function addfoulsguest(){
guestfouls+=1
guestfoulsEL.textContent=guestfouls
}

function addfoulshome(){
    homefouls+=1
    homefoulsEL.textContent=homefouls
    }

    function timer(){
        clearInterval(x);
       x=setInterval( function(){
        seconds-=1
        document.getElementById("timer").textContent=minutes+":"+seconds
 
        if (seconds<0){
            minutes-=1
            document.getElementById("timer").textContent=minutes+":"+0
            if(minutes<0){
                document.getElementById("timer").textContent=0+":"+0
                clearInterval(x);
                beep.play(); 
            } else{ 
            seconds=60
            document.getElementById("timer").textContent=minutes+":"+seconds
            }
        }
           },1000);
            }
