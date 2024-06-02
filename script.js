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


    // function move() {
    //     var elem = document.getElementById("myBar");
    //     var width = 1;
    //     var id = setInterval(frame, 40);
    //     function frame() {
    //       if (width >= 80) {
    //         clearInterval(id);
    //       } else {
    //         width++;
    //         elem.style.width = width + '%';
    //       }
    //     }
    //   }

    //   let scrollCount = 0;

    //     document.addEventListener('scroll', function() {
    //         scrollCount++;
    //         if (scrollCount === 10) {
    //             move();
    //         }
    //     });
