let countHome = document.getElementById('count-home')
let countGuest = document.getElementById('count-guest')


let scoreHome=0;
let scoreGuest=0;


function incrementByOneH() {
  scoreHome +=1;
  countHome.innerText = scoreHome;  
} 
function incrementByTwoH() {
  scoreHome +=2;
  countHome.innerText = scoreHome;
}
function incrementByThreeH() {
  scoreHome +=3;
  countHome.innerText = scoreHome;
}


function incrementByOneG() {
  scoreGuest +=1;
  countGuest.innerText = scoreGuest;  
} 

function incrementByTwoG() {
  scoreGuest +=2;
  countGuest.innerText = scoreGuest;
}

function incrementByThreeG() {
  scoreGuest +=3;
  countGuest.innerText = scoreGuest;
}

function reset() {
    scoreHome=0;
    scoreGuest=0;
    countHome.innerText=0;
    countGuest.innerText=0;
    
}