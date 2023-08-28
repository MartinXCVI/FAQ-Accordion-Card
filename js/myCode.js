const ARROWS = document.querySelectorAll(".subtitle-and-symbol");

ARROWS.forEach(function(btn) {
    
    btn.addEventListener("click", function(e) {
        const question = e.currentTarget.parentElement.querySelector('.art');
        question.classList.toggle("show-text");
    })

    btn.addEventListener("keypress", function(e) {
        const question = e.currentTarget.parentElement.querySelector('.art');
        question.classList.toggle("show-text");
    })

});