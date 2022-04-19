const d = document;
let btnMenu = d.querySelector(".btn-menu"),
  menu = d.querySelector(".list-container"),
  containerMenu = d.querySelector(".menu");

// menu de navegacion

d.addEventListener("click", (e) => {
  if (e.target.matches(".btn-menu i")) {
    d.querySelector(".btn-menu i").classList.toggle("fa-times");
    d.querySelector(".list-container").classList.toggle("menu-active");
  }

  if (e.target.matches(".lists li a")) {
    d.querySelector(".list-container").classList.toggle("menu-active");
    d.querySelector(".btn-menu i").classList.toggle("fa-times");
  }
});

// intercalar clase active

let enlaces = d.querySelectorAll(".lists li a");

enlaces.forEach((el) => {
  el.addEventListener("click", (e) => {
    enlaces.forEach((link) => {
      link.classList.remove("active");
    });

    e.target.classList.add("active");
  });
});

// Efectos scroll

let prevScrollPos = window.pageYOffset;

window.onscroll = () => {
  let currentScrollPos = window.pageYOffset;

  // mostrar y ocultar menu
  if (prevScrollPos > currentScrollPos) {
    containerMenu.style.top = "0";
    containerMenu.style.transition = "0.5s";
  } else {
    containerMenu.style.top = "-60px";
    containerMenu.style.transition = "0.5s";
  }

  prevScrollPos = currentScrollPos;

  // Mostrar y ocultar scroll estilos

  let arriba = window.pageYOffset;
  let goTop = d.querySelector(".go-top");

  if (arriba <= 600) {
    containerMenu.style.borderBottom = "none";
    goTop.style.right = "-100%";
  } else {
    containerMenu.style.borderBottom = "5px solid #fff";
    goTop.style.right = "0";
    goTop.style.transition = "0.5s";
  }
};

// boton ir arriba

let goTop = d.querySelector(".go-top");
goTop.addEventListener("click", () => {
  // navegador zafari
  d.body.scrollTop = 0;
  // otros navegadores
  d.documentElement.scrollTop = 0;
});

// boton ir abajo

let verAbajo = d.getElementById("abajo");

verAbajo.addEventListener("click", () => {
  // navegador zafari
  d.body.scrollTop = 600;
  // otros navegadores
  d.documentElement.scrollTop = 600;
});

// Validación formulario
// formulario();

d.addEventListener("submit", (e) => {
  e.preventDefault();

  fetch("https://formsubmit.co/ajax/johnal19@utp.edu.co", {
    method: "POST",
    body: new FormData(e.target),
  })
    .then((res) => (res.ok ? res.json : Promise.reject(res)))
    .then((json) => {
      console.log(json);
      alert("Mensaje enviado");
    })
    .catch((err) => {
      let message =
        err.statusText || "Ocurrió un error al enviar, intenta nuevamente";
        alert(`Error: ${message}`)
    });
});

// Scroll Reveal

ScrollReveal().reveal("img-header");
ScrollReveal().reveal(".acerca-de", { delay: 500 });
ScrollReveal().reveal(".my-proyects", { delay: 500 });
ScrollReveal().reveal(".servicios", { delay: 500 });
ScrollReveal().reveal(".footer", { delay: 500 });
