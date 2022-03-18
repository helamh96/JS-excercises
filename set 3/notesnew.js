

/*Declaration of the buttons */

let textSpace = document.getElementsByClassName("textarea")[0];
let button = document.querySelector(".savebtn");
let savedNotes = document.querySelector(".savedNotes");
let cancelingbtn = document.querySelector(".cancelbtn");
/* --------------------------------- */

/* Declaration localstorage and the JSON object */
let notesInfo = {};

if(!localStorage.getItem(0)){
    localStorage.setItem(0,JSON.stringify(notesInfo));
}
/* -------------------------- */

displayNotes();
button.addEventListener("click",saveNote);
textSpace.addEventListener("keydown", tabs);
savedNotes.addEventListener("click", selectedbtn);
cancelingbtn.addEventListener("click",cancelEdit)

/* functions  */
function saveNote(){
    if (Boolean(textSpace.value)){
        let d = Date.now();
        let notesInf = JSON.parse(localStorage.getItem(0));
        let noteID = Math.floor(Math.random()*100000);
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
    console.log(ids);
    let nNotes = localStorage.getItem(0);
    nNotes = JSON.parse(nNotes);
    delete nNotes[ids];
    localStorage.setItem(0,JSON.stringify(nNotes));
    displayNotes();
}

function viewNote(event){
    let ids = event.dataset.ids;
    let editButton = document.querySelector(".saveChangebtn");
    let saveButton = document.querySelector(".savebtn");
    let dates = document.querySelector(".info");
    let noteData = localStorage.getItem(0);
    let nData = JSON.parse(noteData);
    let text = nData[ids]["note"];
    let creationDate = document.querySelector(".creationDate");
    let modifyDate = document.querySelector(".modifyDate");
    editButton.style.display = "inline";
    saveButton.style.display = "none";
    savedNotes.style.display = "none";
    textSpace.value = text;
    textSpace.readOnly = true;
    editButton.textContent = "Go back";
    dates.style.display = "flex";
    let creation = Number(nData[ids]["creaDate"]);
    let modification = Number(nData[ids]["lastMod"]);
    creationDate.textContent = `creation date: ${new Date(creation)}.`;
    modifyDate.textContent = `Last modification: ${new Date(modification)}`;
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

function editNote(event){
    let ids = event.dataset.ids;
    let nData = localStorage.getItem(0);
    let editButton = document.querySelector(".saveChangebtn");
    let saveButton = document.querySelector(".savebtn");
    nData = JSON.parse(nData);
    let dates = document.querySelector(".info");
    cancelingbtn.style.display = "inline";
    editButton.style.display = "inline";
    saveButton.style.display = "none";
    savedNotes.style.display = "none";
    textSpace.value = nData[ids]["note"];
    editButton.addEventListener("click", saveEdition, {once : true});
    editButton.parameters = {"editButton":editButton, "saveButton":saveButton, "savedNotes":savedNotes,
                              "textSpace":textSpace, "nData":nData,
                               "dates":dates, "cancelingbtn":cancelingbtn, "ids":ids  }
}

function saveEdition(evt){
    let parameters = evt.currentTarget.parameters;
    let {editButton, saveButton, savedNotes, textSpace, nData, dates, cancelingbtn,
        ids} = parameters;
    editButton.style.display = "none";
    saveButton.style.display = "inline";
    savedNotes.style.display = "block";
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
    cancelingbtn.style.display = "none";
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
