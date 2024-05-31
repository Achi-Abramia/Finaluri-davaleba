       //   MAIN SLIDER

    const slidePictures = document.querySelector(".slide_pictures")
    const images = document.querySelectorAll(".slide_pictures img")

    let slideIndex = 0
    let intervalId = setInterval(slideShow, 5000)


    function slideShow() {
        slideIndex++
        if (slideIndex >= images.length) {
            slideIndex = 0
        }
        moveSlide()
    }

    function moveSlide() {
        const next = -slideIndex * 100
        slidePictures.style.transform = `translate(${next}%)`
    }

    function nextSlide() {
        clearInterval(intervalId)
        intervalId = setInterval(slideShow, 5000)
        slideIndex++
        if (slideIndex >= images.length) {
            slideIndex = 0
        }
        moveSlide()
    }

    function prevSlide() {
        clearInterval(intervalId)
        intervalId = setInterval(slideShow, 5000)
        slideIndex--
        if (slideIndex < 0) {
            slideIndex = images.length -1
        }
        moveSlide()
    }
// const slidePictures = document.getElementsByClassName(".slide_pictures")
// const images = document.querySelectorAll(".slide_pictures img")

// let slideIndex = 0
// setInterval(slideShow, 1000)

// function slideShow() {
//     slideIndex++
//     if (slideIndex >= images.length) {
//         slideIndex = 0
//     }
//     nextSlide()
// }

// function nextSlide() {
//     const next = -slideIndex * 100
//     slidePictures.style.transform = `transalteX(${next})`
// }

