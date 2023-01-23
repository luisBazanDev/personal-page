const menuDisplay = document.getElementById("menu-display");

menuDisplay.addEventListener("click", () => {
  const nav = document.getElementById("nav-mobile");
  if (!nav) return;
  if (nav.classList.contains("hidden")) {
    nav.classList.remove("hidden");
  } else {
    nav.classList.add("hidden");
  }
});
