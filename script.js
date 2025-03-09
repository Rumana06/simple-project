const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
  
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li); 
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; /* \u00d7  cross icon */
        li.appendChild(span); 
        console.log("li",listContainer)
    }
    inputBox.value = "";
    saveData();         /* Copied from function */
 
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked"); 
        saveData();      /* Copied from function */
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();   /* Copied from function */
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();