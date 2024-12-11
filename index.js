const todos = document.getElementsByTagName("ul")[0]

const handleFormSubmit = () => {
    const inputText = document.getElementById("inputText")

    const newDiv = document.createElement("div")
    newDiv.innerText = inputText.value
    const newDoneButton = document.createElement("button")
    newDoneButton.innerText = "Done"
    const newDeleteButton = document.createElement("button")
    newDeleteButton.innerText = "Delete"
    
    const newLi = document.createElement("li");
    newLi.appendChild(newDiv)
    newLi.appendChild(newDoneButton)
    newLi.appendChild(newDeleteButton)

    newDoneButton.addEventListener("click", () => {
        newDiv.style.textDecoration = "line-through"
        newDiv.style.backgroundColor = "aqua"
    })
    newDeleteButton.addEventListener("click", () => {
        todos.removeChild(newLi)
    })
    
    todos.appendChild(newLi)
    inputText.value = ""
}