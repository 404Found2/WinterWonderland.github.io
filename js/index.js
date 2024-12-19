var dys = document.getElementById("days")
var hrs = document.getElementById("hours")
var mins = document.getElementById("minutes")
var scs = document.getElementById("seconds")


function timer() {
    const start = new Date();
    var christmas;
    if (new Date().getMonth() < 10) {
        christmas = new Date(new Date().getFullYear(), 11, 25, 0, 0, 0, 0);
    } else if (new Date().getMonth() == 11 && new Date().getDay() < 25) {
        christmas = new Date(new Date().getFullYear(), 11, 25, 0, 0, 0, 0);
    } else {
        christmas = new Date(new Date().getFullYear() + 1, 11, 25, 0, 0, 0, 0);
    }
    var diff = christmas - start;

    var counter = diff;
    var days = Math.floor(counter / (24 * 60 * 60 * 1000));
    counter -= (days * (24 * 60 * 60 * 1000));
    var hours = Math.floor(counter / (60 * 60 * 1000));
    counter -= (hours * (60 * 60 * 1000));
    var minutes = Math.floor(counter / (60 * 1000));
    counter -= (minutes * (60 * 1000));
    var seconds = Math.floor(counter / (1000));
    counter -= (seconds * (1000));

    dys.innerHTML = days;
    hrs.innerHTML = hours;
    mins.innerHTML = minutes;
    scs.innerHTML = seconds;


    var options = {
        year: 'numeric', month: 'long', day: 'numeric'
    };
    document.getElementById("nxtH").innerHTML = ["Sun.", "Mon.", "Tues.", "Wed.", "Thurs.", "Fri.", "Sat."][christmas.getDay()] + " " + christmas.toLocaleString('en-US', options);

}

setInterval(timer, 500);

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
var sponsors = document.querySelectorAll(".hook");

// Loop over the elements and add each one to the observer
sponsors.forEach((element) => observer.observe(element));