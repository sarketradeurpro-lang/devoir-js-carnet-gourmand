// ============================================================
// 1. SÉLECTION DES ÉLÉMENTS
// ============================================================
const boutonPublier = document.querySelector(".btn-publier");
const champNom = document.getElementById("nom");
const champCommentaire = document.getElementById("commentaire");
const messageErreur = document.getElementById("message-erreur");
const listeCommentaires = document.getElementById("liste-commentaires");

// ============================================================
// 2. AFFICHER ET EFFACER LE MESSAGE D'ERREUR
// ============================================================
function afficherErreur(texte) {
  // On vide d'abord le paragraphe (comme dans le cours DOM)
  messageErreur.innerHTML = "";
  // Puis on crée le nouveau texte et on l'ajoute
  let texteErreur = document.createTextNode(texte);
  messageErreur.appendChild(texteErreur);
}

function effacerErreur() {
  messageErreur.innerHTML = "";
}

// ============================================================
// 3. SUPPRESSION : brancher un bouton Supprimer
// ============================================================
function activerSuppression(bouton) {
  bouton.addEventListener("click", function () {
    // parentNode : le <li> qui contient ce bouton
    bouton.parentNode.remove();
  });
}

// ============================================================
// 4. CRÉATION D'UNE CARTE (les 5 étapes de ton cours DOM)
// ============================================================
function creerCommentaire(nom, texte) {
  // La carte
  let carte = document.createElement("li");
  carte.classList.add("commentaire");

  // Le nom de l'auteur
  let titre = document.createElement("h3");
  let texteTitre = document.createTextNode(nom);
  titre.appendChild(texteTitre);

  // Le texte du commentaire
  let paragraphe = document.createElement("p");
  let texteParagraphe = document.createTextNode(texte);
  paragraphe.appendChild(texteParagraphe);

  // Le bouton Supprimer
  let bouton = document.createElement("button");
  let texteBouton = document.createTextNode("🗑️ Supprimer");
  bouton.appendChild(texteBouton);
  bouton.classList.add("btn-supprimer");
  activerSuppression(bouton);

  // On assemble la carte
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
    // Tout est valide : on ajoute la carte à la liste
    listeCommentaires.appendChild(creerCommentaire(nom, texte));

    // On vide le formulaire
    champNom.value = "";
    champCommentaire.value = "";

    // On efface une éventuelle erreur précédente
    effacerErreur();
  }
});

// ============================================================
// 6. COMMENTAIRES DÉJÀ DANS LE HTML (Téo et Léa)
// ============================================================
let boutonTeo = document.getElementById("suppr-teo");
let boutonLea = document.getElementById("suppr-lea");

activerSuppression(boutonTeo);
activerSuppression(boutonLea);