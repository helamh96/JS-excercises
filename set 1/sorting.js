function consonants (str) {
    let v = str.match(/[aeoiu]/gi)||[];
    return v.length;
}

function sorting(x,y){
    switch(y){
        case "alphabetic ascending":
            return x.sort();
            break;
        case "alphabetic descending":
            return x.sort().reverse();
            break;
        case "length ascending":
            return x.sort(function(a,b){return b.length - a.length;});
            break;
        case "length descending":
            return x.sort(function(a,b){return b.length - a.length;}).reverse();
            break;
        case "consonants ascending":
            return x.sort(function(a,b){return consonants(b) - consonants(a);});
            break;
        case "consonants descending":
            return x.sort(function(a,b){return consonants(b) - consonants(a);}).reverse();
            break;
    }
}

let arr=["one", "two", "three", "four", "five", "six", "seven", "eigth", "nine", "ten"];

console.log(sorting(arr,"consonants descending"));
