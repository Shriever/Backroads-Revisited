document.getElementById("bars").addEventListener("click", toggleLinks);

document.querySelectorAll(".nav-link").forEach((item) => {
  item.addEventListener("click", toggleLinks);
});

function toggleLinks() {
  document.getElementById("nav-links").classList.toggle("show-links");
}
