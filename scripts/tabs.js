const tabsDetails = () => {
  const tabs = document.querySelectorAll(".card-detail__change");
  const tabsTitle = document.querySelector(".card-details__title");
  const tabsPrice = document.querySelector(".card-details__price");
  const tabsImage = document.querySelector(".card__image_item");
  const tabsMemory = document.querySelector(".card-details__description-item.description__memory");

  const tabsOptions = [
    {
      name: "Graphite",
      memory: "128",
      price: "99990",
      image: "img/iPhone-graphite.webp",
    },
    {
      name: "Silver",
      memory: "256",
      price: "109990",
      image: "img/iPhone-silver.webp",
    },
    {
      name: "Sierra Blue",
      memory: "512",
      price: "129990",
      image: "img/iPhone-sierra_blue.webp",
    },
  ];

  const changeContent = (index) => {
    const colorPhone = tabsOptions[index].name;
    const memoryPhone = tabsOptions[index].memory;
    const pricePhone = tabsOptions[index].price;
    const srcImage = tabsOptions[index].image;

    const title = `Смартфон Apple iPhone 13 Pro ${memoryPhone}GB ${colorPhone}`;

    tabsTitle.textContent = title;
    tabsMemory.textContent = `Встроенная память (ROM) ${memoryPhone} ГБ`
    tabsPrice.textContent = `${pricePhone}₽`;

    tabsImage.setAttribute("alt", title);
    tabsImage.setAttribute("src", srcImage);
  };

  const changeActiveTab = (indexClickedTab) => {
    tabs.forEach((tab, index) => {
      tab.classList.remove("active");
      if (index === indexClickedTab) {
        tab.classList.add("active");
      }
    });

    changeContent(indexClickedTab);
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", (e) => {
      changeActiveTab(index);
    });
  });

  // Show first tab
  changeContent(0);
};

tabsDetails();
