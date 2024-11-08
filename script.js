const test = undefined
// grabs the html elements
const list1 = document.getElementById("users_todos")
const userText = document.getElementById("textbox1")
const addButton = document.getElementById("add_button")
const clearButton = document.getElementById("clear_button")

var index = 0;
// Eventlistener for button to create list
addButton.addEventListener("click", () => addTodo(list1,index))

// Eventlistener for count+, this will allow me to specifically select a task which allows for deleting/editing etc
addButton.addEventListener("click", () => countIncrease())

function countIncrease(){
    return index++;
}

// function that will push the user input into the list
function addTodo(attach,count){
    const newTask = document.createElement("div")
    const newHead = document.createElement("p");
    newTask.setAttribute("id", ( "taskDiv" + index))
    newHead.setAttribute("id", ("test" + count))
    var x = userText.value
    newHead.innerHTML += x;
    newTask.appendChild(newHead)
    var deleteButton = document.createElement("button")
    deleteButton.setAttribute("class","sigmaLoner")
    deleteButton.setAttribute("id",("ateLogo" + index))
    deleteButton.addEventListener("click", () => deleteTask(newTask))
    var checkButton = document.createElement("button")
    checkButton.setAttribute("id","checkPlease")
    checkButton.innerHTML = " "
    checkButton.addEventListener("click", () => checkBox(checkButton))
    newTask.appendChild(checkButton)
    return attach.appendChild(newTask),
    newTask.appendChild(deleteButton),
    createPriority(newTask)
}

// Creates 3 buttons, one for each level of priority
function createPriority(aTask){
const buttonDiv = document.createElement("div")
buttonDiv.setAttribute("id","buttonDiving")

const low = document.createElement("button")
const med = document.createElement("button")
const high = document.createElement("button")
low.setAttribute("class","buttoners")
low.setAttribute("id","green")
med.setAttribute("class","buttoners")
med.setAttribute("id","yellow")
high.setAttribute("class","buttoners")
high.setAttribute("id","red")
var cheeky = low.getAttribute("id")

return aTask.appendChild(buttonDiv),
buttonDiv.appendChild(low),
buttonDiv.appendChild(med),
buttonDiv.appendChild(high)
}

// Create a function that will delete the selected to do 
function deleteTask(x){
    return x.remove()
   }

   // for some reason this took over 30 mins to program. I changed so many variables one at a time to try and decipher what the problem was. I believe it was using the = operator instead of ===
function checkBox(item){
    if (item.innerHTML === " " ){
    return item.innerHTML = "X"
    } else if (item.innerHTML === "X") {
        return item.innerHTML = " "
    }
}
