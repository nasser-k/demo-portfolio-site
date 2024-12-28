const toggleDarkMode = () => {
    const html = document.documentElement;
    html.classList.toggle('dark');
  };
  
  document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);
  