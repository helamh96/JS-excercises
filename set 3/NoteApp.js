let textSpace = document.getElementsByName("textarea")[0];
let button = document.querySelector(".savebtn");
let savedNotes = document.querySelector(".savedNotes");
let cancelingbtn = document.querySelector(".cancelbtn");

if (!localStorage.getItem(0)){
    localStorage.setItem(0,"0");
}

let indexes = localStorage.getItem(0).split(" ");
let lastIndex = indexes[indexes.length-1];

displayNotes();
button.addEventListener("click",saveNote);
textSpace.addEventListener("keydown", tabs);
savedNotes.addEventListener("click", selectedbtn);
cancelingbtn.addEventListener("click",cancelEdit)

function saveNote(){
    if (Boolean(textSpace.value)){
        let newIndex = Number(lastIndex) +1;
        let d = new Date();
        let noteData = {"creaDate":d.toString(), "lastMod":d.toString(), "note":textSpace.value};
        let strData = JSON.stringify(noteData);
        localStorage.setItem(newIndex, strData);
        textSpace.value = "";
        let renewIndexes = localStorage.getItem(0) + " " + String(newIndex);
        localStorage.setItem(0, renewIndexes);
        indexes = localStorage.getItem(0).split(" ")
        lastIndex = indexes[indexes.length-1];
        displayNotes();
    }
}

function displayNotes(){
    savedNotes.innerHTML = "";
    let fragment = document.createDocumentFragment()
    indexes.reverse();
    for (let i of indexes){
        if(i!=="0"){
            let temp = document.querySelector("#notes");
            let div = temp.content.querySelector(".sNote");  
            let p = div.querySelector("p");
            let buttons = div.querySelector(".buttons");
            let erraseB = buttons.querySelector(".delbtn");
            erraseB.setAttribute("foo", i);
            let editB = buttons.querySelector(".editbtn");
            editB.setAttribute("foo",i);
            let viewB = buttons.querySelector(".viewbtn");
            viewB.setAttribute("foo",i);
            let noteData = localStorage.getItem(i);
            let nData = JSON.parse(noteData);
            p.textContent = nData["note"].slice(0,10);
            if (nData["note"].length > 10){
                p.textContent +=  "...";
            }
            let pastNotes = document.importNode(div, true);
            fragment.appendChild(pastNotes);
        }
    }
    savedNotes.appendChild(fragment);
    indexes.reverse();
}

function deleteNote(event){
    let foo = event.getAttribute("foo");
    let currentIndexes = localStorage.getItem(0) + " ";
    let exp = new RegExp(` ${foo} `);
    currentIndexes = currentIndexes.replace(exp, " ").slice(0,-1);
    localStorage.setItem(0, currentIndexes);
    indexes = localStorage.getItem(0).split(" ");
    lastIndex = indexes[indexes.length-1];
    displayNotes();
}

function editNote(event){
    let foo = event.getAttribute("foo");
    let text = localStorage.getItem(foo);
    let editButton = document.querySelector(".saveChangebtn");
    let saveButton = document.querySelector(".savebtn");
    let nData = JSON.parse(text);
    let dates = document.querySelector(".info");
    cancelingbtn.style.display = "inline";
    editButton.style.display = "inline";
    saveButton.style.display = "none";
    savedNotes.style.display = "none";
    textSpace.value = nData["note"];
    editButton.addEventListener("click", saveEdition, {once : true});
    editButton.parameters = {"editButton":editButton, "saveButton":saveButton, "savedNotes":savedNotes,
                              "textSpace":textSpace, "nData":nData,
                               "dates":dates, "cancelingbtn":cancelingbtn, "foo":foo  }
}

function saveEdition(evt){
    let parameters = evt.currentTarget.parameters;
    let {editButton, saveButton, savedNotes, textSpace, nData, dates, cancelingbtn,
        foo} = parameters;
    editButton.style.display = "none";
    saveButton.style.display = "inline";
    savedNotes.style.display = "block";
    if (Boolean(textSpace.value) && nData["note"] !== textSpace.value){
        let d = new Date;
        nData["note"] = textSpace.value;
        nData["lastMod"] = d.toString()
        let strData = JSON.stringify(nData);
        localStorage.setItem(foo, strData);
    }
    textSpace.value = "";
    textSpace.setAttribute("placeholder", "Write a note here");
    dates.style.display = "none";
    cancelingbtn.style.display = "none";
    displayNotes();
}

function viewNote(event){
    let foo = event.getAttribute("foo");
    let editButton = document.querySelector(".saveChangebtn");
    let saveButton = document.querySelector(".savebtn");
    let dates = document.querySelector(".info");
    let noteData = localStorage.getItem(foo);
    let nData = JSON.parse(noteData);
    let text = nData["note"];
    let creationDate = document.querySelector(".creationDate");
    let modifyDate = document.querySelector(".modifyDate");
    editButton.style.display = "inline";
    saveButton.style.display = "none";
    savedNotes.style.display = "none";
    textSpace.value = text;
    textSpace.readOnly = true;
    editButton.textContent = "Go back";
    dates.style.display = "flex";
    creationDate.textContent = `creation date: ${nData["creaDate"].slice(0,15)}.`;
    modifyDate.textContent = `Last modification: ${nData["lastMod"].slice(0,15)}`;
    editButton.addEventListener("click", ()=>{
        editButton.style.display = "none";
        editButton.textContent = "Save the changes!";
        saveButton.style.display = "inline";
        savedNotes.style.display = "block";
        textSpace.value = "";
        textSpace.setAttribute("placeholder", "Write a note here");
        textSpace.readOnly = false;
        dates.style.display = "none";
        displayNotes();
        }, {once : true});
}

function tabs(event){  
    if (event.key == "Tab") {
        event.preventDefault();
        let start = this.selectionStart;
        let end = this.selectionEnd;
        this.value = this.value.slice(0, start) +  "\t" + this.value.slice(end);
        this.selectionEnd = start + 1;
    }
}

function cancelEdit(){
    let editButton = document.querySelector(".saveChangebtn");
    editButton.removeEventListener("click", saveEdition);
    let saveButton = document.querySelector(".savebtn");
    let dates = document.querySelector(".info");
    cancelingbtn.style.display = "none";
    editButton.style.display = "none";
    editButton.textContent = "Save change";
    saveButton.style.display = "inline";
    savedNotes.style.display = "block";
    textSpace.value = "";
    textSpace.setAttribute("placeholder", "Write a note here");
    textSpace.readOnly = false;
        dates.style.display = "none";
}

function selectedbtn(el){
    let clicked = el.target;
    clickedClass = clicked.getAttribute("class");
    switch (clickedClass){
        case "viewbtn":
            viewNote(clicked);
        break;
        case "editbtn":
            editNote(clicked);
        break;
        case "delbtn":
            deleteNote(clicked);
        break;
    }
}
