let info=[
    {uderid: "E355", pssword: 1244},
    {uderid: "E055", pssword: 1044},
    {uderid: "E785", pssword: 1904},
]

let form= document.getElementById("form")
let editindex=null

form.addEventListener("submit", function(e){
    e.preventDefault();
    let i1=document.getElementById("i1").value
    let i2=document.getElementById("i2").value
    let obj={ uderid: i1, pssword : i2}

    if(editindex==null){
        info.push(obj)
        document.getElementById("msg").innerText="Insert"
        document.getElementById("msg").style.color="green"
    }
   else{
    info[editindex]=obj;
     document.getElementById("msg").innerText="Update"
     document.getElementById("msg").style.color="orange"
     editindex=null
     document.getElementById("btn").innerText="Save"
   }
    loadData();
    reset();
})

let tbody=document.getElementById("tbody")
function loadData(){
    tbody.innerHTML=""
    info.map((e,key)=>{
        let tr= document.createElement("tr");
        tr.innerHTML=`
        <td>${e.uderid}</td>
        <td>${e.pssword}</td>
        <td><button onclick=updateData('${key}')>Edit</button></td>
        <td><button onclick=deleteData('${key}')>Delete</button></td>
        `
        tbody.append(tr)
    })
    document.getElementById("sp").innerText="Total Candidate are "+info.length
}
function deleteData(key){
    if(window.confirm("Are You Sure?")){
        info.splice(key,1)
        document.getElementById("msg").innerText="Delet"
        document.getElementById("msg").style.color="red"
        loadData();
        reset();
    }
}
function updateData(key){
        document.getElementById("i1").value=(info[key].uderid)
        document.getElementById("i2").value=(info[key].pssword)
        document.getElementById("i2").type="text"
        document.getElementById("btn").innerText="Update"
        editindex=key
    }

    function reset(){
        document.getElementById("i1").value=""
        document.getElementById("i2").value=""
    }


loadData()