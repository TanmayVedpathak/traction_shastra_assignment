const slides = document.getElementsByClassName('slide');
const apiImg = document.getElementById("api_image")
const apiVid = document.getElementById("api_video")
var apiImages = []
var imageSrc = 0
let currentSlide = 0;

function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    showSlide();
}

function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide();
}

function showSlide() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = 0;
    }

    slides[currentSlide].style.opacity = 1;
}

const handleImageChange = () => {
    setInterval(() => {
        if (imageSrc === apiImages.length) {
            imageSrc = 0
        }
        apiImg.setAttribute("src", apiImages[imageSrc])
        imageSrc++;
    }, 2000)
}

fetch("https://images-assets.nasa.gov/video/Earth%20Views/collection.json")
    .then(resp => {
        if (!resp.ok) {
            console.log("Error fetching data")
        }
        return resp.json()
    })
    .then(data => {
        data.forEach(element => {
            if (element.includes(".jpg") || element.includes(".png")) {
                apiImages.push(element)
            } else if (element.includes(".mp4")) {
                apiVid.childNodes[1].setAttribute("src", element)
                apiVid.load()
            }
        });

        if (apiImages.length > 0) {
            handleImageChange()
        }
        // for (let i = 0; i < data.length; i++) {
        //     if (data[i].includes(".jpg")) {
        //         apiImg.setAttribute("src", data[i])
        //         break
        //     }
        // }
    })
