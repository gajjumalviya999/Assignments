
// elements grabed by ID
const todayDateElement=document.getElementById("today-date");
const todayDayElement=document.getElementById("today-day");
const yearElement=document.getElementById("CurrentYear");
const CreateEventElement=document.getElementById("CreateEvent"); 
const createeventpageElement=document.getElementById("create-event-page");
const originalElement=document.getElementById("original");
const leftSectionElement=document.getElementById("left-section");
const BackbtnElement=document.getElementById("Backbtn");
const formElement=document.getElementById("form");
const eventListULElement=document.getElementById("eventListUL");
const showPostBtnElement= document.getElementById("showPostBtn");
const hidePostBtnElement=document.getElementById("hidePostBtn");
const CurrentEventsElement=document.querySelector(".CurrentEvents");
const DateSectionElement=document.getElementById("DateSection");
const MonthsListdivElement=document.getElementById("Months-List-div");
// Add event Listeners
CreateEventElement.addEventListener("click", openCreateEventPage);
BackbtnElement.addEventListener("click",closeCreateEventPage);
formElement.addEventListener("submit" ,addEvents);
showPostBtnElement.addEventListener("click",showallEvents);
hidePostBtnElement.addEventListener("click",hideEvents);
DateSectionElement.addEventListener("click",DateSelection);
MonthsListdivElement.addEventListener("click",MonthSelection);
// arrays and Declarations

let events=[];
//functions
var today=new Date();
let activeDate=today.getDate();
let activeYear=today.getFullYear();
let activeMOnth=today.getMonth();
let activeDay=today.getDay();
function myleftSection(){
    var x=new Date();
    x.setDate(activeDate);
    x.setFullYear(activeYear);
    x.setMonth(activeMOnth);

    todayDateElement.innerHTML=activeDate;
    todayDayElement.innerHTML=new Date(x).toLocaleString("default",{weekday:"long"});
    CurrentYear.innerHTML=activeYear;
    showListEvents();
}

function DateSelection(e){
    if(e.target.nodeName=="SPAN"){
        activeDate=Number(e.target.firstChild.nodeValue);
        DateSectionElement.querySelectorAll("SPAN").forEach((tag)=>{tag.classList.remove("active-day")});
        e.target.classList.add("active-day");
        myleftSection();
    }
}
function MonthSelection(e){
    if(e.target.nodeName=="SPAN" ){
        activeMOnth=Number(e.target.getAttribute("monthid"));
        MonthsListdivElement.querySelectorAll("SPAN").forEach((mon)=>{
            mon.classList.remove("active-Month");
        });
        e.target.classList.add("active-Month");
        activeDate=1;
        myleftSection();
    }
}
function openCreateEventPage(){
    originalElement.classList.add("hide");
    createeventpageElement.classList.remove("hide");
    createeventpageElement.classList.add("display-flex");
}
function closeCreateEventPage(){
    originalElement.classList.remove("hide");
    createeventpageElement.classList.remove("display-flex");
    createeventpageElement.classList.add("hide");
}

function addEvents(ev){
    ev.preventDefault();
    closeCreateEventPage();
    var newEvent=document.getElementById("inputtextevent").value;
    var newEventDate=document.getElementById("inputdateevent").value;
    if(newEvent!="")     
        {
            events.unshift(
            {
                title:newEvent,
                dateTime:newEventDate,
            }
            );
            var li=document.createElement("li");
            li.innerHTML=newEvent;
            li.title=newEventDate;
            eventListULElement.appendChild(li);
        }
    document.getElementById("inputtextevent").value="";
    document.getElementById("inputdateevent").value="";
}

function showListEvents(){
    events.forEach(event=>{
        var li=document.createElement("li");
        li.innerHTML=event.title;
        li.title=event.dateTime;
        eventListULElement.appendChild(li);
    })
}

function showallEvents(){
    CurrentEventsElement.style.height="100px";
    CurrentEventsElement.style.overflowY="auto";
    showPostBtnElement.classList.add("hide");
    hidePostBtnElement.classList.remove("hide");

}
function hideEvents(){
    CurrentEventsElement.style.height="40px";
    CurrentEventsElement.style.overflow="hidden";
    showPostBtnElement.classList.remove("hide");
    hidePostBtnElement.classList.add("hide");
}
myleftSection();

