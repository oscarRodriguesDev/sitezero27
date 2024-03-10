function enviarWhatsApp() {
    alert('funcionando')
   var mensagem = document.getElementById("mensagem").value;
    var numeroWhatsApp = "+5527988991663";
    var urlWhatsApp = "whatsapp://send?phone=" +numeroWhatsApp + "&text=" + encodeURIComponent(mensagem);
    window.location.href = urlWhatsApp;
}

var formulario =  document.getElementById("form");
var botão = document.getElementById('enter')
botão.addEventListener( 'click', enviarWhatsApp,false)
//impedir o action do formulario quando clica em enviar no botão submit com o prevent default
function impedirEnvio(event){
    event.preventDefault();
    enviarWhatsApp();
}

formulario.addEventListener( 'submit', ()=>{impedirEnvio(Event)}, false );
