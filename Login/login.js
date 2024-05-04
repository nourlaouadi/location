const container= document.querySelector(".container"),
      psw = document.querySelectorAll(".psw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");



psw.forEach(eyeIcon =>{
    eyeIcon.addEventListener("click", ()=>{
        pwFields.forEach(pwFields =>{
            if(pwFields.type === "password"){
                pwFields.type="text";

                psw.forEach(icon =>{
                    icon.classList.replace("fa-eye-slash","fa-eye");
                })
            }else{
                pwFields.type="password";

                psw.forEach(icon =>{
                    icon.classList.replace("fa-eye","fa-eye-slash");
                })
            }

        })
})  })


// js code
signUp.addEventListener("click", ( )=>{
    container.classList.add("active");
});
login.addEventListener("click", ( )=>{
    container.classList.remove("active");
    
});