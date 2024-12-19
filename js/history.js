//////////////SCROLLBAR ANIMATIONS//////////
var prog = document.getElementById("progress");

window.addEventListener('scroll', scrollA);
function scrollA() {
    const scrolled = window.scrollY;
    const lastHeight = document.getElementById("last").clientHeight;
    prog.style.height = (scrolled - 5 - lastHeight) + 'px';

    const windowHeight = document.getElementById("timeline").clientHeight;

    if ((scrolled) >= (windowHeight)) {
        prog.classList.add("active");
    } else {
        prog.classList.remove("active");
    }
}



//////////////TIMELINE ANIMATIONS//////////
const observer = new IntersectionObserver((entries) => {
    // Loop over the entries
    entries.forEach((entry) => {
        // If the element is visible
        if (entry.isIntersecting) {
            // Add the animation class
            entry.target.classList.add("active");
        } else {
            entry.target.classList.remove("active");
        }
    });
});
// Get multiple elements instead of a single one using "querySelectorAll"
var sponsors = document.querySelectorAll(".text");

// Loop over the elements and add each one to the observer
sponsors.forEach((element) => observer.observe(element));