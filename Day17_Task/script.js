const disp = document.createElement("p")
disp.id="counter"
document.body.appendChild(disp)
let count = 11;
        let counter = document.getElementById("counter")
        setTimeout(()=>{
            counter.innerText=--count
            setTimeout(()=>{
                counter.innerText=--count
                setTimeout(()=>{
                    counter.innerText=--count
                    setTimeout(()=>{
                        counter.innerText=--count
                        setTimeout(()=>{
                            counter.innerText=--count
                            setTimeout(()=>{
                                counter.innerText=--count
                                setTimeout(()=>{
                                    counter.innerText=--count
                                    setTimeout(()=>{
                                        counter.innerText=--count
                                        setTimeout(()=>{
                                            counter.innerText=--count
                                            setTimeout(()=>{
                                                counter.innerText=--count
                                                setTimeout(()=>{
                                                    counter.innerText="Happy Birthday !"
                                                    counter.style.color="blue"
                                                    clearTimeout()
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
        },1000)