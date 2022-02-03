let subject = ["I ", "you ", "we ","they "];
let verb = ["touch ", "move ", "throw "];
let dirObj = ["ball", "phone", "computer"];

function index(x) {
        let i = Math.floor(x.length*Math.random());
        return x[i];
      }

function phrase(){
      let sentence = index(subject)+index(verb)+"the "+index(dirObj);
      console.log(sentence);
}

setInterval(phrase, 60000);
