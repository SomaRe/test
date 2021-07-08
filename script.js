const menuBtn = document.querySelector(".menu-btn");
const menuOpen = document.querySelector(".nav-mobile");
let Open = false;
menuBtn.addEventListener("click", () => {
  if (!Open) {
    Open = true;
    menuBtn.classList.add("open");
    menuOpen.classList.add("open");
    let delay = 0;
  } else {
    Open = false;
    menuBtn.classList.remove("open");
    menuOpen.classList.remove("open");
  }
});
