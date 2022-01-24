const getData = () => {
  const URL = "/Promo-iPhone13-JS/cross-sell-dbase/dbase.json";
  const list = document.querySelector(".cross-sell__list");
  const btn = document.querySelector(".cross-sell__add");

  let stack = 4; // Number of cards per row
  let count = 1; // Current row

  const render = (data) => {
    list.innerHTML = ""; // Clear list

    data.forEach(({ id, name, price, photo }) => {
      list.insertAdjacentHTML(
        "beforeend",
        `
          <li>
            <article class="cross-sell__item">
              <img class="cross-sell__image" src="./${photo}" alt="${id}">
              <h3 class="cross-sell__title">${name}</h3>
              <p class="cross-sell__price">${price}₽</p>
              <button type="button" class="button button_buy cross-sell__button">Купить</button>
            </article>
          </li>
        `
      );
    });
  };

  const sliceArray = (data, index) => data.slice(0, index);

  const changeData = (data) => {
    const newStack = stack * count;

    render(sliceArray(data, newStack));

    if (data.length > newStack) {
      count++;
    } else {
      // Remove button
      btn.removeEventListener("click", getGoods);
      btn.style.display = "none";
    }
  };

  const getGoods = () => {
    fetch(URL)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Data retrieval error");
        }
      })
      .then((data) => changeData(data))
      .catch((err) => console.error(err.message));
  };

  // Click on button 'Show more'
  btn.addEventListener("click", getGoods);

  getGoods(); // Getting a list the goods when loading
};

getData();
