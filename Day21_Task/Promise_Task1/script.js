document.title="Promise Task 1"

async function getFishData(){
    try{
        let res = await fetch("https://www.fishwatch.gov/api/species")
        let data = await res.json()
     //   console.log(data[0]["Image Gallery"])
     //   console.log(data)
        showFishData(data)
    }
    catch(err){
        console.log(err)
    }
}

const title= document.createElement("h1")
title.classList.add("text-center")
title.id="title"
const titletext = document.createTextNode("Fish Species")
title.appendChild(titletext)
document.body.appendChild(title)
const container = document.createElement("div")
container.classList.add("container")
const rowdiv = document.createElement("div")
rowdiv.classList.add("row")
rowdiv.id="fishdatadiv"
container.appendChild(rowdiv)
document.body.appendChild(container)

getFishData()

function showFishData(data){
    let fishdatadiv = document.getElementById("fishdatadiv")
    console.log(data)
    data.map((element)=>{
        fishdatadiv.innerHTML+=`
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
}
