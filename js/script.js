const menuIcon = document.getElementById("menu_icon")
const navList = document.getElementById("navbar_list")
const copyrightText = document.getElementById("copyright_text")

const date = new Date()

copyrightText.innerText += ` ${date.getFullYear()}`

menuIcon.addEventListener("click", () => {
    navList.classList.toggle("navbar_list_top")
})