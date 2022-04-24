const root = document.getElementById("root")
class Data {
    constructor(data){
        this.data=data;
        this.condition = false
    }
}
let ListToDo = []

function createNewItem(newtodo){
    let container = document.createElement("div")
    container.style.border="1px solid black"
    container.style.backgroundColor="white"
    container.style.color="black"
    let input = document.createElement("input")
    input.type="checkbox"
    input.checked = false
    input.name = newtodo
    container.append(input)
    container.append(`${newtodo}`)
    
    return container
}

function inputToDo(){
    let container = document.createElement("div")
    container.innerHTML = `
    <input id="userinput" type="text" value="" >
    <button id="add">ADD</button>
    `
    return container
}

root.append(inputToDo())

let add = document.getElementById("add")
    let alltodo = document.createElement("div")
    add.onclick = function(){

        let input = document.getElementById("userinput")    
        let temp = new Data(input.value)
        ListToDo.push(temp)
        alltodo.append(createNewItem(temp.data))
        clear.before(alltodo)
        input.value = ""
        }
 let clear = document.createElement("button")
        clear.innerHTML=`clear`
 let hide = document.createElement("button")
        hide.innerHTML =`clear everything done`
        root.append(clear,hide)

clear.onclick = function(){
    
    alltodo.innerHTML=""
    ListToDo = [];
}

hide.onclick = function(){
    
    let tempLIST = document.querySelectorAll("input[type=checkbox]")
    let divs = alltodo.children;
    ListToDo.map(function(ite,index){
        if(tempLIST[index].checked == true) {ListToDo[index].condition=true}
        alltodo.innerHTML = ""
        ListToDo.forEach(function(item){
        if(item.condition == false) alltodo.append(createNewItem(item.data))
    })
    })
        
}