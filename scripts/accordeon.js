const accordeon = () => {
  const chItem = document.querySelectorAll(".characteristics__item");

  const closeAccordeonTabs = () => {
    chItem.forEach((item) => {
      const chButton = item.querySelector(".characteristics__title");
      const chContent = item.querySelector(".characteristics__description");

      chButton.classList.remove("active");
      chContent.classList.remove("open");
      chContent.style.height = "";
    });
  };

  closeAccordeonTabs(); // Close accordeon tabs on load/reload page

  chItem.forEach((item) => {
    const chButton = item.querySelector(".characteristics__title");
    const chContent = item.querySelector(".characteristics__description");

    // Event 'Click' on accordeon tab
    chButton.addEventListener("click", () => {
      if (chContent.classList.contains("open")) {
        chContent.style.height = "";
      } else {
        // Close all accordeon tabs
        closeAccordeonTabs();
        // Set height accordeon's content
        chContent.style.height = chContent.scrollHeight + "px";
      }

      // Switch classes for current tab
      chButton.classList.toggle("active");
      chContent.classList.toggle("open");
    });
  });
};

accordeon();
