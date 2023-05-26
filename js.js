const toggle = document.querySelector(".toggle");
const toggleBtn = document.querySelector(".toggle-btn");
const menu = document.querySelector(".menu");
const menuList = document.querySelector(".menu-list");
const menuItems = document.querySelectorAll(".menu-item");

let showMenu = false;

toggle.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    toggleBtn.classList.add("open");
    menu.classList.add("open");
    menuList.classList.add("open");
    menuItems.forEach((item) => item.classList.add("open"));

    showMenu = true;
  } else {
    toggleBtn.classList.remove("open");
    menu.classList.remove("open");
    menuList.classList.remove("open");
    menuItems.forEach((item) => item.classList.remove("open"));

    showMenu = false;
  }
}

// Get the checkbox element
const themeSwitch = document.querySelector('.themeSwitch');

// Add an event listener to the checkbox
themeSwitch.addEventListener('change', function() {
  // Get the body element
  const body = document.querySelector('body');
  const brand = document.querySelector('.brand')
  // Check if the checkbox is checked
  if (this.checked) {
    // Set the background color to black
    body.style.backgroundColor = '#121212';
    body.style.color = "white";
    brand.style.color = "white";
  } else {
    // Set the background color to white?
    body.style.backgroundColor = 'white';
    body.style.color = "black";
    brand.style.color = "black";
  }
});


