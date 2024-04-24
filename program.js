// slider:
// Verificar se o usuário já aceitou os cookies

function enviarWhatsApp() {
  alert("funcionando");
  var mensagem = document.getElementById("mensagem").value;
  var numeroWhatsApp = "+5527998836800";// numero oficial
  //alteração para colocar o codigo do pais
  var urlWhatsApp =
    "whatsapp://send?phone=" +
    numeroWhatsApp +
    "&text=" +
    encodeURIComponent(mensagem);
  window.location.href = urlWhatsApp;
}

var botão = document.getElementById("enter");
botão.addEventListener("click", enviarWhatsApp, false);

// impedir o action do formulario quando clica em enviar no botão submit com o prevent default

function impedirEnvio(event) {
  event.preventDefault();
  enviarWhatsApp();
}

// Verificar se o usuário já aceitou os cookies
if (localStorage.getItem("cookiesAccepted") == "true") {
  document.getElementById("cookie-notice").style.display = "none";
} else {
  //document.getElementById("cookie-notice").style.display = "block";
}

// Adicionar evento de clique ao botão "Aceitar"
document
  .getElementById("accept-cookies")
  .addEventListener("click", function () {
    localStorage.setItem("cookiesAccepted", true);
    document.getElementById("cookie-notice").style.display = "none";
  });
