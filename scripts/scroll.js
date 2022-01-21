const links = document.querySelectorAll(".header-menu__item a");
const cardDetailsLink = document.querySelector(".card-details__link-characteristics");

// patch all methods polyfill
seamless.polyfill();

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const id = link.getAttribute("href").substring(1);
    const section = document.getElementById(id);

    if (section) {
      seamless.elementScrollIntoView(section, {
        behavior: "smooth",
        block: "center",
        inline: "center",
      })
    }
  })
});

cardDetailsLink.addEventListener("click", (event) => {
  event.preventDefault();
  const id = cardDetailsLink.getAttribute("href").substring(1);
  const section = document.getElementById(id);

  if (section) {
    seamless.elementScrollIntoView(section, {
      behavior: "smooth",
      block: "center",
      inline: "center",
    })
  }
});
