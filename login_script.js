//login-functions-from-here
var pop_msg_review = document.getElementById("popup-msg-login");
var login_btn = document.getElementById("login-pop");
var itemToBlur = document.getElementById("main")
// var pop_msg = document.getElementById("popup-msg");

login_btn.addEventListener("click",()=>{
    console.log(itemToBlur)
    pop_msg_review.style.visibility = "visible";
    itemToBlur.style.filter = "blur(10px)"
    pop_msg_review.classList.add("pop_anim");
    
})

document.getElementById("close-pop").addEventListener("click",()=>{
    pop_msg_review.style.visibility = "hidden";
    itemToBlur.style.filter = "blur(0px)"
})