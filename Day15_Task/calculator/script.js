document.title="DOM Calculator"
const title = document.createElement("h1")
title.id="title"
const h1text = document.createTextNode("DOM Calculator")
title.appendChild(h1text)
document.body.appendChild(title)
const desc = document.createElement("p")
desc.id="description"
const ptext = document.createTextNode("This calculator created using DOM")
desc.appendChild(ptext)
document.body.appendChild(desc)

const container = document.createElement("div")
container.classList.add("container")
container.classList.add("m-auto")
container.classList.add("bg-grey")
container.classList.add("w-100")
const row1 = document.createElement("div")
row1.classList.add("row")
const resinput = document.createElement("input")
resinput.id="result"
resinput.type="text"
resinput.classList.add("row-col-sm")
row1.appendChild(resinput)
container.appendChild(row1)
const row2 = document.createElement("div")
row2.classList.add("row")
row2.appendChild(createbutton("clear","AC"))
row2.appendChild(createbutton("delete","del"))
row2.appendChild(createbutton("modulus","%"))
row2.appendChild(createbutton("divide","/"))
container.appendChild(row2)

const row3 = document.createElement("div")
row3.classList.add("row")
row3.appendChild(createbutton(7,7))
row3.appendChild(createbutton(8,8))
row3.appendChild(createbutton(9,9))
row3.appendChild(createbutton("multiply","X"))
container.appendChild(row3)
const row4 = document.createElement("div")
row4.classList.add("row")
row4.appendChild(createbutton(4,4))
row4.appendChild(createbutton(5,5))
row4.appendChild(createbutton(6,6))
row4.appendChild(createbutton("subtract","-"))
container.appendChild(row4)
const row5 = document.createElement("div")
row5.classList.add("row")
row5.appendChild(createbutton(1,1))
row5.appendChild(createbutton(2,2))
row5.appendChild(createbutton(3,3))
row5.appendChild(createbutton("add","+"))
container.appendChild(row5)
const row6 = document.createElement("div")
row6.classList.add("row")
row6.appendChild(createbutton(0,0))
row6.appendChild(createbutton("dot","."))
row6.appendChild(createbutton("doublezero","00"))
row6.appendChild(createbutton("equal","="))
container.appendChild(row6)
document.body.appendChild(container)
function createbutton(id,name){
    const btn= document.createElement("button")
    btn.classList.add("row-col-sm")
    btn.classList.add("w-25")
    btn.id=id
    btn.innerText=name
    return btn
}
const result = document.getElementById("result")
let noDup = false
const clrbtn = document.getElementById("clear")
clrbtn.addEventListener("click",()=>{
    result.value=""
})

const delbtn = document.getElementById("delete")
delbtn.addEventListener("click",()=>{
    let val = result.value
    if(val[val.length-1]=="." || val[val.length-1]=="+" || val[val.length-1]=="-" ||
     val[val.length-1]=="*" || val[val.length-1]=="/" || val[val.length-1]=="%"){
        noDup = true
    }
    result.value=val.slice(0,val.length-1)
})

for(let i=0; i<10; i++){
    let btn = document.getElementById(i)
    btn.addEventListener("click",()=>{
        result.value += ""+i
        noDup =true
    })
}

const addbtn = document.getElementById("add")
addbtn.addEventListener("click",()=>{
    if(noDup){
        result.value+="+"
        noDup = false
    }
})

const subbtn = document.getElementById("subtract")
subbtn.addEventListener("click",()=>{
    if(noDup){
        result.value+="-"
        noDup = false
    }
})

const mulbtn = document.getElementById("multiply")
mulbtn.addEventListener("click",()=>{
    if(noDup){
        result.value+="*"
        noDup = false
    }
})

const dividebtn = document.getElementById("divide")
dividebtn.addEventListener("click",()=>{
    if(noDup){
        result.value+="/"
        noDup = false
    }
})

const modbtn = document.getElementById("modulus")
modbtn.addEventListener("click",()=>{
    if(noDup){
        result.value+="%"
        noDup = false
    }
})

const dotbtn = document.getElementById("dot")
dotbtn.addEventListener("click",()=>{
    if(noDup){
        result.value+="."
        noDup = false
    }
})

const d0btn = document.getElementById("doublezero")
d0btn.addEventListener("click",()=>{
    if(noDup){
        result.value+="00"
        noDup = true
    }
})

const equalbtn = document.getElementById("equal")
equalbtn.addEventListener("click",()=>{
    if(noDup){
        let eq = result.value
        result.value = eval(eq)
    }
})

result.addEventListener("keydown", (event) => {
    if(event.key=="0" || event.key=="1" || event.key=="2" || event.key=="3" || event.key=="4" || event.key=="5" || 
    event.key=="6" || event.key=="7" || event.key=="8" || event.key=="9"){
        let btn = document.getElementById(event.key)
        btn.style.backgroundColor="lightblue"
    }
    else{
        event.preventDefault()
        alert("Only Numbers are allowed")
        return false
    }
})

result.addEventListener("keyup", (event) => {
    if(event.key=="0" || event.key=="1" || event.key=="2" || event.key=="3" || event.key=="4" || event.key=="5" || 
    event.key=="6" || event.key=="7" || event.key=="8" || event.key=="9"){
        let btn = document.getElementById(event.key)
        btn.style.backgroundColor="white"
    }
})