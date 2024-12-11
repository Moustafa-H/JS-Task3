const table = document.getElementsByTagName("table")[0]

let xhr = new XMLHttpRequest()
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts")
xhr.send()
xhr.onreadystatechange = () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    let res = JSON.parse(xhr.response)
    for (let i = 0; i < res.length; i++) {
        const newId = document.createElement("td")
        newId.innerText = res[i]["id"]
        const newTitle = document.createElement("td")
        newTitle.innerText = res[i]["title"]
        const newBody = document.createElement("td")
        newBody.innerText = res[i]["body"]
        
        const newTr = document.createElement("tr")
        newTr.appendChild(newId)
        newTr.appendChild(newTitle)
        newTr.appendChild(newBody)
        
        table.appendChild(newTr)
    }
  }
}

const handleSearch = () => {
    table.innerHTML = ''
    let inp = document.getElementById("databyid").value
    let xhr = new XMLHttpRequest()
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/" + inp)
    xhr.send()
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let res = JSON.parse(xhr.response)
            
            const newId = document.createElement("td")
            newId.innerText = res["id"]
            const newTitle = document.createElement("td")
            newTitle.innerText = res["title"]
            const newBody = document.createElement("td")
            newBody.innerText = res["body"]
            
            const newTr = document.createElement("tr")
            newTr.appendChild(newId)
            newTr.appendChild(newTitle)
            newTr.appendChild(newBody)
            
            table.appendChild(newTr)
        }
    }
}