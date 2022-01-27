const showBtn = document.querySelector(".show-btn");
const closeBtn = document.querySelector(".close-btn");
const acceptBtn = document.querySelector(".accept-btn");
const modalOverlay = document.querySelector(".modal-overlay");
const offerMessage = document.querySelector(".offer-success");

showBtn.addEventListener("click", () => {
  showBtn.classList.add("hidden");
  modalOverlay.classList.remove("hidden");
});
closeBtn.addEventListener("click", () => {
  showBtn.classList.remove("hidden");
  modalOverlay.classList.add("hidden");
});
acceptBtn.addEventListener("click", () => {
  modalOverlay.classList.add("hidden");
  offerMessage.classList.remove("hidden");
});
