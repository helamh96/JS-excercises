//THE CYCLE PROGRAM

function cycle(s){
    function nextLetter(l){
        let newLetter = l.charCodeAt(0);
        if (newLetter===122){
            newLetter = 97;
        } else if (newLetter === 90){
            newLetter = 65;
        } else if(newLetter === 57){
            newLetter = 48;
        } else{
            newLetter++;
        }
        l = String.fromCharCode(newLetter);
        return l;
    }
    s = s.replace(/[A-Za-z0-9]/g,nextLetter);
    return s;
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

