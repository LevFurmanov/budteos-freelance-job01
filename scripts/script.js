function openMenu() {
    var x = document.getElementById("burgerMenu");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
}