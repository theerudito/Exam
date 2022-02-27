
const boton = document.getElementById("boton")
const hideText = document.getElementById("myDIV")

//BUSQUEDA
const buscar = document.getElementById("buscar")
const rows = document.getElementsByTagName("td")

buscar.addEventListener("keyup", (e) => {
  let texto = e.target.value
  //console.log(texto);
  let er = new RegExp(texto, "i")
  for (let i = 0; i < rows.length; i++) {
    let valor = rows[i]
    //console.log(valor);
    er.test (valor.innerText) ? valor.classList.remove("query") : valor.classList.add("query") 
}
})

const mostrar = () => {
  let x = document.getElementById("myDIV");
      x.style.display === "none" ? x.style.display = "block" : x.style.display = "none";
}


url = "https://api.hatchways.io/assessment/students"
const getData = async () => {
  try {
    const res = await fetch (url)
    //console.log(res);
    const data = await res.json()
    //console.log(data.students);
    let principal = ""
     
    data.students.forEach(item => {
    //console.log(item);
    principal+= ` 
                      <tr><td>

                      <img id="img" src=${item.pic}>

                      <h2 id="names">${item.firstName.toUpperCase()} ${item.lastName.toUpperCase()} </h2> 

                      <h5 id="email">Email: ${item.email}</h5>

                      <h5 id="company">Company: ${item.company}</h5>
                
                      <h5 id="skills">Skills: ${item.skill}</h5>
              
                      <h5 id="average">Average: ${item.grades.reduce((a,b) => a%b)}% </h5>

                      <input id="tex" placeholder="Add Tag"><button id="adds" onclick="data()">+</button></input>
                      
                      <ul id="lis">
                      </ul>

                      <div id="myDIV">
                
                      <h5 id="test">test 1: ${item.grades[1]}%</h5>
                      <h5 id="test">test 2: ${item.grades[2]}%</h5>
                      <h5 id="test">test 3: ${item.grades[3]}%</h5>
                      <h5 id="test">test 4: ${item.grades[4]}%</h5>
                      <h5 id="test">test 5: ${item.grades[5]}%</h5>
                      <h5 id="test">test 6: ${item.grades[6]}%</h5>
                      <h5 id="test">test 7: ${item.grades[7]}%</h5>
                    </div>
                    </td>
                    </tr>
                      ` 
    });

    document.getElementById("principal").innerHTML = principal
    
  } catch (error) {
    console.log(error);
  }
}  

getData()

const add = document.getElementById("adds")
const data = () => {
  const inputs = document.getElementById("tex").value
  const list = document.querySelector("ul")
  console.log(inputs);
    const li = document.createElement("li")
    li.textContent = inputs
    list.appendChild(li)
}








