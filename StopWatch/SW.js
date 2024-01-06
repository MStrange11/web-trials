let min =0;
let sec = 0;
let milisec = 0;

let timer;
let con = true;

function startTimer(){
    if(con){
        timer = setInterval(updateTimer, 10);
        con = false;
    }else{
        alert("The timer is already started")
    }

}

function stopTimer(){
    con=true;
    clearInterval(timer);
}

function resetTimer(){
    min =0;
    sec = 0;
    milisec = 0;

    document.getElementById("min").textContent = padTime(min);
    document.getElementById("sec").textContent = padTime(sec);
    document.getElementById("milisec").textContent = padTime(milisec);

    con=true;
    clearInterval(timer);
}
function updateTimer(){
    milisec++;
    if(milisec === 100){
        milisec=0;
        sec++;
    }
    if(sec === 60){
        sec=0;
        min++;
    }
    document.getElementById("min").textContent = padTime(min);
    document.getElementById("sec").textContent = padTime(sec);
    document.getElementById("milisec").textContent = padTime(milisec);

}

function padTime(time){
    return time.toString().padStart(2, "0");
}
