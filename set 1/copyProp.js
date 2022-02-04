function copyProp(obj1, obj2, prop){
    if (prop != undefined){
        for (let p of prop){
            obj1[p] = obj2[p];
        }
    } else {
        for (let p in obj2){
            obj1[p] = obj2[p];
        }
    }
}

let objB={p1:1,p2:2, p3:2};
let objA={};

copyProp(objA,objB,["p1"]);
console.log(objA);
