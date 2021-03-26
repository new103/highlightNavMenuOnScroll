const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('ul li');
const ul = document.querySelector('ul');

window.addEventListener('scroll', (e) => {

  // wartość początkowa jak będzie '' nie ma klasy, nie ma podświetlenia, current jest potem nadpisany;
  let current = 'home';

  sections.forEach(section => {
    // offsetTop - odległość elementu od górnej krawędzi;
    const sectionTop = section.offsetTop;

    // clientHeight - wysokość danego elementu;
    const sectionHeight = section.clientHeight;

    // pageYOffset - ile przewinęliśmy od górnej krawędzi;
    if (pageYOffset > sectionTop) {
      current = section.getAttribute('id');
    }
  });

  console.log(current)

  navLi.forEach(li => {
    li.classList.remove('active');

    if (li.classList.contains(current)) {
      li.classList.add('active');
    }



  })
});

ul.addEventListener('click', e => {
  e.preventDefault();
  const id = e.target.getAttribute('href').slice(1);
  const element = document.querySelector('#' + id);
  const position = element.offsetTop;

  scrollTo({
    left: 0,
    top: position,
    behavior: 'smooth'
  })
})