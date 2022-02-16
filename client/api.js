import request from "superagent";

const serverURL = "http://localhost:3000/api/v1";

// *** EXAMPLE ***
export function getWelcome() {
  return request.get(`${serverURL}/welcome`).then((response) => response.body);
}
// ***   ***   ***

export function getCat() {
  return request
    .get("https://api.thecatapi.com/v1/images/search")
    .then((response) => response.body);
}

export function getRecipes(query) {
  return request
    .get(`/api/v1/recipes/${query}`)
    .then((response) => response.body);
}
