let imgWidth = 300;

function swipe(val) {
  let content = document.getElementById("carousel-content");

  console.log(content.scrollLeft + " ? " + content.offsetWidth);

  if (content.scrollLeft == 0 && val < 0)
    content.scrollLeft = content.scrollWidth;
  else if (
    content.scrollLeft == content.scrollWidth - content.offsetWidth &&
    val > 0
  )
    content.scrollLeft = 0;
  else content.scrollBy(val * imgWidth, 0);
}

document.addEventListener("DOMContentLoaded", function () {
  document.body.classList.add("loading");
});

window.addEventListener("load", function () {
  setTimeout(function () {
    document.body.classList.remove("loading");
    document.body.classList.add("loaded");
    document.getElementById("carousel-content").scrollLeft = 2 * imgWidth
  }, 1000);
});
