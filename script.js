const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

/* function that will be executed the add button is clicked*/
function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

/*to remove or check the task*/
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
    saveData();
},false);

/* to store the data in browser */
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);

}

/* to display data when website is reloaded */
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();