function padZero(num){
    return num<10?"0"+num:num;
}
function displayTime(){
     let today= new Date();
     let hr= today.getHours();
     let min= today.getMinutes();
     let sec= today.getSeconds();
     if(hr>12){
        hr=hr-12;
        document.getElementById("ampm").textContent="PM";
     }
    document.getElementById("hr").textContent=padZero(hr)+':';
    document.getElementById("min").textContent=padZero(min)+':';
    document.getElementById("sec").textContent=padZero(sec);
}
setInterval(displayTime,1000)
