const slides = document.querySelector('.slides');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

let currentIndex = 0;
const totalSlides = document.querySelectorAll('.slide').length;

// Función para mostrar una diapositiva específica
function showSlide(index) {
  if (index >= totalSlides) currentIndex = 0;
  else if (index < 0) currentIndex = totalSlides - 1;
  else currentIndex = index;

  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Avanzar manualmente
next.addEventListener('click', () => {
  resetAutoSlide(); // Reiniciar el temporizador automático
  showSlide(currentIndex + 1);
});

// Retroceder manualmente
prev.addEventListener('click', () => {
  resetAutoSlide(); // Reiniciar el temporizador automático
  showSlide(currentIndex - 1);
});

// Cambio automático cada 5 segundos
let autoSlideInterval = setInterval(() => {
  showSlide(currentIndex + 1);
}, 5000);

// Reiniciar el temporizador automático cuando se usa un botón
function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(() => {
    showSlide(currentIndex + 1);
  }, 5000);
}
