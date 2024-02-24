const rsheader = document.querySelector(".rst_nav-outer");
const sectionOne = document.querySelector(".rst_nav");

const sectionOneOptions = {
  threshold: .96
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      rsheader.classList.add("nav-scrolled");
    } else {
      console.log(entry.target);

      rsheader.classList.remove("nav-scrolled");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);