// SCROLL HEADER

window.addEventListener("scroll", () => {

  const header = document.querySelector(".header");

  if(window.scrollY > 50){
    header.classList.add("active");
  }
  else{
    header.classList.remove("active");
  }

});

// REVEAL ANIMATION

const revealElements = document.querySelectorAll(
  ".skill-card, .project-card, .about-card, .timeline-item, .contact-card"
);

window.addEventListener("scroll", reveal);

function reveal(){

  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach((element) => {

    const boxTop = element.getBoundingClientRect().top;

    if(boxTop < triggerBottom){
      element.classList.add("show");
    }

  });

}

reveal();