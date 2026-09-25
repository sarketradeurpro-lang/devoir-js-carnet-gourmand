// ============================================================
// 1. SÉLECTION DES ÉLÉMENTS
// ============================================================
const formulaire = document.querySelector("#form-commentaire");
const champNom = document.querySelector("#nom");
const champCommentaire = document.querySelector("#commentaire");
const messageErreur = document.querySelector("#message-erreur");
const listeCommentaires = document.querySelector("#liste-commentaires");


// ============================================================
// 2. SUPPRESSION : branche le bouton Supprimer d'une carte
// ============================================================
function activerSuppression(carte) {
  // On cherche le bouton À L'INTÉRIEUR de la carte
  const bouton = carte.querySelector(".btn-supprimer");

  bouton.addEventListener("click", function () {
    carte.remove(); // retire la carte de la page
  });
}


// ============================================================
// 3. CRÉATION D'UNE CARTE (sans innerHTML)
// ============================================================
function creerCommentaire(nom, texte) {
  // La carte
  const carte = document.createElement("li");
  carte.setAttribute("class", "commentaire");

  // Le nom de l'auteur
  const titre = document.createElement("h3");
  titre.textContent = nom;

  // Le texte du commentaire
  const paragraphe = document.createElement("p");
  paragraphe.textContent = texte;

  // Le bouton Supprimer
  const bouton = document.createElement("button");
  bouton.setAttribute("type", "button");
  bouton.setAttribute("class", "btn-supprimer");
  bouton.textContent = "🗑️ Supprimer";

  // On assemble la carte
  carte.appendChild(titre);
  carte.appendChild(paragraphe);
  carte.appendChild(bouton);

  // Après l'assemblage : le bouton est maintenant dans la carte
  activerSuppression(carte);

  return carte;
}


// ============================================================
// 4. ENVOI DU FORMULAIRE
// ============================================================
formulaire.addEventListener("submit", function (event) {
  // Empêche le rechargement de la page
  event.preventDefault();

  // On lit les champs (trim enlève les espaces autour)
  const nom = champNom.value.trim();
  const texte = champCommentaire.value.trim();

  // Validation : si une règle échoue, message + on s'arrête (return)
  if (nom.length < 2) {
    messageErreur.textContent = "Le nom doit contenir au moins 2 caractères.";
    return;
  }

  if (texte.length < 10) {
    messageErreur.textContent = "Le commentaire doit contenir au moins 10 caractères.";
    return;
  }

  // Tout est valide : on ajoute la carte en haut de la liste
  listeCommentaires.prepend(creerCommentaire(nom, texte));

  // On vide le formulaire
  champNom.value = "";
  champCommentaire.value = "";

  // On efface l'erreur (texte STRICTEMENT vide pour le CSS :empty)
  messageErreur.textContent = "";
});


// ============================================================
// 5. CARTES DÉJÀ DANS LE HTML (Téo et Léa)
// ============================================================
const cartesExistantes = document.querySelectorAll(".commentaire");

cartesExistantes.forEach(function (carte) {
  activerSuppression(carte);
});