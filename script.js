const hamburgerMenu = document.getElementById("hamburger-menu");
hamburgerMenu.addEventListener("click", dropdownMenu);

function dropdownMenu() {
  document.getElementById("menu-content").classList.toggle("show");
  clearSelection();
}

function clearSelection() {
  window.getSelection().removeAllRanges(); 
  document.selection?.empty();
}

window.onclick = (event) => {
  if (!event.composedPath().includes(hamburgerMenu)) {
    let dropdowns = document.getElementById("menu-content");
    dropdowns.classList.remove("show");
  }
}