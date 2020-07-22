var contenedor = document.getElementById('contenedor');

function slide() {
  contenedor.classList.toggle('is-flipped');
}

function inicio() {
  contenedor.scrollTo({ top: 0, behavior: 'smooth' });
}

function proyectos() {
  contenedor.scrollTo({ top: 580, behavior: 'smooth' });
}

function acerca_de_mi() {
  contenedor.scrollTo({ top: 1155, behavior: 'smooth' });
}

function contacto() {
  contenedor.scrollTo({ top: 1730, behavior: 'smooth' });
}

function hide_inicio() {
  contenedor.classList.toggle('is-flipped');
  contenedor.scrollTo({ top: 0, behavior: 'smooth' });
}

function hide_proyectos() {
  contenedor.classList.toggle('is-flipped');
  contenedor.scrollTo({ top: 580, behavior: 'smooth' });
}

function hide_acerca_de_mi() {
  contenedor.classList.toggle('is-flipped');
  contenedor.scrollTo({ top: 1155, behavior: 'smooth' });
}

function hide_contacto() {
  contenedor.classList.toggle('is-flipped');
  contenedor.scrollTo({ top: 1730, behavior: 'smooth' });
}

const objeto = document.querySelectorAll('#contacto-2');
const objeto2 = document.querySelectorAll('#intro');
const objeto3 = document.querySelectorAll('#intro-head');
const objeto4 = document.querySelectorAll('#perfil-header');
const objeto5 = document.querySelectorAll('#contenedor-flecha-2');

observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {
    if(entry.intersectionRatio > 0) {
      entry.target.style.animation = `anim1 ${entry.target.dataset.delay} forwards ease-out`;
    }
    else {
      entry.target.style.animation = 'n';
    }
    })
})

objeto.forEach(image => {
    observer.observe(image)
})

objeto2.forEach(image => {
  observer.observe(image)
})

objeto3.forEach(image => {
  observer.observe(image)
})

objeto4.forEach(image => {
  observer.observe(image)
})

objeto5.forEach(image => {
  observer.observe(image)
})

const red = document.querySelector("#pagina1");
const section = document.querySelector("#intro_2");
const sectionOptions = {
  rootMargin: "-310px 0px 0px 0px"
};

const sectionObserver = new IntersectionObserver(function(
  entries,sectionObserver) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      red.classList.add("nav-scrolled");
    } else {
      red.classList.remove("nav-scrolled");
    }
  });
},
sectionOptions);

sectionObserver.observe(section);

const red2 = document.querySelector("#pagina2");
const section2 = document.querySelector("#contenedor-card");
const section2Options = {
  rootMargin: "-310px 0px -326px 0px"
};

const section2Observer = new IntersectionObserver(function(
  entries,section2Observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      red2.classList.add("nav-scrolled");
    } else {
      red2.classList.remove("nav-scrolled");
    }
  });
},
section2Options);

section2Observer.observe(section2);

const red3 = document.querySelector("#pagina3");
const section3 = document.querySelector("#sobre-mi");
const section3Options = {
  rootMargin: "-310px 0px -326px 0px"
};

const section3Observer = new IntersectionObserver(function(
  entries,section3Observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      red3.classList.add("nav-scrolled");
    } else {
      red3.classList.remove("nav-scrolled");
    }
  });
},
section3Options);

section3Observer.observe(section3);

const red4 = document.querySelector("#pagina4");
const section4 = document.querySelector("#contacto-background");
const section4Options = {
  rootMargin: "0px 0px -326px 0px"
};

const section4Observer = new IntersectionObserver(function(
  entries,section4Observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      red4.classList.add("nav-scrolled");
    } else {
      red4.classList.remove("nav-scrolled");
    }
  });
},
section4Options);

section4Observer.observe(section4);