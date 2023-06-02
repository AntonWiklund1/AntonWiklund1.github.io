const nav__items = document.querySelectorAll("a.nav__item");
function ActiveLink() {
  nav__items.forEach((item) => {
    item.classList.remove("active");
    this.classList.add("active");
  });
}
nav__items.forEach((item) => {
  item.addEventListener("click", ActiveLink);
});