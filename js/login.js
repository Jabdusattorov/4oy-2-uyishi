const inp_username = document.querySelector("#username")
const inp_password = document.querySelector("#pass")
const signup = document.querySelector("#sign-up")


if(inp_username.value == localStorage.getItem("username") && inp_password == localStorage.getItem("password")){
    function style(){
        document.getElementsByClassName("div").style.backgroundColor = "red";
        document.getElementsByClassName("div").style.zIndex = "-1";
    }
}

