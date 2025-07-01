async function mostrarConsejo() {
  const res = await fetch('https://api.adviceslip.com/advice');
  const data = await res.json();
  const texto = data.slip.advice;

  const contenedor = document.getElementById('api-content') || document.getElementById('consejo');
  contenedor.textContent = texto;
}


function enviar() {
  let consejohoy = document.getElementById('miconsejo').value.trim();
  const lista = document.getElementById('lista-consejos');

  if (!consejohoy) {
    alert('Por favor, ingresa un consejo antes de enviarlo.');
    return;
  }

  const nuevoItem = document.createElement('li');
  nuevoItem.textContent = consejohoy;
  lista.appendChild(nuevoItem);

  let consejosGuardados = JSON.parse(localStorage.getItem('misConsejos')) || [];
  consejosGuardados.push(consejohoy);
  localStorage.setItem('misConsejos', JSON.stringify(consejosGuardados));

  document.getElementById('miconsejo').value = '';
}
function cargarConsejosGuardados() {
  const lista = document.getElementById('lista-consejos');
  const consejosGuardados = JSON.parse(localStorage.getItem('misConsejos')) || [];

  consejosGuardados.forEach(consejo => {
    const item = document.createElement('li');
    item.textContent = consejo;
    lista.appendChild(item);
  });
}

document.addEventListener('DOMContentLoaded', cargarConsejosGuardados);


function alernom(){
  const nombre = document.getElementById('nombre').value;
  if (nombre) {
    alert(`Hola ${nombre}, bienvenido a la página de consejos.`);
  } else {
    alert('Por favor, ingresa tu nombre.');
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });
  }
});
