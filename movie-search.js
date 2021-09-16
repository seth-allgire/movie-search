//  = document.getElementById("sbar");

// let spanTag = document.getElementById("spanTag");

document.getElementById("submitButton").addEventListener("click", function () {
  let sbar = document.getElementById("mainSearch");
  fetch(`http://www.omdbapi.com/?&apikey=d432a4e4&s==${sbar.value}`)
    .then((response) => response.json())

    .then((results) => {
      let newDiv = document.createElement("div");

      newDiv.innerHTML = `<div<h1> Total Results: ${results.totalResults}</h1></div>`;
      document.body.append(newDiv);
    });
});

// ${post.id} - ${post.title}
//   if (titleSumission.value.length < 3) {
//     spanTag.innerText = "Please provide at least 3 characters";
