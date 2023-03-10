document.title="Promise Task 3"

// below function is used to fetch data using api given in url

const fetchPromise = fetch("https://api.jikan.moe/v4/anime")
fetchPromise.then(response=>{
   return response.json()
}).then(res=>{
    reponsedata = res.data

const mainAnimeDiv = document.createElement("div")
mainAnimeDiv.classList.add("row","row-cols-1","row-cols-sm-2","row-cols-md-3","row-cols-xl-4","g-4","m-1")

// this function is used to show all data using bootstrap card in to mainAnimeDiv
reponsedata.map((element,index)=>{
        let animeDiv=document.createElement('div')
        animeDiv.classList.add("col","anime")
        animeDiv.innerHTML=`
        <div class="card h-100">
            <img src="${element.images.jpg.image_url}" class="card-img-top" alt="..." />
            <div class="card-body p-0 m-1">
              <div class="d-flex justify-content-between">
              <h5 class="card-title">${element.title}</h5>
              <h5 class="card-title">
              <span>${element.score}</span>  
              </h5>
              </div>
              <!-- synopsis Details -->
              <div class="card card-header synopsis">
                <p>Synopsis</p>
                <p>${element.synopsis}</p>
              </div>
            </div>        
          </div>
        `
        mainAnimeDiv.append(animeDiv)
    })

    document.body.appendChild(mainAnimeDiv)

})
.catch(err=>console.log(err))

