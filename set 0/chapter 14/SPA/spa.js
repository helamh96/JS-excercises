fetch("https://my-json-server.typicode.com/helamh96/proof/db")
.then(function(resp){
  return resp.json();
})
.then(function(data){
  complete(data);
});

let elem = document.querySelector(".content");


function complete(data){
let topics = Object.keys(data);
let hash = new URL(document.URL).hash;
hash = hash.slice(1,);
if (topics.indexOf(hash)>=0){
  tmp2(hash,data);
}else{
    prin(data, topics);
}

window.addEventListener("hashchange", function() {
  let thash = new URL(document.URL).hash;
  let topic = thash.slice(1);
  if (topics.indexOf(topic)>=0){
    tmp2(topic,data);
  }else if(thash.length === 0){
    prin(data, topics);
  }
});
}


function tmp2(topic,data){
let objurl = new URL(document.URL);
objurl.hash = `#${topic}`;
let urls = objurl.href;
document.location.href = urls;
elem.innerHTML = "";
let temp = document.querySelector("#temp2");
let div = temp.content.querySelector("div");
let image = div.querySelector("img");
image.setAttribute("class","img2");
image.setAttribute("src",data[topic]["image"]);
let title = div.querySelector("h2");
title.textContent = data[topic]["title"];
let text = div.querySelector("p");
text.textContent = data[topic]["text"];
let resource = document.importNode(div, true);
elem.appendChild(resource);
}


function prin(data, topics){
for(let topic in data){
  let temp = document.querySelector("#temp1");
  let div = temp.content.querySelector("div");
  div.setAttribute("id", topic);
  div.setAttribute("class", "container");
  let img = div.querySelector("img");
  img.setAttribute("class","img1");
  img.setAttribute("height","150px");
  img.setAttribute("src", data[topic]["image"]);
  img.setAttribute("class", topic);
  let divText = div.querySelector("div");
  divText.setAttribute("class",topic);
  let title = divText.querySelector("h2");
  title.setAttribute("class",topic);
  title.textContent = data[topic]["title"];
  let content = divText.querySelector("p");
  content.setAttribute("class",topic);
  content.innerHTML = data[topic]["text"];
  let resource = document.importNode(div, true);
  let cont = document.querySelector(".content");
  cont.appendChild(resource);
  elem.addEventListener("click",function(ev){
    let clicked = ev.target.getAttribute("class");
    if (topics.indexOf(clicked) >= 0){
        tmp2(clicked,data);
    }
  });
}
}
