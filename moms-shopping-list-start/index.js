const form = document.addItem
const ul = document.getElementById("list")
form.addEventListener("submit", function(event){
    event.preventDefault()

    const title = form.title.value
    console.log(title)

    form.title.value=""
const li = document.createElement("li")

   ul.appendChild(li)
    
 const div = document.createElement("div")
 div.textContent = title
 li.appendChild(div)

 const toDelete = document.createElement("button")
 toDelete.setAttribute("id", "deletex")
 toDelete.textContent = "x"
 li.appendChild(toDelete)
toDelete.addEventListener("click",function(){
    li.remove();

})






 const toEdit = document.createElement("button")
 toEdit.setAttribute("id","toEditx")
 toEdit.textContent = "edit"
 li.appendChild(toEdit)
toEdit.addEventListener("click",function(){
   
    console.log ("yes")
    

    
})


})



   


