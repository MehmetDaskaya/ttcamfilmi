document.addEventListener("DOMContentLoaded", () => {
  // Load Navbar
  fetch("/navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar-placeholder").innerHTML = data;

      // Initialize the burger icon functionality after loading the navbar
      const burgerMenu = document.getElementById("burger-menu");
      const dropdownMenu = document.getElementById("dropdown-menu");

      if (burgerMenu && dropdownMenu) {
        burgerMenu.addEventListener("click", () => {
          dropdownMenu.classList.toggle("show");
        });
      } else {
        console.error("Burger menu or dropdown menu not found");
      }
    });

  // Load Footer
  fetch("/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer-placeholder").innerHTML = data;
    });
});
