function count(x){
    if (typeof x === "string"){
        let matching=x.match(/[aeiou]/gi);
        if(matching){
            return matching.length;
        }else{return 0}
        
    }else{
        let num = Math.log10(x);
        return Math.floor(num)+1;
    }
}

let a="count the vowels";
let b=12345678;
let c="qwrt"

console.log(count(a));
console.log(count(b));
console.log(count(c));
