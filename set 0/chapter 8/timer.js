function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function a(){
    console.log("a");
    return 0;
}

function b(){
    console.log("b");
    return 0;
}

function c(){
    console.log("c");
    return 0;
}

function delayer(){
    for(let timers=0; timers>=0; timers++){
        sleep(30000);
        if(timers/2 == Math.floor(timers/2)){
            a();
        }
        if(timers/4==Math.floor(timers/4)){
            b();
        }
        if(timers/5==Math.floor(timers/5)){
            c();
        }
    }
}

delayer();
