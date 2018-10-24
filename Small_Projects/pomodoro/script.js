window.onload= function(newTime){
    document.getElementById("mainTime").innerHTML="25"+":"+"00";
}
var trigger = false;
var counting = false;
var counted = false;
var pause = true;
var pomodoroCounters = 0;
var mode="work";
var s = "stop"

function start(){
    if(!counting){
        trigger = true;
        counting = true;
        pause = false;
		s = "play"
        switchMode();
    }
}

function stop(){
    trigger=false;
    counting = false;
    pause = true;
	s = "stop";
}

function reset(){
	if(s=="play")
		document.getElementById("mainTime").innerHTML="25:01";
	else
		document.getElementById("mainTime").innerHTML="25:00";
    trigger=false;
    counting=false;
    counted=false;
	pause = true;
    pomodoroCounters = 0;
    mode = "work";
}

function counter(){
    var curTime = document.getElementById("mainTime").innerHTML;
    var curTime = curTime.split(':');
    var m = curTime[0];
    var s = curTime[1];
    console.log(curTime);
    if(s=="00" && m =="00"){
        counting=false;
        counted=true;
        document.getElementById("mainTime").innerHTML=m+":"+s;
        switchMode();
    }else{
        if(s<10){
            if(s=="00"){
                if(m<"10" && m!="00"){
                    m = "0"+m-1;
                }else
                    m--;
                s="59";
            }else
                s="0"+(s-1);
        }else
            s--;

        if(counting)
            setTimeout(counter,1000);
        document.getElementById("mainTime").innerHTML=m+":"+s;
    }
}

function switchMode(){
    if(trigger && !pause){
        switch(mode){
            case "work":
                work();
                break;
            case "shortbreak":
                shortbreak();
                break;
            case "bigbreak":
                bigbreak();
                break;
        }
    }
}

function work(){
    if(counted && pomodoroCounters==4){
        mode="bigbreak";
        document.getElementById("mainTime").innerHTML="10:00";
        counted=false;
        counting=true;
        console.log("Setting mode to bigbreak");
        if(!counted)
            counter();
    }
    else if(counted){
        mode="shortbreak";
        document.getElementById("mainTime").innerHTML="05:00";
        counted=false;
        counting=true;
        console.log("Setting mode to smallbreak");
        if(!counted)
            counter();
    }else{
        counted = false;
        counting = true;
        if(!counted && !pause)
            counter();
    }
}

function shortbreak(){
    if(counted){
        mode="work";
        counting=true;
        counted=false;
        console.log("counted is false, we are in shorbreak");
        pomodoroCounters+=1;
        switchMode();
    }
}

function bigbreak(){
    if(counted){
        mode="work";
        counting=true;
        counted=false;
        console.log("counted is false, we are in shorbreak");
        pomodoroCounters=0;
        switchMode();
    }
}
