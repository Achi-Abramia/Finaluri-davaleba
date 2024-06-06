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


    function move(elementId, elementWidth) {
        var elem = document.getElementById(elementId)
        var width = 1
        var id = setInterval(frame, 20)
        function frame() {
            if (width >= elementWidth) {
                clearInterval(id)
            } else {
                width++
                elem.style.width = width + "%"
            }
        }
    }

    let scrollCount = 0

    window.addEventListener("scroll", function() {
        scrollCount++
        if (scrollCount === 30) {
            move("html_bar", 100)
            move("css_bar", 80)
            move("javascript_bar", 50)
            move("github_bar", 70) 
        }
    })

    const recSlideBox = document.querySelectorAll(".rec_container_card")
    const recSliderDots = document.querySelectorAll(".rec_slider_button")
    let recSlideIndex = 0

    function recSlider(index) {
        recSlideBox.forEach((box, i) => {
            box.classList.toggle("active", i === index)
        })
        recSliderDots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index)
        })
    }

    recSliderDots.forEach((dot) => {
        dot.addEventListener("click", () => {
            recSlideIndex = parseInt(dot.getAttribute("slide_id"))
            recSlider(recSlideIndex)
        })
    })

    recSlider(recSlideIndex)

    // const recCardContainer = document.querySelector(".rec_slide")
    // const dots = document.querySelectorAll(".rec_slider_button")
    // let activeDotId = 0

    // dots.forEach((dot, idx) => {
    //     dot.setAttribute("data-num", idx)
    //     dot.addEventListener("click", e => {
    //         let clickedDotNum = e.target.dataset.num
    //         if (clickedDotNum == activeDotId) return
    //         else {
    //             let displayAreaWidth = document.querySelector(".rec_container").clientWidth
    //             let pixelsToMove = -displayAreaWidth * clickedDotNum
    //             recCardContainer.style.transform = 'translateX(' + pixelsToMove + 'px)'
    //         }
    //     })
    // })

    const links = document.querySelectorAll("nav a[id]")
    const cardBox = document.querySelectorAll(".hover_project_container")
    const showAll = document.getElementById("all")

    links.forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault()
            const targetId = this.getAttribute("id")
            showCardBox(targetId)
        })
    })

    showAll.addEventListener("click", function (event) {
        event.preventDefault()
        showAllCardBox()
    })

    function showCardBox(targetId) {
        cardBox.forEach((box) => {
            if (box.id === targetId) {
                box.classList.add("focused")
                box.classList.remove("blurred")
                box.classList.remove("hidden")
            } else {
                box.classList.add("blurred")
                box.classList.remove("focused")
                box.classList.remove("hidden")
            }
        })
    }

    function showAllCardBox() {
        cardBox.forEach((box) => {
            box.classList.remove("blurred")
            box.classList.remove("focused")
            box.classList.remove("hidden")
        })
    }

    const linkBtn = document.querySelectorAll(".link_btn")

    linkBtn.forEach(btnEl => {
        btnEl.addEventListener("click", () => {
            document.querySelector(".link_btn_color")?.classList.remove("link_btn_color")
            btnEl.classList.add("link_btn_color")
        })
    })