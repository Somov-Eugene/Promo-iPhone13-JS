const getData = () => {
  const URL = "https://jsonplaceholder.typicode.com/todos";

  fetch(URL)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Data retrieval error");
      }
    })
    .then((data) => console.log(data))
    .catch((err) => console.error(err.message))
    .finally(() => console.info("The data retrieval process is complete"));
};

getData();
