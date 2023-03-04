"use strict"

// let form=document.querySelector("form")

// form.addEventListener("submit",function(e){
//     e.preventDefault();
//     console.log("form submitted");
// })

// let dragElem=document.querySelectorAll(".item");

// let dropElem=document.querySelector(".drop-elem");


// dragElem.ondrag=()=>{
//     console.log("drag-continue")
// }
// dragElem.ondragend=()=>{
//     console.log("drag-end")
// }
// dragElem.ondragstart=(e)=>{
//     e.dataTransfer.setData("id",e.target.getAttribute("id"))

// }

// dropElem.ondragover =(e)=>{
//    e.preventDefault();
     
// }

// for (const elem of dragElems) {
//     dragElems.ondragstart=(e)=>{
//         e.dataTransfer.setData("id",e.target.getAttribute("id"))
    
//     }
// }

// dropElem.ondrop =(e)=>{

//     let id= e.dataTransfer.getData("id");

//     let elem=document.getElementById(id);

//     dropElem.append(elem)
// }


let input=document.querySelector("input");
let icon=document.querySelector("i")

let tableBody=document.querySelector(" table tbody")

// function inputTrigger(e){
//     e.nextElementSibling.click();
// }

// icon.addEventListener("click",inputTrigger)

icon.addEventListener("click",function(){
  this.nextElementSibling.click();
})

input.addEventListener("change",function(e){
  for (const file of e.target.files) {
   let reader=new FileReader();

   reader.onloadend=(event)=>{
    //   document.querySelector("img").setAttribute("src",event.currentTarget.result)
    // console.log(event.currentTarget.result+"---"+file.name+"---"+file.size)
   let base64=event.currentTarget.result
    tableBody.innerHTML+=`{/* <tr>
    <td><img src="${base64}" alt=""></td>
    <td>${file.name}</td>
    <td>${file.size}/1024 Kb</td>
    
    </tr> */}`

   }
   file.readAsDataUrl(file)
    
  }
})





