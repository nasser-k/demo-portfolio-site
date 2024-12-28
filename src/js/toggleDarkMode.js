const toggleDarkMode = () => {
  const html = document.documentElement;
  const currentTheme = html.getAttribute("data-theme");

  if (currentTheme === "light") {
    html.setAttribute("data-theme", "dark");
  } else if (currentTheme === "dark") {
    html.setAttribute("data-theme", "cupcake");
  } else {
    html.setAttribute("data-theme", "light");
  }
};

document.getElementById("darkModeToggle").addEventListener("click", toggleDarkMode);
