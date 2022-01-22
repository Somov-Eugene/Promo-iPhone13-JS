const linksMenu = document.querySelectorAll(".header-menu__item a");
const linkCharacteristics = document.querySelector(".card-details__link-characteristics");
const allLinks = [...linksMenu, linkCharacteristics];

// patch all methods polyfill
seamless.polyfill();

allLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const id = link.getAttribute("href").substring(1);
    const section = document.getElementById(id);

    if (section) {
      seamless.elementScrollIntoView(section, {
        behavior: "smooth",
        block: "start",
        inline: "start",
      })
    }
  })
});
