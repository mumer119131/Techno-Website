const images = ["mobile.png","mobile1.png"];

// Phone Script

const left = document.getElementById("left");
const right = document.getElementById("right");
const phone = document.getElementById("phone");
var image_index = 0;


left.addEventListener("click",()=>{
    if(image_index == 0){
        image_index = images.length-1;
    }else{
        image_index = image_index  - 1;
    }
    phone.src = images[image_index];
});


right.addEventListener("click",()=>{
    if(image_index == images.length-1){
        image_index = 0;
    }else{
        image_index = image_index + 1;
    }
    phone.src = images[image_index];
});

phone.addEventListener("click",()=>{
    console.log("phone");
});