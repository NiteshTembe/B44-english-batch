//title of the html document
document.title="makeup API"

document.cookie = "makeupAPI=APIData; SameSite=None; Secure"
let brandName = "MakeUP Store"
    

//Navbar creation using DOM 
const nav = document.createElement("nav")
nav.classList.add("navbar","navbar-expand-md","navbar-dark","bg-dark")
const navdiv = document.createElement("div")
navdiv.classList.add("container-fluid")

// navbar brand name
const navbrand = document.createElement("a")
navbrand.classList.add("navbar-brand")
const navbrandname = document.createTextNode(brandName)
navbrand.appendChild(navbrandname)
navdiv.appendChild(navbrand)
navdiv.innerHTML+=`
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="?">Home</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Product Type
            </a>
            <ul class="dropdown-menu">
                <li>
                    <a class="dropdown-item" href="?product_type=blush">Blush</a>
                    <ul class="dropdown-menu dropdown-submenu">
                        <li>
                        <a class="dropdown-item" href="#">Category &raquo; </a>
                        <ul class="dropdown-menu dropdown-submenu">
                            <li>
                            <a class="dropdown-item" href="?product_category=powder&product_type=blush">Powder</a>
                            </li>
                            <li>
                            <a class="dropdown-item" href="?product_category=powder&product_type=blush">Cream</a>
                            </li>
                        </ul>
                        </li>
                    </ul>
                </li>
                <li><a class="dropdown-item" href="?product_type=bronzer">Bronzer</a>
                    <ul class="dropdown-menu dropdown-submenu">
                    <li>
                    <a class="dropdown-item" href="#">Category &raquo; </a>
                    <ul class="dropdown-menu dropdown-submenu">
                        <li>
                        <a class="dropdown-item" href="?product_category=powder&product_type=bronzer">Powder</a>
                        </li>
                    </ul>
                    </li>
                    </ul>
                </li>
                <li><a class="dropdown-item" href="?product_type=eyebrow">Eyebrow</a>
                    <ul class="dropdown-menu dropdown-submenu">
                    <li>
                    <a class="dropdown-item" href="#">Category &raquo; </a>
                    <ul class="dropdown-menu dropdown-submenu">
                        <li>
                        <a class="dropdown-item" href="?product_category=pencil&product_type=eyebrow">Pencil</a>
                        </li>
                    </ul>
                    </li>
                    </ul>
                </li>
                <li><a class="dropdown-item" href="?product_type=eyeliner">Eyeliner</a>
                    <ul class="dropdown-menu dropdown-submenu">
                    <li>
                    <a class="dropdown-item" href="#">Category &raquo; </a>
                        <ul class="dropdown-menu dropdown-submenu">
                            <li>
                            <a class="dropdown-item" href="?product_category=liquid&product_type=eyeliner">Liquid</a>
                            </li>
                            <li>
                            <a class="dropdown-item" href="?product_category=pencil&product_type=eyeliner">Pencil</a>
                            </li>
                            <li>
                            <a class="dropdown-item" href="?product_category=gel&product_type=eyeliner">Gel</a>
                            </li>
                            <li>
                            <a class="dropdown-item" href="?product_category=cream&product_type=eyeliner">Cream</a>
                            </li>
                        </ul>
                    </li>
                    </ul>
                </li>
                <li><a class="dropdown-item" href="?product_type=eyeshadow">EyeShadow</a>
                    <ul class="dropdown-menu dropdown-submenu">
                    <li>
                    <a class="dropdown-item" href="#">Category &raquo; </a>
                        <ul class="dropdown-menu dropdown-submenu">
                            <li>
                            <a class="dropdown-item" href="?product_category=palette&product_type=eyeshadow">Palette</a>
                            </li>
                            <li>
                            <a class="dropdown-item" href="?product_category=pencil&product_type=eyeshadow">Pencil</a>
                            </li>
                            <li>
                            <a class="dropdown-item" href="?product_category=cream&product_type=eyeshadow">Cream</a>
                            </li>
                        </ul>
                    </li>
                    </ul>    
                </li>
                <li><a class="dropdown-item" href="?product_type=foundation">Foundation</a>
                    <ul class="dropdown-menu dropdown-submenu">
                    <li>
                    <a class="dropdown-item" href="#">Category &raquo; </a>
                        <ul class="dropdown-menu dropdown-submenu">
                            <li>
                            <a class="dropdown-item" href="?product_category=concealer&product_type=foundation">Concealer</a>
                            </li>
                            <li>
                            <a class="dropdown-item" href="?product_category=liquid&product_type=foundation">Liquid</a>
                            </li>
                            <li>
                            <a class="dropdown-item" href="?product_category=contour&product_type=foundation">Contour</a>
                            </li>
                            <li>
                            <a class="dropdown-item" href="?product_category=bb_cc&product_type=foundation">Bb cc</a>
                            </li>
                            <li>
                            <a class="dropdown-item" href="?product_category=cream&product_type=foundation">Cream</a>
                            </li>
                            <li>
                            <a class="dropdown-item" href="?product_category=mineral&product_type=foundation">Mineral</a>
                            </li>
                            <li>
                            <a class="dropdown-item" href="?product_category=powder&product_type=foundation">Powder</a>
                            </li>
                            <li>
                            <a class="dropdown-item" href="?product_category=highlighter&product_type=foundation">Highlighter</a>
                            </li>
                        </ul>
                    </li>
                    </ul> 
                </li>
                <li><a class="dropdown-item" href="?product_type=lip_liner">Lip liner</a>
                    <ul class="dropdown-menu dropdown-submenu">
                    <li>
                    <a class="dropdown-item" href="#">Category &raquo; </a>
                        <ul class="dropdown-menu dropdown-submenu">
                            <li>
                            <a class="dropdown-item" href="?product_category=pencil&product_type=lip_liner">Pencil</a>
                            </li>
                        </ul>
                    </li>
                    </ul>
                </li>
                <li><a class="dropdown-item" href="?product_type=lipstick">Lipstick</a>
                    <ul class="dropdown-menu dropdown-submenu">
                    <li>
                    <a class="dropdown-item" href="#">Category &raquo; </a>
                        <ul class="dropdown-menu dropdown-submenu">
                            <li>
                            <a class="dropdown-item" href="?product_category=lipstick&product_type=lipstick">Lipstick</a>
                            </li>
                            <li>
                            <a class="dropdown-item" href="?product_category=lip_gloss&product_type=lipstick">Lip gloss</a>
                            </li>
                            <li>
                            <a class="dropdown-item" href="?product_category=liquid&product_type=lipstick">Liquid</a>
                            </li>
                            <li>
                            <a class="dropdown-item" href="?product_category=lip_stain&product_type=lipstick">Lip stain</a>
                            </li>
                        </ul>
                    </li>
                    </ul>
                </li>
                <li><a class="dropdown-item" href="?product_type=mascara">Mascara</a></li>
                <li><a class="dropdown-item" href="?product_type=nail_polish">Nail polish</a></li>
            </ul>
          </li>
        </ul>
      </div>
`


// navbar search code
const searchform = document.createElement("div")
searchform.classList.add("d-flex","form")
const formAttrRole = document.createAttribute("role")
formAttrRole.value="search"
searchform.setAttributeNode(formAttrRole)
const searchinput = document.createElement("input")
searchinput.type="search"
searchinput.name="searchtxt"
searchinput.id="searchtxt"
searchinput.classList.add("form-control","me-2")
searchinput.placeholder="Filter by name | brand | type"
const searchinattr1 = document.createAttribute("aria-label")
searchinattr1.value="Search"
const searchlist = document.createAttribute("list")
searchlist.value="datalistoptions"
searchinput.setAttributeNode(searchinattr1)
searchinput.setAttributeNode(searchlist)
const datalist = document.createElement("datalist")
datalist.id="datalistoptions"

const searchbtn = document.createElement("button")
searchbtn.id="searchbtn"
searchbtn.classList.add("btn","btn-outline-dark","btn-warning")
const searchbtntext = document.createTextNode("Search")
searchbtn.appendChild(searchbtntext)
searchform.appendChild(searchinput)
searchform.appendChild(datalist)
searchform.appendChild(searchbtn)
navdiv.appendChild(searchform)
nav.appendChild(navdiv)
document.body.appendChild(nav)

// cntainer  div to show all products
const container = document.createElement("div")
container.classList.add("container","my-4","py-3")
const rowdiv = document.createElement("div")
rowdiv.classList.add("row","row-cols-1","row-cols-sm-2","row-cols-lg-3","row-cols-xl-4","g-4","m-1")
rowdiv.id="mainProductDiv"
container.appendChild(rowdiv)
document.body.appendChild(container)

//spinner overlay 
const overlay= document.createElement("div")
overlay.id="overlay"
overlay.classList.add("overlay")
overlay.innerHTML=`
<div class="d-flex justify-content-center">  
    <div class="spinner-border text-light" role="status">
    <span class="visually-hidden">Loading...</span>
    </div>
</div>`
document.body.appendChild(overlay)




//=======================================  Functions  =================================================

let mainProductDiv = document.getElementById("mainProductDiv")
var datalistoptions = document.getElementById("datalistoptions")

//function to fetch data from makeup api
async function fetchData(){
    document.getElementById("overlay").hidden=false
    let apiUrl = "https://makeup-api.herokuapp.com/api/v1/products.json"
    let urlSearch = window.location.search
    datalistoptions.innerHTML=""
    try{
        let res = await fetch(apiUrl+urlSearch)
        productData = await res.json()
        showProductData()
        document.getElementById("overlay").hidden=true
        return await productData
    }
    catch(err){
        console.log(err)
    }
}

var productData = fetchData()

//function to display data into mainProductDiv element

function showProductData(searchtext=""){
    if(productData!=undefined){
        mainProductDiv.innerHTML=""
        productData.map((prod)=>{
            if(prod.brand==null){
                prod.brand=""
            }
            if(prod.name.includes(searchtext) || prod.brand.includes(searchtext) || prod.product_type.includes(searchtext)){
                const coldiv = document.createElement("div")
                coldiv.classList.add("col")
                //creating card for each product
                coldiv.innerHTML=`
                <div class="card text-center my-4">
                    <div class="card-header">
                        <img src="${prod.api_featured_image}" class="card-img-top" alt="">
                    </div>
                    <div class="card-body">
                        <h4 class="card-title"><strong>${prod.name}</strong></h4>
                        <h4 class="card-title"><small>${prod.brand}</small></h4>
                        <h6 class="card-text desc">${prod.description}</h6>
                    </div>
                    <div class="card-footer">
                        <div class="d-flex justify-content-between">
                        <h5>
                            <a class="btn btn-light prodlink" href="${prod.product_link}" target="_blank">Product Link</a>
                        </h5>
                        <h5>
                            <span>${prod.price_sign!=null ? prod.price_sign : "" }${prod.price}</span>  
                        </h5>
                    </div>
                    </div>
                </div>`
                //datalist for search input field
                datalistoptions.innerHTML+=`<option value="${prod.name}">
                <option value="${prod.brand}">
                <option value="${prod.product_type}">`
                mainProductDiv.appendChild(coldiv)
                
            }
        })

    }
}

//function to call on click of search button
let sbtn = document.getElementById("searchbtn")
sbtn.addEventListener("click",searchProduct)
function searchProduct(){
    let searchtext = document.getElementById("searchtxt").value
    showProductData(searchtext)
}

//==========================footer===============================

const footer = document.createElement("footer")
footer.classList.add("d-flex","justify-content-between","align-items-center","py-3","fixed-bottom","text-bg-dark","bg-dark")
footer.innerHTML=`<div class="col-md-12 d-flex align-items-center">
<span class="mb-3 mb-md-0 text-muted">© 2023 Company, Inc</span>
</div>
`
document.body.appendChild(footer)