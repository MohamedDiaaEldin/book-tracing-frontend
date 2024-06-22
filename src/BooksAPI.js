// load env


const env = process.env.NODE_ENV;
console.log(env)

const api = "https://book-tracing-backend.onrender.com"
// const api = "http://localhost:3000"

let token = localStorage.token;

if (!token) token = localStorage.token = Math.random().toString(36).substr(-8);

console.log('api', api)
const headers = {
  Authorization: 'Bearer ' + token, 
  "Content-Type": "application/json",
};


export const get = (bookId) =>
  fetch(`${api}/books/${bookId}`, { method: "GET", headers })
    .then((res) => res.json())
    .then((data) => data.book);


export const getAll = () =>
  fetch(`${api}/books`, { method: "GET", headers })
    .then((res) => res.json())
    .then((data) => data.books);    


export const update = (bookId, shelf) =>
  fetch(`${api}/books/${bookId}`, {
    method: "PUT",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ shelf }),
  }).then((res) => res.json());


export const search = (query, maxResults) =>
    fetch(`${api}/search`, {
      method: "POST",
      headers: {
        ...headers,
        "Content-Type": "application/json",
      },
      
      body: JSON.stringify({ query, maxResults }),
    })
    .then((res) => res.json())

  
