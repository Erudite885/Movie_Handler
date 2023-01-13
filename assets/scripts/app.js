const addMovieModal = document.getElementById("add-modal");
const startAddMovieBtn = document.querySelector("header button");
const backDrop = document.getElementById("backdrop");
const cancelAddMovieBtn = addMovieModal.querySelector(".btn--passive");
const confirmAddMovieBtn = cancelAddMovieBtn.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll("input");
// const userInputs = addMovieModal.getElementsByTagName('input');
const entryTextSection = document.getElementById("entry-text");

const movies = [];

const updateUI = () => {
  movies.length === 0
    ? (entryTextSection.style.display = "block")
    : (entryTextSection.style.display = "none");
};

const renderNewMovie = (title, imgUrl, rating) => {
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
  const listRoot = document.getElementById("movie-list");
  listRoot.append(newMovieEl);
};

const toggleBackDrop = () => {
  backDrop.classList.toggle("visible");
};

const toggleMovieModalHandler = () => {
  toggleBackDrop();
  // addMovieModal.className = 'modal card'
  addMovieModal.classList.toggle("visible");
};

const backDropClickHandler = () => {
  toggleMovieModalHandler();
};

const clearMovieInputHandler = () => {
  for (const userInput of userInputs) {
    userInput.value = "";
  }
};

const cancelAddMovieHandler = () => {
  toggleMovieModal();
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
    title: titleVal,
    img: imgUrlVal,
    rating: ratingVal,
  };
  movies.push(newMovies);
  console.log(movies);
  toggleMovieModalHandler();
  clearMovieInputHandler();
  renderNewMovie(newMovies.title, newMovies.img, newMovies.rating);
  updateUI();
};

startAddMovieBtn.addEventListener("click", toggleMovieModalHandler);
backDrop.addEventListener("click", backDropClickHandler);
cancelAddMovieBtn.addEventListener("click", cancelAddMovieHandler);
confirmAddMovieBtn.addEventListener("click", addMovieHandler);
