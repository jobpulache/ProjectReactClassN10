export function getList() {
  return fetch('https://jsonplaceholder.typicode.com/comments')
    .then(data => data.json())
}