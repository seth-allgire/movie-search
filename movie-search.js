//  = document.getElementById("sbar");

let spanTag = document.getElementById("spanTag");
let year = document.getElementById("year");
let option = document.getElementById("option");
let resultField = document.getElementById("resultField");

document.getElementById("submitButton").addEventListener("click", function () {
  let sbar = document.getElementById("mainSearch");
  resultField.innerText = "";
  if (sbar.value.length < 3) {
    spanTag.innerText = "Please provide at least 3 characters";
  } else
    fetch(
      `http://www.omdbapi.com/?&apikey=d432a4e4&s=${sbar.value}&type=${option.value}&y=${year.value}`
    )
      .then((response) => response.json())

      .then((results) => {
        results.Search.forEach((movie) => {
          let newDiv = document.createElement("div");
          newDiv.innerHTML = `<div class="my-movie"><h1>${movie.Title} - ${movie.Year}</h1>
          <img src="${movie.Poster}" /></div>`;
          resultField.append(newDiv);
        });
        console.log(results);
      });
});

// ${post.id} - ${post.title}
//   if (titleSumission.value.length < 3) {
//     spanTag.innerText = "Please provide at least 3 characters";
// newDiv.innerHTML = `<div<h1> Total Results: ${results.totalResults}</h1></div>`;
