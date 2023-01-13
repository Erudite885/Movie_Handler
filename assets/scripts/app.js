const addMovieModal = document.getElementById("add-modal");
const startAddMovieBtn = document.querySelector("header button");
const backDrop = document.getElementById("backdrop");
const cancelAddMovieBtn = addMovieModal.querySelector(".btn--passive");
const confirmAddMovieBtn = cancelAddMovieBtn.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll("input");
// const userInputs = addMovieModal.getElementsByTagName('input');
const entryTextSection = document.getElementById("entry-text");
const deleteMovieModal = document.getElementById("delete-modal");

const movies = [];

const updateUI = () => {
  movies.length === 0
    ? (entryTextSection.style.display = "block")
    : (entryTextSection.style.display = "none");
};

const toggleBackDrop = () => {
  backDrop.classList.toggle("visible");
};

const cancelDeletion = () => {
  toggleBackDrop();
  deleteMovieModal.classList.remove("visible");
};

const deleteMovie = (movieId) => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  const listRoot = document.getElementById("movie-list");
  listRoot.children[movieIndex].remove();
  //   listRoot.removeChild(listRoot.children[movieIndex]);
  cancelDeletion();
  updateUI();
};

const deleteMovieHandler = (movieId) => {
  deleteMovieModal.classList.add("visible");
  toggleBackDrop();
  const cancelDeletionBtn = deleteMovieModal.querySelector(".btn--passive");
  let confirmDeletionBtn = deleteMovieModal.querySelector(".btn--danger");

  confirmDeletionBtn.replaceWith(confirmDeletionBtn.cloneNode(true));

  confirmDeletionBtn = deleteMovieModal.querySelector(".btn--danger");

  cancelDeletionBtn.removeEventListener("click", cancelDeletion);
  cancelDeletionBtn.addEventListener("click", cancelDeletion);
  confirmDeletionBtn.addEventListener("click", deleteMovie.bind(null, movieId));
};

const renderNewMovie = (id, title, imgUrl, rating) => {
  const newMovieEl = document.createElement("li");
  newMovieEl.className = "movie-element";
  newMovieEl.innerHTML = `
  <div class="movie-element__image">
    <img src="${imgUrl}" alt='' />
  </div>  
  <div class="movie-element__info">
    <h2>${title}</h2>
    <p>${rating}</p>
  </div>
  `;
  newMovieEl.addEventListener("click", deleteMovieHandler.bind(null, id));
  const listRoot = document.getElementById("movie-list");
  listRoot.append(newMovieEl);
};

const closeMovieModal = () => {
  addMovieModal.classList.remove("visible");
};

const showMovieModalHandler = () => {
  // addMovieModal.className = 'modal card'
  addMovieModal.classList.add("visible");
  toggleBackDrop();
};

const backDropClickHandler = () => {
  // toggleMovieModalHandler();
  closeMovieModal();
  cancelDeletion();
  clearMovieInputHandler();
};

const clearMovieInputHandler = () => {
  for (const userInput of userInputs) {
    userInput.value = "";
  }
};

const cancelAddMovieHandler = () => {
  // toggleMovieModal();
  closeMovieModal();
  toggleBackDrop();
  clearMovieInputHandler();
};

const addMovieHandler = () => {
  const titleVal = userInputs[0].value;
  const imgUrlVal = userInputs[1].value;
  const ratingVal = userInputs[2].value;

  if (
    titleVal.trim() === "" ||
    imgUrlVal.trim() === "" ||
    ratingVal.trim() === "" ||
    +ratingVal < 1 ||
    +ratingVal > 5
  ) {
    alert("Please Enter Valid Values (RATING between 1 and 5)");
  }

  const newMovies = {
    id: Math.random().toString(),
    title: titleVal,
    img: imgUrlVal,
    rating: ratingVal,
  };
  movies.push(newMovies);
  console.log(movies);
  // toggleMovieModalHandler();
  closeMovieModal();
  toggleBackDrop();
  clearMovieInputHandler();
  renderNewMovie(
    newMovies.id,
    newMovies.title,
    newMovies.img,
    newMovies.rating
  );
  updateUI();
};

startAddMovieBtn.addEventListener("click", showMovieModalHandler);
backDrop.addEventListener("click", backDropClickHandler);
cancelAddMovieBtn.addEventListener("click", cancelAddMovieHandler);
confirmAddMovieBtn.addEventListener("click", addMovieHandler);
