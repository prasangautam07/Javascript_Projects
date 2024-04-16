document.addEventListener("DOMContentLoaded", function() {
    let boxes = document.querySelectorAll(".box");
    let btn = document.querySelector(".nxt-btn");

    btn.addEventListener("click", function() {
        boxes.forEach(box => {
            let currentBox = box.querySelector(":not(.hide)");
            let nextBox = currentBox.nextElementSibling || box.firstElementChild;
            currentBox.classList.add("hide");
            nextBox.classList.remove("hide");
        });
    });
});