"use strict"

// let dragElem=document.querySelector(".item")

// let dropElem=document.querySelector(".drop-elem")

let icon = document.querySelector("i")

let tableBody = document.querySelector("table tbody")

let input = document.querySelector("input")

// let dragArea=document.querySelector(".upload")


// let file;

// icon.onclick=()=>{
//     input.click();
// }



// dragArea.addEventListener("dragover",(event)=>{
//     event.preventDefault();
//     console.log("sjsd")
//     dragArea.classList.add("active")

// })

// dragArea.addEventListener("dragleave",()=>{

//     console.log("File left drag area")
//     dragArea.classList.remove("active")
// })

// dragArea.addEventListener("drop",(event)=>{
//     event.preventDefault();
// console.log("esff")

// file=event.dataTransfer.files[0];

// let fileType=file.type;


// let images=["image.png,image.png,image.png"]
// if(images.includes(fileType)){

//     let fileReader=new FileReader();

//     fileReader.onloadend=()=>{
//         let fileURl=fileReader.result;
//          console.log(fileURl)
//          let imgTag=`<img src="${file.URL}" alt="">`;
//          dragArea.innerHTML=imgTag
//     }
//     fileReader.readAsDataURL(file)
// }
// else{
//     alert("This is not image");
//     dragArea.classList.remove("active")
// }
// })



 icon.addEventListener("click", function () {
    this.nextElementSibling.click();

 })

 input.addEventListener("change", function (e) {
     for (const file of e.target.files) {
         let reader = new FileReader();
         reader.onloadend = (event) => {
             let base64 = event.currentTarget.result;  
               tableBody.innerHTML += `<tr>
             <td><img src="${base64}" alt=""></td>
             <td>${file.name}</td>
             <td>${file.size}</td>

         </tr>`

        }
        reader.readAsDataURL(file)

    }



 })