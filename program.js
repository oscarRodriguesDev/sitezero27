//slider:









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

function alterarEndereco(endereço,id){
    document.getElementById(id).innerText= endereço;
    
}

const btn_cad  = document.querySelector('.cad-btn')

btn_cad.addEventListener('click',()=>{
   //redirecionar para pagina de contatos
   location.replace('contatos.html');
},false)




formulario.addEventListener( 'submit', ()=>{impedirEnvio(Event)}, false ); 


window.addEventListener('DOMContentLoaded',()=>{alterarEndereco('Morada De Laranjeiras - Serra - ES','endereco')},false)