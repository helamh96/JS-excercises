function count(x){
    if (typeof x === "string"){
        let c = 0;
        for(let i of x){
            switch(i){
                case "a":
                    c++;
                    break;
                case "e":
                    c++;
                    break;
                case "i":
                    c++;
                    break;
                case "o":
                    c++;
                    break;
                case "u":
                    c++;
                    break;
            }
        } 
    return c;
    }else{
        let num = Math.log10(x);
        return Math.floor(num)+1;
    }
}

let a="count the vowels";
let b=12345678;

console.log(count(a));
console.log(count(b));
