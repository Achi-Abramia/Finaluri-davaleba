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

                      //   PROGRESS BARS ON SCROLL

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

                       // COMMENDATION SLIDER

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

                    // LAST PROJECTS HOVER  FUNCTION

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
    
                        //  FORM LABEL REMOVE FUNCTION

    const inputFields = document.querySelectorAll(".form_inputs")

    inputFields.forEach((input) => {
        const inputLabel = input.nextElementSibling
        input.addEventListener("input", () => {
            if (input.value) {
                inputLabel.style.opacity = "0"
            } else {
                inputLabel.style.opacity = "1"
            }
        })
    })

                                    //  FORM VALIDATION

    const statusField = document.createElement("span")
    statusField.setAttribute("id", "status_field")
    const contactForm = document.getElementById("contact_form_content")
    const formContainer = document.querySelector(".contact_form_bars_container")
    formContainer.appendChild(statusField)

    contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("your_name");
    const email = document.getElementById("email");
    const website = document.getElementById("website");
    const message = document.getElementById("message");

         try {
           if (name.value.length < 4 || name.value.length > 15) {
             name.style.border = "4px solid #E93656";
             throw new Error("Name should contain from 4 to 15 letters");
           } else {
             name.style.border = "4px solid green";
           }
       
           const validateEmail = (mail) => {
             return String(mail)
               .toLowerCase()
               .match(
                 /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
               );
           };
       
           const isValidateEmail = validateEmail(email.value);
           if (!isValidateEmail) {
             email.style.border = "4px solid #E93656";
             throw new Error("Email is not valid");
           } else {
             email.style.border = "4px solid green";
           }
       
           const validateWebsite = (web) => {
             return String(web)
               .toLowerCase()
               .match(
                 /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/
               );
           };
       
           const isValidateWebsite = validateWebsite(website.value);
           if (!isValidateWebsite) {
             website.style.border = "4px solid #E93656";
             throw new Error("Website is not valid");
           } else {
             website.style.border = "4px solid green";
           }
       
           if (message.value === "" || message.value.length > 400) {
             message.style.border = "4px solid #E93656";
             throw new Error("Message should contain from 1 to 400 letters");
           } else {
             message.style.border = "4px solid green";
           }
                
         } catch (error) {
           statusField.textContent = error.message;
         }
       
         let xhr = new XMLHttpRequest();
         xhr.open("POST", "https://borjomi.loremipsum.ge/api/send-message", true);
         xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
       
         xhr.onreadystatechange = function () {
           if (xhr.readyState === XMLHttpRequest.DONE) {
             if (xhr.status >= 200 && xhr.status < 300) {
               modal_container.classList.add("show");
             }
           }
         };
       
         let data = {
           name: name.value,
           email: email.value,
           website: website.value,
           message: message.value,
         };
       
         xhr.send(JSON.stringify(data));
});

   const modal_container = document.createElement("div");
   modal_container.setAttribute("class", "modal_container");
   formContainer.appendChild(modal_container);
   const modal = document.createElement("div");
   modal.setAttribute("class", "modal");
   modal_container.appendChild(modal);
   const modal_span = document.createElement("span");
   modal.appendChild(modal_span);
   modal_span.textContent ="Thank you for getting in touch! We appreciate you contacting us.";
   const close_modal = document.createElement("button");
   close_modal.setAttribute("class", "close_modal");
   modal.appendChild(close_modal);
   close_modal.textContent = "CLOSE";

   close_modal.addEventListener("click", () => {
   modal_container.classList.remove("show");
   location.reload();
});

    // contactForm.addEventListener("submit", (e) => {
    //     e.preventDefault()

    //     const name = document.getElementById("your_name")
    //     const email = document.getElementById("email")
    //     const website = document.getElementById("website")
    //     const message = document.getElementById("message")

        

    //     try {
    //         if (name.value.length < 4 || name.value.length > 15) {
    //             name.style.border = "4px solid #E93656"
    //             throw new Error("Name should contain from 4 to 15 letters")
    //         } else {
    //             name.style.border = "4px solid green"
    //         }

    //         const validateEmail = (mail) => {
    //             return String(mail)
    //               .toLowerCase()
    //               .match(  
    //                 /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    //           }
    
    //           const isValidateEmail = validateEmail(email.value)
    //           if (!isValidateEmail) {
    //             email.style.border = "4px solid #E93656"
    //             throw new Error("Email is not valid")
    //           } else {
    //             email.style.border = "4px solid green"
    //           }

    //           const validateWebsite = (web) => {
    //             return String(web)
    //               .toLowerCase()
    //               .match(/^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/)
    //           }

    //           const isValidateWebsite = validateWebsite(website.value)
    //           if (!isValidateWebsite) {
    //             website.style.border = "4px solid #E93656"
    //             throw new Error("Website is not valid")
    //           } else {
    //             website.style.border = "4px solid green"
    //           }

    //           if (message.value === "" || message.value.length > 400) {
    //             message.style.border = "4px solid #E93656"
    //             throw new Error("Message should contain from 1 to 400 letters")
    //           } else {
    //             message.style.border = "4px solid green"
    //           }
              
    //           if (name.style.border === "4px solid green" && email.style.border === "4px solid green" && website.style.border === "4px solid green" && message.style.border === "4px solid green") {
    //             statusField.textContent = "Thank you, information sent successfully"
    //             statusField.style.color = "green"
    //             setTimeout(() => {
    //                 location.reload()
    //             }, 5000)
    //           } else {
    //             statusField.textContent = "An error occurred. please try again later"
    //           }

    //     } catch (error) {
    //         statusField.textContent = error.message
    //     }

    //     // const open = document.getElementsByClassName("send_message")
    //     // const modal_container = document.getElementById("modal_container");
    //     // const close = document.getElementById("close");

    //     //     open.addEventListener("click", () => {
    //     //     modal_container.classList.add("show")
    //     // })

    //     //     close.addEventListener("click", () => {
    //     //     modal_container.classList.remove("show")
    //     // })

    //         const formContent = new FormData(contactForm)
    //         const info = Object.fromEntries(formContent)

    //         fetch("https://jsonplaceholder.typicode.com/posts", {
    //             method:"POST",
    //             body: JSON.stringify(info)
    //         })
    //             .then(res => res.json())
    //             .then(data => console.log(data))
    //             .then(error => console.log(error))


    //             // ნამდვილად ძალიან ვეცადე მაგრამ არ გამომივიდა

    //         let xhr = new XMLHttpRequest()
    //         xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true)
    //         xhr.setRequestHeader("content-type", "application/json;charset=UTF-8")
    //         xhr.onreadystatechange = function () {
    //         if (xhr.readyState === XMLHttpRequest.DONE && xhr.status >= 200 && xhr.status < 300) {
    //             alert("message sent")
    //         } else if (xhr.readyState === XMLHttpRequest.DONE) {
    //             alert("error")
    //         }
    //     }
    // })

            

        
