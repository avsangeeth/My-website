window.onload = function() {
    let x = document.getElementById("buttonone");
    let icon = document.getElementById("buttonicon")
    let insta = document.getElementById("instagram")
    let form = document.getElementById("form8")
    let btn = document.getElementById("messagebutton")
    x.addEventListener("click", function() {
        if (icon.classList.contains("fa-align-left")) {
            document.getElementById("navone").style.background = " rgba(0, 0, 0, 0.5)"
            icon.classList.remove("fa-align-left");
            icon.classList.add("fa-times");
        } else {
            icon.classList.remove("fa-times");
            icon.classList.add("fa-align-left");
            document.getElementById("navone").style.background = "transparent"
        }
    });
    insta.addEventListener("click", function() {
        window.open("https://www.instagram.com/sangeeth__pacheni/");
    })
    btn.addEventListener("click", function() {
        window.open("mailto:avsangeeth372@gmail.com?cc=avsangeeth372@gmail.com&bcc=avsangeeth372@gmail.com&subject=From%20Website&body=" + form.value + "%20")
    })

}