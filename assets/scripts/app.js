const addMovieModal = document.getElementById("add-modal");
const startAddMovieBtn = document.querySelector("header button");
const backDrop = document.getElementById("backdrop");
const cancelAddMovieBtn = addMovieModal.querySelector(".btn--passive");
const confirmAddMovieBtn = cancelAddMovieBtn.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll("input");
// const userInputs = addMovieModal.getElementsByTagName('input');

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

const cancelAddMovieHandler = () => {
  toggleMovieModal();
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
};

startAddMovieBtn.addEventListener("click", toggleMovieModalHandler);
backDrop.addEventListener("click", backDropClickHandler);
cancelAddMovieBtn.addEventListener("click", cancelAddMovieHandler);
confirmAddMovieBtn.addEventListener("click", addMovieHandler);
