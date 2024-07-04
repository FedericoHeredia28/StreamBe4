document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contactForm");
  const respuesta = document.getElementById("respuesta");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(form);

    fetch("URL_DEL_BACKEND", {
      method: "POST",
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      respuesta.innerHTML = `<p>${data.message}</p>`;
    })
    .catch(error => {
      respuesta.innerHTML = `<p>Ocurrió un error: ${error}</p>`;
    });
  });
});
