//cartas en proyectos

var swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 40,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay:5000,
    disableOnInteraction: true,
  },
});

var contenedor = document.getElementById('contenedor');

//efecto flipped en navbar

function slide() {
  contenedor.classList.toggle('is_flipped');
}

//indicaciones de envio de scroll en hide-menu

function hide_inicio() {
  contenedor.classList.toggle('is_flipped');
  contenedor.scrollTo({ top: 0, behavior: 'smooth' });
}

function hide_proyectos() {
  contenedor.classList.toggle('is_flipped');
  var elmnt = document.querySelector("#scroll_to_proyectos");
  elmnt.scrollIntoView({ behavior: 'smooth' });
}

function hide_acerca_de_mi() {
  contenedor.classList.toggle('is_flipped');
  var elmnt = document.querySelector("#scroll_to_perfil");
  elmnt.scrollIntoView({ behavior: 'smooth' });
}

function hide_contacto() {
  contenedor.classList.toggle('is_flipped');
  var elmnt = document.querySelector("#scroll_to_contacto");
  elmnt.scrollIntoView({ behavior: 'smooth' });
}

//indicaciones de envio de scroll en header

function inicio() {
  contenedor.scrollTo({ top: 0, behavior: 'smooth' });
}

function proyectos() {
  var elmnt = document.querySelector("#scroll_to_proyectos");
  elmnt.scrollIntoView({ behavior: 'smooth' });
}

function acerca_de_mi() {
  var elmnt = document.querySelector("#scroll_to_perfil");
  elmnt.scrollIntoView({ behavior: 'smooth' });
}

function contacto() {
  var elmnt = document.querySelector("#scroll_to_contacto");
  elmnt.scrollIntoView({ behavior: 'smooth' });
}

//subrayado en header

const red = document.querySelector("#pagina1_link");
const section = document.querySelector("#pagina_intro");
const sectionOptions = {
  rootMargin: "-210px 0px 0px 0px"
};

const sectionObserver = new IntersectionObserver(function(
  entries,sectionObserver) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      red.classList.add("nav_scrolled");
    } else {
      red.classList.remove("nav_scrolled");
    }
  });
},
sectionOptions);

sectionObserver.observe(section);

const red2 = document.querySelector("#pagina2_link");
const section2 = document.querySelector(".swiper-container");
const section2Options = {
  rootMargin: "-210px 0px -326px 0px"
};

const section2Observer = new IntersectionObserver(function(
  entries,section2Observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      red2.classList.add("nav_scrolled");
    } else {
      red2.classList.remove("nav_scrolled");
    }
  });
},
section2Options);

section2Observer.observe(section2);

const red3 = document.querySelector("#pagina3_link");
const section3 = document.querySelector("#pagina_acerca_de_mi");
const section3Options = {
  rootMargin: "-310px 0px -326px 0px"
};

const section3Observer = new IntersectionObserver(function(
  entries,section3Observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      red3.classList.add("nav_scrolled");
    } else {
      red3.classList.remove("nav_scrolled");
    }
  });
},
section3Options);

section3Observer.observe(section3);

const red4 = document.querySelector("#pagina4_link");
const section4 = document.querySelector("#pagina_contacto");
const section4Options = {
  rootMargin: "0px 0px -326px 0px"
};

const section4Observer = new IntersectionObserver(function(
  entries,section4Observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      red4.classList.add("nav_scrolled");
    } else {
      red4.classList.remove("nav_scrolled");
    }
  });
},
section4Options);

section4Observer.observe(section4);

//efecto de deslice al observarse

const objeto = document.querySelectorAll('#contacto_info');
const objeto2 = document.querySelectorAll('#intro_titulo');
const objeto3 = document.querySelectorAll('#intro_titulo_sub');
const objeto4 = document.querySelectorAll('#perfil_texto');
const objeto5 = document.querySelectorAll('#contenedor_flecha_arriba');

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