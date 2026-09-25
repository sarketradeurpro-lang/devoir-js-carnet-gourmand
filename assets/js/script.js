// ============================================================
// 1. SÉLECTION DES ÉLÉMENTS
// ============================================================
const boutonPublier = document.querySelector(".btn-publier");
const champNom = document.getElementById("nom");
const champCommentaire = document.getElementById("commentaire");
const messageErreur = document.getElementById("message-erreur");
const listeCommentaires = document.getElementById("liste-commentaires");


// ============================================================
// 2. MESSAGE D'ERREUR
// ============================================================
function afficherErreur(texte) {
  messageErreur.innerHTML = "";
  let texteErreur = document.createTextNode(texte);
  messageErreur.appendChild(texteErreur);
}

function effacerErreur() {
  messageErreur.innerHTML = "";
}


// ============================================================
// 3. SUPPRESSION D'UN COMMENTAIRE
// ============================================================
function activerSuppression(bouton) {
  bouton.addEventListener("click", function () {
    // parentNode : le <li> qui contient ce bouton
    bouton.parentNode.remove();
  });
}


// ============================================================
// 4. CRÉATION D'UNE CARTE DE COMMENTAIRE
// ============================================================
function creerCommentaire(nom, texte) {
  let carte = document.createElement("li");
  carte.classList.add("commentaire");

  let titre = document.createElement("h3");
  titre.appendChild(document.createTextNode(nom));

  let paragraphe = document.createElement("p");
  paragraphe.appendChild(document.createTextNode(texte));

  let bouton = document.createElement("button");
  bouton.appendChild(document.createTextNode("🗑️ Supprimer"));
  bouton.classList.add("btn-supprimer");
  activerSuppression(bouton);

  carte.appendChild(titre);
  carte.appendChild(paragraphe);
  carte.appendChild(bouton);

  return carte;
}


// ============================================================
// 5. CLIC SUR "PUBLIER"
// ============================================================
boutonPublier.addEventListener("click", function () {
  let nom = champNom.value;
  let texte = champCommentaire.value;

  if (nom.length < 2) {
    afficherErreur("Le nom doit contenir au moins 2 caractères.");
  } else if (texte.length < 10) {
    afficherErreur("Le commentaire doit contenir au moins 10 caractères.");
  } else {
    listeCommentaires.appendChild(creerCommentaire(nom, texte));
    champNom.value = "";
    champCommentaire.value = "";
    effacerErreur();
  }
});


// ============================================================
// 6. BRANCHER LES COMMENTAIRES DÉJÀ PRÉSENTS DANS LE HTML
// ============================================================
activerSuppression(document.getElementById("suppr-teo"));
activerSuppression(document.getElementById("suppr-lea"));