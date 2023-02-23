document.title="DOM Form"
function validateForm() {
        let formdata = []
        let tableData = ``
         formdata['fn']= document.getElementById("first-name").value
         formdata['ln']= document.getElementById("last-name").value
         formdata['male']= document.getElementById("Male").checked
         formdata['female']= document.getElementById("Female").checked
         formdata['address']= document.getElementById("address").value
         formdata['pincode']= document.getElementById("pincode").value
         formdata['state']= document.getElementById("state").value
         formdata['country']= document.getElementById("country").value
         formdata['c1']= document.getElementById("check1").checked
         formdata['c2']= document.getElementById("check2").checked
         formdata['c3']= document.getElementById("check3").checked
         formdata['c4']= document.getElementById("check4").checked
         formdata['c5']= document.getElementById("check5").checked
        tableData += `<tr>
        <td>${formdata["fn"]}</td>
        <td>${formdata["ln"]}</td>`
        if(formdata["male"]){
            tableData += `<td>Male</td>`
        }
        else{
            tableData += `<td>Female</td>`
        }
    
        tableData += `<td>${formdata["address"]}</td>
        <td>${formdata["state"]}</td>
        <td>${formdata["country"]}</td>
        <td>${formdata["pincode"]}</td><td>`
        let foodArr = []
        if(formdata["c1"]){ foodArr.push(`Fruit and vegetables`) }
        if(formdata["c2"]){ foodArr.push(`Starchy Food`) }
        if(formdata["c3"]){ foodArr.push(`Dairy`) }
        if(formdata["c4"]){ foodArr.push(`Protine`) }
        if(formdata["c5"]){ foodArr.push(`Fat`) }
        tableData += `${foodArr.join(" , ")}</td></tr>`

      document.getElementById("data").innerHTML += tableData
     document.getElementById("form").reset()
        return false  
  }
  function countChecked(){
    var checkBoxes = document.getElementsByClassName('food-type');
    var isChecked = 0;
    for (var i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked) {
            isChecked ++;
        }
    }
    if(isChecked>1){
       document.getElementById("check1").removeAttribute("required")
       document.getElementById("check2").removeAttribute("required")
       document.getElementById("check3").removeAttribute("required")
       document.getElementById("check4").removeAttribute("required")
       document.getElementById("check5").removeAttribute("required")
    }
    else{
        document.getElementById("check1").setAttribute("required",true)
        document.getElementById("check2").setAttribute("required",true)
        document.getElementById("check3").setAttribute("required",true)
        document.getElementById("check4").setAttribute("required",true)
        document.getElementById("check5").setAttribute("required",true)
    }
  }

  function createInput(labelName,id,ph){
    const formgroupdiv = document.createElement("div")
    formgroupdiv.classList.add("form-group")
    const label = document.createElement("label")
    const labelTextNode = document.createTextNode(labelName+" : ")
    label.appendChild(labelTextNode)
    const attr = document.createAttribute("for")
    attr.value=id
    label.setAttributeNode(attr)
    formgroupdiv.appendChild(label)
    const field = document.createElement("input")
    field.id=id
    field.type="text"
    const attr1 = document.createAttribute("required")
    field.setAttributeNode(attr1)
    const attr2 = document.createAttribute("placeholder")
    attr2.value=ph
    field.setAttributeNode(attr2)
    field.classList.add("form-control")
    formgroupdiv.appendChild(field)
    return formgroupdiv
  }
  function createTextArea(labelName,id,ph){
    const formgroupdiv = document.createElement("div")
    formgroupdiv.classList.add("form-group")
    const label = document.createElement("label")
    const labelTextNode = document.createTextNode(labelName+" : ")
    label.appendChild(labelTextNode)
    const attr = document.createAttribute("for")
    attr.value=id
    label.setAttributeNode(attr)
    formgroupdiv.appendChild(label)
    const field = document.createElement("textarea")
    field.id=id
    const attr1 = document.createAttribute("required")
    field.setAttributeNode(attr1)
    const attr2 = document.createAttribute("placeholder")
    attr2.value=ph
    field.setAttributeNode(attr2)
    const attr3 = document.createAttribute("cols")
    attr3.value=30
    field.setAttributeNode(attr3)
    const attr4 = document.createAttribute("rows")
    attr4.value=5
    field.setAttributeNode(attr4)
    field.classList.add("form-control")
    formgroupdiv.appendChild(field)
    return formgroupdiv
  }

  function createCheckBox(name,id,str){
    const label = document.createElement("label")
    const labelTextNode = document.createTextNode(str)
    label.classList.add("checkbox-inline")
    const field = document.createElement("input")
    field.id=id
    field.type="checkbox"
    const attr1 = document.createAttribute("required")
    field.setAttributeNode(attr1)
    const attr2 = document.createAttribute("onchange")
    attr2.value="countChecked()"
    field.setAttributeNode(attr2)
    const attr4 = document.createAttribute("name")
    attr4.value=name
    field.setAttributeNode(attr4)
    field.classList.add("food-type")
    label.appendChild(field)
    label.appendChild(labelTextNode)
    return label
  }

  //H1 tag with id=title
  const t1 = document.createElement("h1")
  t1.id = "title"
  const t1textnode = document.createTextNode("DOM Manipulation with Forms")
  t1.appendChild(t1textnode)
  document.body.appendChild(t1)
  //<p> tag with id=description
  const desc = document.createElement("p")
  desc.id = "description"
  const descnode = document.createTextNode("Enter All the Details Given Below and Submit to Add All the details in Table")
  desc.appendChild(descnode)
  document.body.appendChild(desc)

  // DOM Form Creation inside Div
  const container = document.createElement("div")
  container.classList.add("container")
  const form = document.createElement("form")
  form.id="form"
  const subFunc = document.createAttribute("onsubmit")
  subFunc.value="return validateForm()"
  form.setAttributeNode(subFunc)
  form.appendChild(createInput("First Name","first-name","Enter First Name"))
  form.appendChild(createInput("Last Name","last-name","Enter Last Name"))

    const formgroupdiv = document.createElement("div")
    formgroupdiv.classList.add("form-group")
    const legend = document.createElement("label")
    const legendtextnode = document.createTextNode("Gender : ")
    legend.appendChild(legendtextnode)
    formgroupdiv.appendChild(legend)
    const r1 = document.createElement("input")
    r1.id="Male"
    r1.type="radio"
    const radattr1 = document.createAttribute("required")
    r1.setAttributeNode(radattr1)
    const radattr2 = document.createAttribute("name")
    radattr2.value="gender"
    r1.setAttributeNode(radattr2)
    const radlab = document.createElement("label")
    radlab.classList.add("radio-inline")
    const radlabtext = document.createTextNode("Male")
    const forlabel1 = document.createAttribute("for")
    forlabel1.value="Male"
    radlab.setAttributeNode(forlabel1)
    radlab.appendChild(radlabtext)
    radlab.appendChild(r1)  
    formgroupdiv.appendChild(radlab)  

    const r2 = document.createElement("input")
    r2.id="Female"
    r2.type="radio"
    const radattr3 = document.createAttribute("required")
    r2.setAttributeNode(radattr3)
    const radattr4 = document.createAttribute("name")
    radattr4.value="gender"
    r2.setAttributeNode(radattr4)
    const radlab1 = document.createElement("label")
    radlab1.classList.add("radio-inline")
    const radlabtext1 = document.createTextNode("Female")
    const forlabel2 = document.createAttribute("for")
    forlabel2.value="Female"
    radlab1.setAttributeNode(forlabel2)
    radlab1.appendChild(radlabtext1)
    radlab1.appendChild(r2)  
    formgroupdiv.appendChild(radlab1)  

    form.appendChild(formgroupdiv)


  form.appendChild(createTextArea("Address","address","Enter Address"))
  form.appendChild(createInput("State","state","Enter Your State"))
  form.appendChild(createInput("Country","country","Enter Country Name"))
  form.appendChild(createInput("Pincode","pincode","Enter Valid Pincode"))
  const cgroup = document.createElement("div")
  cgroup.classList.add("form-group")
    const clab = document.createElement("label")
    const clabtext = document.createTextNode("Food Type (Select At list two) : ")
    clab.appendChild(clabtext)
    cgroup.appendChild(clab)
    cgroup.appendChild(createCheckBox("option1","check1","Fruit and vegetables"))
    cgroup.appendChild(createCheckBox("option2","check2","Starchy Food"))
  cgroup.appendChild(createCheckBox("option3","check3","Dairy"))
  cgroup.appendChild(createCheckBox("option4","check4","Protine"))
  cgroup.appendChild(createCheckBox("option5","check5","Fat"))
  form.appendChild(cgroup)
  const btngr = document.createElement("div")
  btngr.classList.add("form-group")
  const btn = document.createElement("button")
  btn.type="submit"
  btn.id="submit"
  btn.classList.add("form-group")
  btn.classList.add("btn")
  btn.classList.add("btn-primary")
  const btntext = document.createTextNode("SUBMIT")
  btn.appendChild(btntext)
  btngr.appendChild(btn)
  form.appendChild(btngr)

  container.appendChild(form)


  // div with class=table-responsive
const tdiv = document.createElement("div")
tdiv.classList.add("table-responsive")
const tableElement = document.createElement("table")
tableElement.id = "table"
tableElement.classList.add("table")
tableElement.classList.add("table-bordered")
tdiv.appendChild(tableElement)
container.appendChild(tdiv)

document.body.appendChild(container)  
document.getElementById("pincode").setAttribute("pattern","^[0-9]{6}$")
// Insert table element with innerHtml
document.getElementById("table").innerHTML = `<thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th>Address</th>
                        <th>State</th>
                        <th>Country</th>
                        <th>Pincode</th>
                        <th>Food Type</th>
                    </tr>
                </thead>
                <tbody id="data">  
                </tbody>`






  
  
  