const URL = new URLSearchParams(window.location.search);
const OFFSET = parseInt(URL.get("offset")) || 0;
const NEXT_PAGE = document.querySelector(".nextPage");
const PREV_PAGE = document.querySelector(".prevPage");

NEXT_PAGE.href = `/?offset=${OFFSET + 20}`;
PREV_PAGE.href = `/?offset=${OFFSET <= 0 ? 0 : OFFSET - 20}`;

fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${OFFSET}`)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const UL = document.querySelector(".results");
    UL.innerHTML = "";

    data.results.forEach(function (result) {
      const LI = document.createElement("li");
      LI.innerHTML = `<a href="/pokemon.html?name=${result.name}">${result.name}</a>`;
      UL.append(LI);
    });
  });

      
  