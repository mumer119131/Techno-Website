
const data = {
    "data":[{
        "source" : "mobile5.png",
        "firstName" : "TECHNO CAMON",
        "secondName" : " 7 Pro",
        "processor" : "Snap Dragon 888",
        "android" : "Android 11, HIOS 7.5",
        "display" : "IPS LCD, 90Hz",
        "camera" : "48 MP, PDAF",
        "record" : "1080p@30fps",
        "wifi" : "Wi-Fi 802.11 b/g/n, hotspot",
        "board" : "Mali-G52 MC2",
    },
    {
        "source" : "mobile3.png",
        "firstName" : "TECHNO SPARK",
        "secondName" : " 12 Pro",
        "processor" : "Snap Dragon 888+",
        "android" : "Android 12, HIOS 7.5",
        "display" : "IPS LCD, 90Hz",
        "camera" : "68 MP, PDAF",
        "record" : "4k@90fps",
        "wifi" : "Wi-Fi 802.11 b/g/n, hotspot",
        "board" : "Mali-G52 MC2",
    }]
};

// Phone Script

const left = document.getElementById("left");
const right = document.getElementById("right");
const phone = document.getElementById("phone");
// const jsonObj = JSON.parse(data);
var current_index = 0;


left.addEventListener("click",()=>{
    if(current_index == 0){
        current_index = images.length-1;
    }else{
        current_index = current_index  - 1;
    }
    setValues();
    phone.src = images[current_index][0];
});


right.addEventListener("click",()=>{
    if(current_index == data.data.length-1){
        current_index = 0;
    }else{
        current_index = current_index + 1;
    }
    setValues();
    // phone.src = images[current_index][0];
});

phone.addEventListener("click",()=>{
    console.log("phone");
});

const setValues = () =>{
    phone.src = data.data[current_index].source;
    document.getElementById("processor").innerHTML = data.data[current_index].processor;
    document.getElementById("android").innerHTML = data.data[current_index].android;
    document.getElementById("screen").innerHTML = data.data[current_index].display;
    document.getElementById("camera").innerHTML = data.data[current_index].camera;
    document.getElementById("record").innerHTML = data.data[current_index].record;
    document.getElementById("wifi").innerHTML = data.data[current_index].wifi;
    document.getElementById("m-board").innerHTML = data.data[current_index].board;
    document.getElementById("first-name").innerHTML = data.data[current_index].firstName;
    document.getElementById("second-name").innerHTML = data.data[current_index].secondName;
    document.getElementById("phone").classList.add("animatePic");
}
//blur onclick
// var itemToBlur = document.getElementById("content");
var itemToBlur = document.getElementById("main")
var buy_btn = document.getElementById("buy");
var popup = document.getElementById("popup-msg");
var close_pop = document.getElementById("close-pop")
var trans_anim = document.getElementById("trans-anim")
buy_btn.addEventListener('click',()=>{
    int = setInterval(displayMoney,10);
    popup.style.visibility = "visible"
    itemToBlur.style.filter = "blur(10px)";
});
close_pop.addEventListener("click",()=>{
    popup.style.visibility = "hidden"
    itemToBlur.style.filter = "blur(0px)"
    money = 0;
});

money = 0;
var trans_money = document.getElementById("trans-money");
function displayMoney(){
    if(money >= 99){
        clearInterval(int);
    }else{
        money++;
    }
    trans_money.innerHTML = `${money}$`
}




