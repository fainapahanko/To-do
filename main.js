var btn = document.querySelector(".plusButton");
var input = document.querySelector("input");

btn.onclick = function(event){
    if(input.value != ""){
        var task = document.querySelector("#input"); // asign value input as variable
        var taskValue = task.value; 
        var taskList = document.querySelector("ul"); 

        var newTask = document.createElement("li"); //creating new element (li)
        var newTaskSpan = document.createElement("span");//creating span element
        var checkButton = document.createElement("i"); //creating new icon
        var minusButton = document.createElement("i"); 

        newTaskSpan.innerText = taskValue; //value in li equal to value in input
        newTaskSpan.classList.add("tasks"); //adding class to li to design it later
        minusButton.className = "fa fa-minus"; 
        checkButton.className = "fa fa-check"; //adding class to icon to design it later
        
        taskList.appendChild(newTask);//li as a child of ul
        newTask.appendChild(newTaskSpan);//span as a child of a li
        newTask.appendChild(checkButton);//icon as a child of li
        newTask.appendChild(minusButton);
        
        task.value = ""; // reset input

        minusButton.onclick = function(event){ //delete task
            taskList.removeChild(newTask);
        }

        newTask.ondblclick = function(event){ //delete task
            var task = event.currentTarget;
            var taskParent = task.parentNode;
            taskParent.removeChild(task);
        }

        checkButton.onclick = function(event){
            checkButton.style.color = "red";
        }

        newTaskSpan.onclick = function(event){ //cross out task
            var task = event.currentTarget;
            task.style.setProperty("text-decoration", "line-through");
        }
    }
}
input.addEventListener ("keyup", function(event){
    if(event.keyCode === 13 && input.value != ""){

        var task = document.querySelector("#input"); // asign value input as variable
        var taskValue = task.value; 
        var taskList = document.querySelector("ul"); 

        var newTask = document.createElement("li"); //creating new element (li)
        var newTaskSpan = document.createElement("span");//creating span element
        var checkButton = document.createElement("i"); //creating new icon
        var minusButton = document.createElement("i"); 

        newTaskSpan.innerText = taskValue; //value in li equal to value in input
        newTaskSpan.classList.add("tasks"); //adding class to li to design it later
        minusButton.className = "fa fa-minus"; 
        checkButton.className = "fa fa-check"; //adding class to icon to design it later
        
        taskList.appendChild(newTask);//li as a child of ul
        newTask.appendChild(newTaskSpan);//span as a child of a li
        newTask.appendChild(checkButton);//icon as a child of li
        newTask.appendChild(minusButton);
        
        task.value = ""; // reset input

        minusButton.onclick = function(event){ //delete task
            taskList.removeChild(newTask);
        }

        newTask.ondblclick = function(event){ //delete task
            var task = event.currentTarget;
            var taskParent = task.parentNode;
            taskParent.removeChild(task);
        }

        checkButton.onclick = function(event){
            checkButton.style.color = "red";
        }

        newTaskSpan.onclick = function(event){ //cross out task
            var task = event.currentTarget;
            task.style.setProperty("text-decoration", "line-through");
        }
    }
})


