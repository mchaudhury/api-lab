const button = document.querySelector("button");
button.addEventListener("click", (e) => {
  axios
    .get("https://swapi.dev/api/planets/2")
    .then((res) => {
      for (let i = 0; i < res.data.residents.length; i++) {
        console.log(res.data.residents[i]);
        axios.get(res.data.residents[i]).then((res2) => {
          let resident = document.createElement("h2");
          resident.textContent = `${res2.data.name}`;
          document.querySelector("body").appendChild(resident);
        });
      }
    })
    .catch((err) => {
      console.log(`something went wrong.`);
    });
});
