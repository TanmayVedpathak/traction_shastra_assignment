const slideIcon = [...document.getElementsByClassName("slide_icon")]
const slideSlide = [...document.getElementsByClassName("service_slide")]



slideIcon.forEach(element => {
    element.addEventListener('click', (event) => {
        slideSlide.forEach(item => {
            item.classList.remove("active_slide")
        })
        const parentElement = event.target.parentElement.parentElement.parentElement
        parentElement.classList.add("active_slide")
    })
});
