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



//THE PALINDROME FUNCTION

