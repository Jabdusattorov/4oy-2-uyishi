const cancel_x = document.querySelector("#cancel")
const modal = document.querySelector(".modal")
const createTheme = document.querySelector(".createbtn")
const create = document.querySelector(".create")
const cancel = document.querySelector(".cancel")
const section = document.querySelector("section")

cancel.addEventListener("click", ()=>{
    modal.style.display = "none"
})
createTheme.addEventListener("click", ()=>{
    modal.style.display = "block"
})
cancel_x.addEventListener("click", ()=>{
    modal.style.display = "none"
})

function createBox(img, title, description){
    const box = document.createElement("div")
const box_1 = document.createElement("div")
const box_2 = document.createElement("div")
const box_3 = document.createElement("div")

const titleCard = document.createElement("div")
const descCard = document.createElement("div")
titleCard.className = "tit"
descCard.className = "des"

box_2.append(titleCard)
box_2.append(descCard)

titleCard.textContent = title
descCard.textContent = description

box_1.innerHTML = `<img src="${img}" alt="Bu yerda rasm bor"> <i class="fa-regular fa-heart"></i>  <i class="fa-solid fa-heart-crack"></i>`

box.className = "box"
box_1.className = "box-1"
box_2.className = "box-2"
box_3.className = "box-3"

box.append(box_1)
box.append(box_2)
box.append(box_3)

section.append(box)
    return box;
}

create.addEventListener("click", function(){
    const m_image = document.getElementById("m-img")
    const m_desc = document.getElementById("m-desc")
    const m_title = document.getElementById("m-title")
    
    localStorage.setItem(`${m_image.value}`, m_image.value)
    localStorage.setItem(`${m_title.value}`, m_title.value)
    localStorage.setItem(`${m_desc.value}`, m_desc.value)
    
    createBox(
        localStorage.getItem(`${m_image.value}`),
        localStorage.getItem(`${m_title.value}`),
        localStorage.getItem(`${m_desc.value}`),
    )
    modal.style.display = "none"
    m_image.value = ""
    m_title.value = ""
    m_desc.value = ""
})
