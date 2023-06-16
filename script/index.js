const characterList = document.getElementById("character-list");
const selectedImage = document.getElementById("selected-image");
const selectedName = document.getElementById("selected-name");
const selectedCharacterGender = document.getElementById("selected-character-gender");
const selectedCharacterHeight = document.getElementById("selected-character-height");

const characterImages = [
"1.jpg",
"2.jpg",
"3.jpg",
"4.jpg",
"5.jpg",
"6.jpg",
"7.jpg",
"8.jpg",
"9.jpg",
"10.jpeg"
];

async function fetchCharacters() {
  try {
    const response = await fetch("https://swapi.dev/api/people");
    const data = await response.json();

    if (data.results) {
      data.results.forEach((character, index) => {
        const li = document.createElement("li");
        li.textContent = character.name;
        li.addEventListener("click", () => {
          displayCharacterDetails(character, index);
        });
        characterList.appendChild(li);
      });
    }
  } catch (error) {
    console.error("Error fetching characters:", error);
  }
}

function displayCharacterDetails(character, index) {
  selectedImage.src = "style/assets/"+ characterImages[index];
  selectedName.textContent = `Name: ${character.name}`;
  selectedCharacterGender.textContent = `Gender: ${character.gender}`;
  selectedCharacterHeight.textContent = `Height: ${character.height}cm`;
}

fetchCharacters();


// module.exports = { main };
