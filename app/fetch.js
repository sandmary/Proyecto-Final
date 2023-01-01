const $container = document.getElementById("container");

const URL_API = "https://rickandmortyapi.com/api/character";

console.log(URL_API);

fetch(URL_API)
.then(response => response.json())
.then((data) => {
    const characters = data.results;
    
    for (let character of characters){

    console.log(character.name);
    $container.innerHTML +=`
    <div class="list-name"> <img class="img" src="${character.image}" alt="imagen de ${character.name}">
    ${character.name} - ${character.species} - ${character.status}
    </div>`;
    }

});

