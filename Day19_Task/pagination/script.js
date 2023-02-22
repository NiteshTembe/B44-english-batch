let req = new XMLHttpRequest()
    req.open('GET','https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json')
    req.send()
    req.onload=function(){
    var data = JSON.parse(req.response)
 //   console.log(data.length/10)
let content=""
let table=""
let pageNo = parseInt(window.location.search.replace("?page=",""))
if(!Number.isInteger(pageNo)){
    pageNo = 1;
}
if(data.length>0){
    const lastdata = (pageNo*10)>(data.length)? data.length : (pageNo*10)
   
    for(let i=(pageNo*10-10);i<lastdata;i++){
        table+=`
        <tr>
        <td>${data[i].id}</td>
        <td>${data[i].name}</td>
        <td>${data[i].email}</td>
        </tr>`
    }
    

document.getElementById("tabledata").innerHTML=table


content += `
<div class="pagination">
<a href="?page=1">FIRST</a>`
if(pageNo>1){
content += `<a href="?page=${pageNo-1}">PREVIOUS</a>`
}
for(let i=0;i<Math.ceil(data.length/10);i++){
    content += `<a href="?page=${i+1}" `
    if(pageNo==i+1){
        content+=`class="active"`
    }
    content+=`>${i+1}</a>`
}
if(pageNo!=Math.ceil(data.length/10)){ content += `<a href="?page=${pageNo+1}">NEXT</a>` }

content+=`
<a href="?page=${Math.ceil(data.length/10)}">LAST</a>
</div>`
document.getElementById("buttons").innerHTML=content
}


}