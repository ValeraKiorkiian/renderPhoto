const btn = document.querySelector(`.btn`);
const list = document.querySelector(`.picturesList`);

btn.addEventListener(`click`, () => {
  fetchPhotos();
});

function fetchPhotos() {
  fetch(`https://jsonplaceholder.typicode.com/photos?_limit=10`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then((photos) => renderPhotos(photos))
    .catch((error) => console.log(error.message));
}

function renderPhotos(photos) {
  const markup = photos
    .map(
      (photo) => `
   <li><img src="${photo.url}" width="300" height="300" alt="${photo.title}"></li>
    `
    )
    .join(``);
  list.insertAdjacentHTML(`beforeend`, markup);
}
