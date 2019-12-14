const links = document.querySelectorAll(".project a");
const bg = document.querySelector(".projectImage");
const showClass = ".projectImage-show";

for (const link of links) {
  const img = new Image();
  img.src = link.dataset.bg;

  link.addEventListener("mouseenter", function() {
    bg.style.backgroundImage = `url(${this.dataset.bg})`;
    document.body.classList.add(showClass);
  });

  link.addEventListener("mouseleave", () => {
    document.body.classList.remove(showClass);
  });
}
