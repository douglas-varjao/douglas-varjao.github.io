// Exemplo de animação ao rolar a página
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('.section');
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      current.classList.add('active-section');
    } else {
      current.classList.remove('active-section');
    }
  });
});

