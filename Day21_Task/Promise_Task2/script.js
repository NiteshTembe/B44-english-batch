document.title="Promise Task 2"


// h1 tag with id title created here
const title= document.createElement("h1")
title.classList.add("text-center")
title.id="title"
// text for h1 tag created
const titletext = document.createTextNode("Real Time Cryptocurrency Data")
title.appendChild(titletext)
document.body.appendChild(title)


// This function is used to fetch data usin api
const fetchPromise = fetch("https://api.coincap.io/v2/assets")
fetchPromise.then(response=>{
   return response.json()
}).then(res=>{
    reponsedata = res.data
    
// container div created here
const container = document.createElement("div")
container.classList.add("container")
//div for responsive table created here
const tableDiv = document.createElement("div")
tableDiv.classList.add("table-responsive")

// inner html for id table div is here
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
    reponsedata.map((element)=>{
        tabledata+=`<tr>
        <td>${element.name}</td>
        <td>${element.priceUsd}</td>
        <td>${element.marketCapUsd}</td>
        <td>${element.supply}</td>
        <td>${element.maxSupply == null ? "" : element.maxSupply}</td>
    </tr>`
    })
    tabledata += `</tbody</table>`
    tableDiv.innerHTML=tabledata

container.appendChild(tableDiv)
document.body.appendChild(container)

})
.catch(err=>console.log(err))