export function getList() {
  return fetch('https://rickandmortyapi.com/api/character')
    .then(data => data.json())
    .then(data => data.results) // porque ahí está el array[]
}