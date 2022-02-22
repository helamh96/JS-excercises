function copyProp(obj1, obj2, prop){
    if (prop != undefined){
        for (let p of prop){
            if(p in obj2){
                obj1[p] = obj2[p];    
            }else{throw Error("the property "+p+" doesn't exist in the source object")}
        }
    } else {
        for (let p in obj2){
            obj1[p] = obj2[p];
        }
    }
}

let objB={p1:1,p2:2, p3:2};
let objA={};
let objC={};

copyProp(objA,objB,["p1","p3"]);
console.log(objA);
copyProp(objC,objB,["p4"]);
console.log(objA);
