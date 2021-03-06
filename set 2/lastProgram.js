//THE CYCLE PROGRAM

function cycle(expretion){
    function nextLetter(letter){
        let newLetter = letter.charCodeAt(0);
        if (newLetter===122){
            newLetter = 97;
        } else if (newLetter === 90){
            newLetter = 65;
        } else if(newLetter === 57){
            newLetter = 48;
        } else{
            newLetter++;
        }
        letter = String.fromCharCode(newLetter);
        return letter;
    }
    expretion = expretion.replace(/[A-Za-z0-9]/g,nextLetter);
    return expretion;
}

console.log(cycle("aBc"));
console.log(cycle("xyz"));
console.log(cycle("aK89"));

//THE HASHTAG PROGRAM

let changingWord = "expression";
let originalText = "Ask especially collecting terminated may son expression. Extremely eagerness principle estimable own was man. Men received far his dashwood subjects new. My sufficient surrounded an companions dispatched in on. Connection too unaffected expression led son possession. New smiling friends and her another. Leaf she does none love high yet. Snug love will up bore as be. Pursuit man son musical general pointed. It surprise informed mr advanced do outweigh.";
function replaceWord(word){
    let foo = '\\b'+word+'\\b';
    let regex = new RegExp(foo,"gm");
    newText = originalText.replace(regex, `<a href="https://twitter.com/search?q=%23${word}">#${word}</a>`);
    console.log(newText);
}

replaceWord(changingWord);

//THE PALINDROME FUNCTION

function isPalindrome(str){
    str = str.toLowerCase();
    let len = Math.floor(str.length/2);
    let exp="";
    for (let i = 0; i < len; i++){
        exp += "(.)";
    }
    if ( !(len === str.length/2)) exp += "(.)";
    for(let i = len; i>0; i--){
        exp += `\\${i}`;
    }
    let regex = new RegExp(exp,"gm");
    let palindrome = str.match(regex);
    return Boolean(palindrome);
}


function palindromes(t){
    let regex=/[,.!?;:]/g
    t = t.replace(regex,"");
    let words = t.split(" ");
    let palindromes = [];
    for(word of words){
        if (isPalindrome(word)){palindromes.push(word);}
    }
    return palindromes;
}

let someText = "this are some examples of palindrome words: redivider, deified, civic, radar, level, rotor. and these are examples of non palindromes: hey, you, are, programin, java";

console.log(palindromes(someText));
