function count(x){
    if (typeof x === "string"){
        let matching=x.match(/[aeiouAEIOU]/g);
        return matching.length;
    }else{
        let num = Math.log10(x);
        return Math.floor(num)+1;
    }
}

let a="count the vowels";
let b=12345678;

console.log(count(a));
console.log(count(b));
