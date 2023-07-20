let searchButton = document.getElementById("searchButton");

let conatiner2 = document.getElementById("conatiner2");
let sound = "";
searchButton.addEventListener("click", word);

async function word() {
  let inp_word = document.getElementById("inp-word").value;
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inp_word}`)
    .then((response) => response.json())
    .then((data) => {
      conatiner2.innerHTML = `

<div class="conatiner-1">
          <div id="titleCard">
            <h2 id="title">${inp_word}</h2>
            <div>
              <button onclick="playSound()"><i class="fa-solid fa-volume-high"></i></button>
            </div>
          </div>
          <div id="card">
            <p>${data[0].meanings[0].partOfSpeech}</p>
            <p>/${data[0].phonetics[0].text}/</p>
          </div>
        </div>
        <div class="pronoun">
          <p>${data[0].meanings[0].definitions[0].definition}</p>
          <p id="meaning">
          ${data[0].meanings[0].definitions[0].example || ""}
          </p>
        </div>


`;

      // sound.setAttribute("src", `https:${data[0].phonetics[0].audio}`);
    })
    .catch(() => {
      conatiner2.innerHTML = `<h3>Could't Find The Word</h3>`;
    });

  document.getElementById("inp-word").value = "";
}

// function playSound() {
//   sound.play();
// }
