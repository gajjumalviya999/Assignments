const submitbtnelement= document.getElementById("submitbtn");
const listUlelement= document.getElementById("listUl");
const formelement= document.getElementById("form");

// eventListeners

formelement.addEventListener("submit", addEvent);
listUlelement.addEventListener("click",editEvent);
//functions.................................
//add Event
function addEvent(e){
    e.preventDefault();
    let newEvent=document.getElementById("eventInputtext").value;
    if(newEvent != "" && newEvent != null){
        document.getElementById("eventInputtext").value="";
        let li=document.createElement("LI");
        let p=document.createElement("p");
        let editbtn=document.createElement("button");
        let deletebtn=document.createElement("button");
        p.innerHTML=newEvent;
        editbtn.innerHTML="Edit";
        deletebtn.innerHTML="Delete";
        p.classList.add("text");
        editbtn.classList.add("editbtn");
        deletebtn.classList.add("deletebtn");
        li.appendChild(p);
        li.appendChild(editbtn);
        li.appendChild(deletebtn);
        listUlelement.appendChild(li);  

        if(submitbtnelement.value!="Add Event")
        {
            submitbtnelement.value="Add Event";
        }
    }
}

function editEvent(e){
    e.preventDefault();
    if(e.target.classList.contains("editbtn")){
        document.getElementById("eventInputtext").value=e.target.parentNode.childNodes[0].innerHTML;
        submitbtnelement.value="Edit";
        deleteEvent(e);
    }
    else if(e.target.classList.contains("deletebtn")){
        deleteEvent(e);
    }
}
function deleteEvent(e){
    e.preventDefault();
    listUlelement.removeChild(e.target.parentNode);
}


