const revealElements = document.querySelectorAll(
  ".project-card, .skills-box, .contact-card, .timeline-item, .service-card, .extra-card"
);

window.addEventListener("scroll", revealOnScroll);

function revealOnScroll(){

  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach((element) => {

    const boxTop = element.getBoundingClientRect().top;

    if(boxTop < triggerBottom){
      element.classList.add("show");
    }

  });

}

revealOnScroll();