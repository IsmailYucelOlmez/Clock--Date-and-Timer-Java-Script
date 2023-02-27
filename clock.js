var saniye=0;
var dakika=0;
var sayacSaniye=document.querySelector(".timer-second");
var sayacDakika=document.querySelector(".timer-minute");
var interval;

function showTime()
{
    let simdi=new Date();
    
    var day=simdi.getDate();
    var month=simdi.getMonth()+1;
    var year=simdi.getFullYear();
    var hour=simdi.getHours();
    var minute=simdi.getMinutes();
    var second=simdi.getSeconds();
    
    (hour<10)   ? document.querySelector(".hour").innerHTML="0"+hour : document.querySelector(".hour").innerHTML=hour;
    (minute<10) ? document.querySelector(".minute").innerHTML="0"+minute :  document.querySelector(".minute").innerHTML=minute;
    (second<10) ? document.querySelector(".second").innerHTML="0"+second :  document.querySelector(".second").innerHTML=second;
    (day<10)    ? document.querySelector(".day").innerHTML="0"+day :document.querySelector(".day").innerHTML=day;
    (month<10)  ? document.querySelector(".month").innerHTML="0"+month :document.querySelector(".month").innerHTML=month;
    document.querySelector(".year").innerHTML=year;
}
function Arttır(){
    clearInterval(interval);

    interval=setInterval(function(){saniye+=1; 
        if(saniye%60==0)
        {
            dakika+=1; saniye=0;
        } 
        if(saniye<10){sayacSaniye.innerHTML="0"+saniye;}else{sayacSaniye.innerHTML=saniye;} 
        if(dakika<10){sayacDakika.innerHTML="0"+dakika;}else{sayacDakika.innerHTML=dakika;}
    },1000);
    

}
function Durdur(){
    clearInterval(interval);

    
}
function Sıfırla(){
    clearInterval(interval);

    interval=setInterval(function(){saniye=0; dakika=0; 
        if(saniye<10){sayacSaniye.innerHTML="0"+saniye;}else{sayacSaniye.innerHTML=saniye;} 
        if(dakika<10){sayacDakika.innerHTML="0"+dakika;}else{sayacDakika.innerHTML=dakika;}
    },1000);
}


setInterval(function(){showTime();},1000);

