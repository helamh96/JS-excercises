function a(){
    console.log("a");
}

function b(){
    console.log("b");
}

function c(){
    console.log("c");
}

let t=0;
    
function delayer(){
    if(t%2===0){
        a();
    }
    if(t%4===0){
        b();
    }
    if(t%5===0){
        c();
    }
    t++;
}

setInterval(delayer,15000);
