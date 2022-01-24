const sendForm = () => {
  const btnOpenModal = document.querySelector(".card-details__button_delivery");
  const tabsTitle = document.querySelector(".card-details__title");
  const modal = document.querySelector(".modal");
  const modalTitle = modal.querySelector(".modal__title");
  const modalClose = modal.querySelector(".modal__close");
  const modalForm = modal.querySelector("form");

  btnOpenModal.addEventListener("click", () => {
    modal.style.display = "flex";
    modalTitle.textContent = tabsTitle.textContent;
  });

  modalClose.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modalForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const labels = modal.querySelectorAll(".modal__label");
    const sendMessage = {}; // Empty object

    labels.forEach((label) => {
      const span = label.querySelector("span");
      const input = label.querySelector("input");
      sendMessage[span.textContent] = input.value;
    });

    const URL = "https://jsonplaceholder.typicode.com/posts";
    fetch(URL, {
      method: "POST",
      body: JSON.stringify(sendMessage),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then(() => {
        console.info("These forms have been successfully submitted");

        // Close modal
        modal.style.display = "none";

        // Clear form
        labels.forEach((label) => {
          label.querySelector("input").value = "";
        });
      });
  });
};

sendForm();
