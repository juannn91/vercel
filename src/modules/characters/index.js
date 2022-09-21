export function fetchCharacters() {
  return fetch("https://rickandmortyapi.com/api/character").then((data) =>
    data.json()
  );
}
