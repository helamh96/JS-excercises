function addRec(a){
    let n=[...a];
    let counter=0;
    if(n.length===0){
        return 0;
    }
    else{
        counter+=n[0];
        n.shift();
        counter+=addRec(n);
        return counter;
    }
}

var arr = [ 1, 3, 5, 7];
var sum = addRec (arr);
