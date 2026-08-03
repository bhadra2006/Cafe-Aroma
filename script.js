// =========================
// Typing Animation
// =========================

const text = "Handcrafted for Every Craving.";
const typingText = document.getElementById("typing-text");

let index = 0;

function typeEffect() {

    if (index < text.length) {

        typingText.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeEffect, 80);

    }

}

window.onload = typeEffect;


// =========================
// Scroll Reveal Animation
// =========================

const reveals = document.querySelectorAll(".reveal");

function revealSections() {

    reveals.forEach(section => {

        const windowHeight = window.innerHeight;

        const revealTop = section.getBoundingClientRect().top;

        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();


// =========================
// Active Navbar Highlight
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// =========================
// Scroll To Top Button
// =========================

const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {

        topBtn.style.display = "block";

    }

    else {

        topBtn.style.display = "none";

    }

};

topBtn.onclick = function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};


// =========================
// Hero Button Animation
// =========================

const menuBtn = document.querySelector(".menu-btn");

setInterval(() => {

    menuBtn.animate([

        {
            transform: "translateY(0px)"
        },

        {
            transform: "translateY(-6px)"
        },

        {
            transform: "translateY(0px)"
        }

    ], {

        duration: 1800

    });

}, 2500);


// =========================
// Menu Card Hover Effect
// =========================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transition = ".35s";

    });

});


// =========================
// Gallery Hover Brightness
// =========================

const galleryImages = document.querySelectorAll(".gallery-images img");

galleryImages.forEach(img => {

    img.addEventListener("mouseenter", () => {

        img.style.filter = "brightness(110%)";

    });

    img.addEventListener("mouseleave", () => {

        img.style.filter = "brightness(100%)";

    });

});

// ======================================
// Customer Dashboard Counter Animation
// ======================================

const customerCounter = document.getElementById("customerCounter");
const ratingCounter = document.getElementById("ratingCounter");
const returnCounter = document.getElementById("returnCounter");

let counterStarted = false;

function animateCounters() {

    if (counterStarted) return;

    const reviewSection = document.getElementById("reviews");

    if (!reviewSection) return;

    const sectionTop = reviewSection.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight - 150) {

        counterStarted = true;

        // Happy Customers
        let customers = 0;

        const customerInterval = setInterval(() => {

            customers++;

            customerCounter.innerText = customers + "+";

            if (customers >= 120) {

                clearInterval(customerInterval);

            }

        }, 18);


        // Average Rating
        let rating = 0;

        const ratingInterval = setInterval(() => {

            rating += 0.1;

            ratingCounter.innerText = rating.toFixed(1);

            if (rating >= 4.8) {

                ratingCounter.innerText = "4.8";

                clearInterval(ratingInterval);

            }

        }, 50);


        // Returning Customers
        let returning = 0;

        const returnInterval = setInterval(() => {

            returning++;

            returnCounter.innerText = returning + "%";

            if (returning >= 95) {

                clearInterval(returnInterval);

            }

        }, 20);

    }

}

window.addEventListener("scroll", animateCounters);

animateCounters();


// ======================================
// Review Card Animation
// ======================================

const reviewCards = document.querySelectorAll(".review-card");

reviewCards.forEach((card, index) => {

    card.style.opacity = "0";

    card.style.transform = "translateY(40px)";

    setTimeout(() => {

        card.style.transition = "all .7s ease";

    }, 100);

});

function showReviewCards() {

    const reviewSection = document.getElementById("reviews");

    if (!reviewSection) return;

    const sectionTop = reviewSection.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight - 100) {

        reviewCards.forEach((card, index) => {

            setTimeout(() => {

                card.style.opacity = "1";

                card.style.transform = "translateY(0)";

            }, index * 250);

        });

    }

}

window.addEventListener("scroll", showReviewCards);

showReviewCards();