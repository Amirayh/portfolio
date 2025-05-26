
if(document.querySelector('.header1')){
    // Header
document.querySelector('.header1').innerHTML = `
  <header class="header4">
    <div class="logo">
        <img src="moi.jpeg" alt="moi" class="photo"/>
        <h1 class="titre">Amira YH  <p class="titre2">CONCEPTRICE DEVELOPPEUSE WEB</p></h1>
    </div>
      <ul class= "liste1">
        <li class= "nav1"><a class="nav2" href="ACCUEILTPFINAL.html">Accueil</a></li>
        <li class= "nav1"><a class="nav2" href="APROPOSTPFINAL.html">À propos</a></li>
        <li class= "nav1"><a class="nav2" href="PORTFOLIOTPFINAL.html">Portfolio</a></li>
        <li class= "nav1"><a class="nav2" href="CONTACTTPFINAL.html">Contact</a></li>
      </ul>
  </header>`;
}


// Footer
document.getElementById('footer').innerHTML = 
`<footer>
<div class="footerM">
    <p>© Amira YH - 2025 - Tous droits réservés</p>
    <div class="footerD">
      <a href="https://github.com/Amirayh" target="_blank" rel="noopener noreferrer">
        <img src="iconizer-icongithub.svg" alt="Github" class="icon-footer" />
      </a>
      <a href="http://linkedin.com/in/amira-yahiaoui-489b20265" target="_blank" rel="noopener noreferrer">
        <img src="iconizer-iconlinkedin.svg" alt="LinkedIn" class="icon-footer" />
      </a>
      <a href="ERREURTPFINAL.html" target="_blank" rel="noopener noreferrer">
        <img src="iconizer-iconinsta.svg" alt="Instagram" class="icon-footer" />
      </a>
    </div>
    </div>
  </footer>`;

  // formulaire contact

 document.getElementById('contact').innerHTML = `
  <section class="formcontact">
    <form id="formContact">
      <label for="nom">Nom :</label>
      <input type="text" id="nom" name="nom" required>
      <div class="error" id="error-nom"></div>

      <label for="prenom">Prénom :</label>
      <input type="text" id="prenom" name="prenom" required>
      <div class="error" id="error-prenom"></div>

      <label for="email">Adresse email :</label>
      <input type="email" id="email" name="email" required>
      <div class="error" id="error-email"></div>

      <label for="message">Message :</label>
      <textarea id="message" name="message" rows="5" required></textarea>
      <div class="error" id="error-message"></div>

      <button type="submit">Envoyer</button>
    </form>
  </section>
`;

document.getElementById("formContact").addEventListener("submit", function (e) {
  e.preventDefault();

  // On récupère les champs
  const nom = document.getElementById("nom").value.trim();
  const prenom = document.getElementById("prenom").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // reset les erreurs
  document.getElementById("error-nom").textContent = "";
  document.getElementById("error-prenom").textContent = "";
  document.getElementById("error-email").textContent = "";
  document.getElementById("error-message").textContent = "";

  let valid = true;

  // Vérifications
  if (nom.length < 2) {
    document.getElementById("error-nom").textContent = "Le nom doit faire au moins 2 caractères.";
    valid = false;
  }

  if (prenom.length < 2) {
    document.getElementById("error-prenom").textContent = "Le prénom doit faire au moins 2 caractères.";
    valid = false;
  }

  if (!email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
    document.getElementById("error-email").textContent = "Adresse email invalide.";
    valid = false;
  }

  if (message.length < 10) {
    document.getElementById("error-message").textContent = "Le message doit contenir au moins 10 caractères.";
    valid = false;
  }

  if (valid) {
    alert("Formulaire envoyé avec succès !");
  }
});
