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

    window.location.replace("./pages/index.html");
})

console.log(inp_username.value);


const inp_usernames = document.querySelector("#username")
const inp_passwords = document.querySelector("#pass")

if(inp_usernames.value == localStorage.getItem("username") && inp_passwords == localStorage.getItem("password")){
    function style(){
        document.getElementsByClassName("div").style.backgroundColor = "red";
        document.getElementsByClassName("div").style.zIndex = "-1";
    }
}

const loginBtn = document.querySelector(".login")
const signBtn = document.querySelector(".sign")
const formLogin = document.querySelector("#login")
const formSignUp = document.querySelector("#signup")

loginBtn.addEventListener("click", ()=>{
    formSignUp.style.display = "none"
    formLogin.style.display = "block"
    
    loginBtn.style.color = "rgba(18, 167, 251, 1)"
    signBtn.style.color = "white"
})

signBtn.addEventListener("click", ()=>{
    formLogin.style.display = "none"
    formSignUp.style.display = "block"

    signBtn.style.color = "rgba(18, 167, 251, 1)"
    loginBtn.style.color = "white"
})