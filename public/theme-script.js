// This script runs before React loads to prevent theme flickering
(function () {
  // Check if theme is stored in localStorage
  const savedTheme = localStorage.getItem("theme");
  // Check if user prefers dark mode
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  // Set the initial theme
  const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

  // Apply theme class to document root
  document.documentElement.classList.add(initialTheme + "-theme");
})();
