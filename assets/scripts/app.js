const addMovieModal = document.getElementById("add-modal");
const startAddMovieBtn = document.querySelector("header button");
const backDrop = document.getElementById("backdrop");
const cancelAddMovieBtn = addMovieModal.querySelector(".btn--passive");

const toggleBackDrop = () => {
  backDrop.classList.toggle("visible");
};

const toggleMovieModal = () => {
  toggleBackDrop();
  // addMovieModal.className = 'modal card'
  addMovieModal.classList.toggle("visible");
};

const backDropClickHandler = () => {
  toggleMovieModal();
};

const cancelAddMovie = () => {
  toggleMovieModal();
};

startAddMovieBtn.addEventListener("click", toggleMovieModal);
backDrop.addEventListener("click", backDropClickHandler);
cancelAddMovieBtn.addEventListener("click", cancelAddMovie);
