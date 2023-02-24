
const container = document.createElement("div")
container.classList.add("container")
container.classList.add("d-inline-flex")
container.classList.add("align-items-center")
container.classList.add("justify-content-center")
container.classList.add("h-100")
const disp = document.createElement("p")
disp.id="counter"
container.appendChild(disp)
document.body.appendChild(container)
let count = 11;
        let counter = document.getElementById("counter")
        setTimeout(()=>{
            counter.innerText=--count
            counter.style.color="black"
            setTimeout(()=>{
                counter.innerText=--count
                counter.style.color="brown"
                setTimeout(()=>{
                    counter.innerText=--count
                    counter.style.color="red"
                    setTimeout(()=>{
                        counter.innerText=--count
                        counter.style.color="orange"
                        setTimeout(()=>{
                            counter.innerText=--count
                            counter.style.color="yellow"
                            setTimeout(()=>{
                                counter.innerText=--count
                                counter.style.color="lemon"
                                setTimeout(()=>{
                                    counter.innerText=--count
                                    counter.style.color="lightgreen"
                                    setTimeout(()=>{
                                        counter.innerText=--count
                                        counter.style.color="green"
                                        setTimeout(()=>{
                                            counter.innerText=--count
                                            counter.style.color="darkgreen"
                                            setTimeout(()=>{
                                                counter.innerText=--count
                                                counter.style.color="darkblue"
                                                setTimeout(()=>{
                                                    counter.innerText="Happy Independance Day !"
                                                    counter.style.color="blue"
                                                    counter.style.opacity=1
                                                    counter.style.transform="scale(1)"
                                                    document.body.style.backgroundImage="linear-gradient(orange, white, green)"
                                                },1000)
                                                counter.style.opacity=0
                                            },1000)
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)