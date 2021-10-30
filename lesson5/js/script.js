function toggleMenu() {
  // Burger menu animation
	document.querySelector(".menu-top").classList.toggle("menu-top-click");
	document.querySelector(".menu-middle").classList.toggle("menu-middle-click");
	document.querySelector(".menu-bottom").classList.toggle("menu-bottom-click");

  // Toggle menu items
  document.querySelector("#primary-nav").classList.toggle("hide");
  document.querySelector("nav").classList.toggle("nav-fixed");
  document.querySelector(".menu").classList.toggle("nav-fixed");
  document.querySelector("main").classList.toggle("fix-top");
  document.querySelector("body").classList.toggle("scroll-block");
}

// Get current date
const date = new Date();
const weekDay = date.getDay();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
let currentDate = date.toLocaleDateString('en-US', options);

// Display date inside the footer
document.querySelector('#date').textContent = currentDate;
// Display banner if it's Friday
weekDay == 5 ? document.querySelector(".banner").classList.remove("hide") : '';