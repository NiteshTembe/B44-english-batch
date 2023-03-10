// title for head tag
document.title="Promise Task 1"
// function to fetch all fish data using given api

const fetchPromise = fetch("https://www.fishwatch.gov/api/species")
fetchPromise.then(response=>{
   return response.json()
}).then(responsedata=>{

// h1 tag with text "Fish Species created" 
const title= document.createElement("h1")
title.classList.add("text-center")
title.id="title"
const titletext = document.createTextNode("Fish Species")
title.appendChild(titletext)
document.body.appendChild(title)
// main div with class container & div with class row 
const container = document.createElement("div")
container.classList.add("container")
const rowdiv = document.createElement("div")
rowdiv.classList.add("row")


//to show data using bootstrap card in document

responsedata.map((element)=>{  //to map each data of array
        // each data of aaray data is added inhtml document 
        rowdiv.innerHTML+=`
            <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-4">
            <div class="card h-100">
                <div class="card-header d-inline-flex align-items-center justify-content-center text-bg-dark">
                    <h1 class="fs-4">${element["Species Name"]}</h1>
                </div>
                <div class="card-body text-bg-info">
                    <div class="card-text">
                        <h2 class="fs-5">Image Link : <a href="${element["Species Illustration Photo"].src}" target="_blank" rel="noopener noreferrer">${element["Species Illustration Photo"].alt}</a></h2>
                        <h3 class="fs-5">Location : ${element.Quote}</h3>
                        <h3 class="fs-5">Biology : ${element.Biology}</h3>
                        <h3 class="fs-5">Description : ${element["Physical Description"]}</h3>
                        
                        <q>${element.Quote}</q>
                    </div>
                </div>
            </div>
            </div>`
    })

container.appendChild(rowdiv)
document.body.appendChild(container)

})
.catch(err=>console.log(err))