let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let fecha = document.getElementById("fecha");
let profesion = document.getElementById("profesion");
let hijos = document.getElementById("hijos");
let telefono = document.getElementById("telefono");
let correo = document.getElementById("email");
let btn_enviar = document.getElementById("btn_enviar");

btn_enviar.addEventListener("click", () => {
  if (nombre.value === "") {
    alert("Por favor, escribe tu nombre.");
    nombre.focus();
    return false;
  }
  if (apellido.value === "") {
    alert("Por favor, escribe tu direccion.");
    apellido.focus();
    return false;
  }
  if (telefono.value === "") {
    alert("Por favor, escribe tu teléfonoo.");
    telefono.focus();
    return false;
  }
  if (correo.value === "") {
    alert("Por favor, escribe tu correo.");
    correo.focus();
    return false;
  }
  if (profesion.value === "") {
    alert("Por favor, escribe tu ciudad.");
    profesion.focus();
    return false;
  }
  if (hijos.value === "") {
    alert("Por favor, escribe tu edad.");
    hijos.focus();
    return false;
  } else {
    alert("Registro exitoso");
    nombre.value = "";
    apellido.value = "";
    fecha.value = "";
    profesion.value = "";
    hijos.value = "";
    telefono.value = "";
    email.value = "";
  }
});

