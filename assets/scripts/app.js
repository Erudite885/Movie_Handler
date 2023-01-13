const addMovieModal = document.getElementById("add-modal");
const startAddMovieBtn = document.querySelector("header button");
const backDrop = document.getElementById("backdrop");

const toggleMovieModal = () => {
  // addMovieModal.className = 'modal card'
  backDrop.classList.toggle('visible');
  addMovieModal.classList.toggle("visible");
};

startAddMovieBtn.addEventListener("click", toggleMovieModal);
