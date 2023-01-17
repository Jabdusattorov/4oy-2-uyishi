const inp_username = document.getElementById("username")
const inp_name = document.getElementById("name")
const inp_email = document.getElementById("email")
const inp_password = document.getElementById("pass")

const signup = document.querySelector("#sign-up")
signup.addEventListener("click", ()=>{
    localStorage.setItem("username", inp_username.value)
    inp_username.value = localStorage.getItem("username")
    
    localStorage.setItem("name", inp_name.value)
    inp_name.value = localStorage.getItem("name")

    localStorage.setItem("email", inp_email.value)
    inp_email.value = localStorage.getItem("email")

    localStorage.setItem("password", inp_password.value)
    inp_password.value = localStorage.getItem("name")

    location.window("./pages/index.html")
})

console.log(inp_username.value);