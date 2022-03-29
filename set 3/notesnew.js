/*Declaration of the buttons */

let buttons = document.querySelector(".notebtns");
let textSpace = document.getElementById("textarea");
let saveButton = document.querySelector(".savebtn");
let savedNotes = document.querySelector(".savedNotes");
let cancelingbtn = document.querySelector(".cancelbtn");
let editButton = document.querySelector(".saveChangebtn");
let dates = document.querySelector(".info");
/* --------------------------------- */

/* Declaration localstorage and the JSON object */

let notesInfo = {};

if(!localStorage.getItem(0)){
    localStorage.setItem(0,JSON.stringify(notesInfo));
}
/* -------------------------- */

displayNotes();
saveButton.addEventListener("click",saveNote);
textSpace.addEventListener("keydown", tabs);
savedNotes.addEventListener("click", selectedbtn);
cancelingbtn.addEventListener("click",cancelEdit)

/* functions  */

function saveNote(){
    if (Boolean(textSpace.value)){
        let d = Date.now();
        let notesInf = JSON.parse(localStorage.getItem(0));
        let noteID = d;
        let noteData = {"id": noteID, "creaDate":d.toString(), "lastMod":d.toString(), "note":textSpace.value};
        textSpace.value = " ";
        notesInf[noteID] = noteData;
        notesInf = JSON.stringify(notesInf)
        localStorage.setItem(0, notesInf);
        displayNotes();
    }
}

function displayNotes(){
    savedNotes.innerHTML = "";
    let fragment = document.createDocumentFragment()
    let pastN = localStorage.getItem(0);
    pastN = JSON.parse(pastN);
    Object.keys(pastN).forEach(i => {
        let temp = document.querySelector("#notes");
            let div = temp.content.querySelector(".sNote");  
            let p = div.querySelector("p");
            let buttons = div.querySelector(".buttons");
            let erraseB = buttons.querySelector(".delbtn");
            erraseB.dataset.ids = i;
            let editB = buttons.querySelector(".editbtn");
            editB.dataset.ids = i;
            let viewB = buttons.querySelector(".viewbtn");
            viewB.dataset.ids = i;
            p.textContent = pastN[i]["note"].slice(0,10);
            if (pastN[i]["note"].length > 10){
                p.textContent +=  "...";
            }
            let pastNotes = document.importNode(div, true);
            fragment.appendChild(pastNotes)
    });
    savedNotes.appendChild(fragment);
}

function deleteNote(event){
    let ids = event.dataset.ids;
    let nNotes = localStorage.getItem(0);
    nNotes = JSON.parse(nNotes);
    delete nNotes[ids];
    localStorage.setItem(0,JSON.stringify(nNotes));
    displayNotes();
}

function viewNote(event){
    let ids = event.dataset.ids;
    let noteData = localStorage.getItem(0);
    let nData = JSON.parse(noteData);
    let text = nData[ids]["note"];
    let creationDate = document.querySelector(".creationDate");
    let modifyDate = document.querySelector(".modifyDate");
    buttons.classList.add("view");
    savedNotes.classList.add("view");
    textSpace.value = text;
    textSpace.readOnly = true;
    editButton.textContent = "Go back";
    dates.style.display = "flex";
    let creation = Number(nData[ids]["creaDate"]);
    let modification = Number(nData[ids]["lastMod"]);
    creationDate.textContent = `creation date: ${new Date(creation)}.`;
    modifyDate.textContent = `Last modification: ${new Date(modification)}`;
    editButton.addEventListener("click", ()=>{
        buttons.classList.remove("view");
        savedNotes.classList.remove("view");
        editButton.textContent = "Save the changes!";
        textSpace.value = "";
        textSpace.setAttribute("placeholder", "Write a note here");
        textSpace.readOnly = false;
        dates.style.display = "none";
        displayNotes();
        }, {once : true});
}

function editNote(event){
    let ids = event.dataset.ids;
    let nData = localStorage.getItem(0);
    nData = JSON.parse(nData);
    buttons.classList.add("editting");
    savedNotes.classList.add("editting");
    textSpace.value = nData[ids]["note"];
    editButton.addEventListener("click", saveEdition, {once : true});
    editButton.parameters = {"savedNotes":savedNotes,
                              "textSpace":textSpace, "nData":nData,
                               "dates":dates, "ids":ids  }
}

function saveEdition(evt){
    let parameters = evt.currentTarget.parameters;
    let {savedNotes, textSpace, nData, dates, ids} = parameters;
    buttons.classList.remove("editting");
    savedNotes.classList.remove("editting");
    if (Boolean(textSpace.value) && nData[ids]["note"] !== textSpace.value){
        let d = new Date;
        d = d.getTime();
        nData[ids]["note"] = textSpace.value;
        nData[ids]["lastMod"] = d.toString()
        nData = JSON.stringify(nData);
        localStorage.setItem(0, nData);
    }
    textSpace.value = "";
    textSpace.setAttribute("placeholder", "Write a note here");
    dates.style.display = "none";
    displayNotes();
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
    editButton.removeEventListener("click", saveEdition);
    editButton.textContent = "Save change";
    buttons.classList.remove("editting");
    savedNotes.classList.remove("editting");
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
