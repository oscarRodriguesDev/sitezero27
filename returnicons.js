export default function Icons() {
    return `
       <div class="rodape-sociais">
          <h3>Siga nosso trabalho:</h3>
          <div class="redes">

            <img 
              src="./res/facebook-min.png"
              alt="icone do facebook"
              style="cursor: pointer"
              onclick="window.location.href='https://www.facebook.com/seu_perfil'"
            >

            <img
              src="./res/instagram-min.png"
              alt="icone do instagram"
              style="cursor: pointer"
              onclick="window.location.href='https://www.instagram.com/seu_perfil'"
            />

            <img
              src="./res/linkedin-min.png" 
              alt="icone do linkedin"
              style="cursor: pointer"
              onclick="window.location.href='https://www.linkedin.com/company/zero27rs/'"
            >

          </div>
       </div>
    `;
}

document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("menu-container");
    if (container) {
        container.innerHTML = Icons();
    }
});
