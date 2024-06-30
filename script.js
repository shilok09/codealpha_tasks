let dailyTask = document.getElementById("dailyTask");
let  listCont = document.getElementById("listContainer");
let addBtn = document.getElementById("addBtn")

function taskAddKaro(){
    if(dailyTask.value === ''){
        alert("*Enter you task here")
       
    }
    else{
        let elem = document.createElement("li")
        elem.innerHTML = dailyTask.value;
       
        let crossTag = document.createElement("span")
        crossTag.innerHTML = "<i class=\"ri-close-line\"></i>"
        elem.appendChild(crossTag)
        listCont.appendChild(elem);
       
    }
    dailyTask.value='';
    saveKardo();

}
function checkLagao(e){
    
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("check")
        saveKardo();
    }
    else if (e.target.tagName === "SPAN" || e.target.tagName === "I") {
        const listItem = e.target.closest("li");
        if (listItem) {
            listItem.remove();
            saveKardo();
        }
    }  listCont.removeChild(e.target.parentElement);
   
    }
function saveKardo(){
    localStorage.setItem("data",listCont.innerHTML);
}
function dataUthalo(){
    listCont.innerHTML = localStorage.getItem("data");
}

listCont.addEventListener("click",checkLagao)
addBtn.addEventListener("click",taskAddKaro)
dataUthalo();

