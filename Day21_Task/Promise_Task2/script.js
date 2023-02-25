document.title="Promise Task 2"

async function getFishData(){
    try{
        let res = await fetch("https://api.coincap.io/v2/assets")
        let data = await res.json()
        console.log(data.data)
        showData(data.data)
    }
    catch(err){
        console.log(err)
    }
}

const title= document.createElement("h1")
title.classList.add("text-center")
title.id="title"
const titletext = document.createTextNode("Real Time Cryptocurrency Data")
title.appendChild(titletext)
document.body.appendChild(title)
const container = document.createElement("div")
container.classList.add("container")
const tableDiv = document.createElement("div")
tableDiv.classList.add("table-responsive")
tableDiv.id="tableDiv"
container.appendChild(tableDiv)
document.body.appendChild(container)

getFishData()

function showData(data){
    let tablediv = document.getElementById("tableDiv")
    console.log(data)
    let tabledata = `
    <table class="table" id="table">
        <thead class="text-center text-bg-primary">
            <tr>
                <th>Name</th>
                <th>Price $</th>
                <th>Market cap USD</th>
                <th>Supply</th>
                <th>Max Supply</th>
            </tr>
        </thead>
        <tbody>
    ` 
    data.map((element)=>{
        tabledata+=`<tr>
        <td>${element.name}</td>
        <td>${element.priceUsd}</td>
        <td>${element.marketCapUsd}</td>
        <td>${element.supply}</td>
        <td>${element.maxSupply == null ? "" : element.maxSupply}</td>
    </tr>`
    })
    tabledata += `</tbody</table>`
    tablediv.innerHTML=tabledata
}
