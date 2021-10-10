function toggleMenu() {
  // Burger menu animation
	document.querySelector(".menu-top").classList.toggle("menu-top-click");
	document.querySelector(".menu-middle").classList.toggle("menu-middle-click");
	document.querySelector(".menu-bottom").classList.toggle("menu-bottom-click");

  // Toggle menu items
  document.querySelector("#primary-nav").classList.toggle("hide")
}

// Get current date
const date = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
let currentDate = date.toLocaleDateString('en-US', options);

// Display date inside the footer
document.querySelector('#date').textContent = currentDate;