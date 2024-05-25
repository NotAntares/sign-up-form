const pwd = document.getElementById('pwd');
const conPwd = document.getElementById('conpwd');
const form = document.querySelector("form");

conPwd.addEventListener("keyup", (event)=>{
   if(pwd.value !== conPwd.value){
    conPwd.style.backgroundColor = "rgba(220, 23, 23, .2)";
   } else{
    conPwd.style.backgroundColor = "#fff";
    console.log("same");
   }

});

// function checkPasswords() {
//     console.log("tapped");
//     conPwd.style.backgroundColor ="blue";
// }