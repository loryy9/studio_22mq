const slider = document.querySelector('.slider');
const navArrows = document.querySelectorAll('.nav-arrow');
const imagesArray = ['../sources/bagno.png', '../sources/bagno2.png', '../sources/camera.png', '../sources/camera2.png', '../sources/parete.png']; 
let currentIndex = 0;

function updateSlider() {
    setTimeout(() => {
      slider.innerHTML = '';
      const startIndex = currentIndex;
      const sliceArray = [];
      for (let i = 0; i < 3; i++) {
        sliceArray.push(imagesArray[(startIndex + i) % imagesArray.length]);
      }
      sliceArray.forEach((imageFile) => {
        const card = document.createElement('div');
        card.className = 'images';
        const img = document.createElement('img');
        img.src = `images/${imageFile}`; 
        img.alt = `Image ${imageFile}`;
        card.appendChild(img);
        slider.appendChild(card);
      });
    }, 300); 
  }

navArrows.forEach((arrow) => {
  arrow.addEventListener('click', (e) => {
    if (e.target.classList.contains('next')) {
      currentIndex = (currentIndex + 1) % imagesArray.length;
      updateSlider();
    } else {
      currentIndex = (currentIndex - 1 + imagesArray.length) % imagesArray.length;
      updateSlider();
    }
  });
});

updateSlider();

document.addEventListener('DOMContentLoaded', function () {
  document.body.classList.add('loading');
});

window.addEventListener('load', function () {
  setTimeout(function() {
    document.body.classList.remove('loading');
    document.body.classList.add('loaded');
  }, 1000);
});