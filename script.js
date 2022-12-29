function toggleDarkMode() {
    var element = document.body;
    var btn = document.getElementById("btn");
    // var btn = document.getElementsByClassName("btn");
    element.classList.toggle("dark-mode");
    btn.classList.toggle("moon");
  }