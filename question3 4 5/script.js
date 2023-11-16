$(document).ready(function () {
  //-------------------------------------------------------
  // ----------DECLARATION DES VARIABLES GLOBALES----------
  //-------------------------------------------------------
  let prixPizza = 3;
  let prixBoisson = 2;
  let quantitePizza = $("#quantitePizza");
  let quantiteBoisson = $("#quantiteBoisson");

  //----------------------------------------------
  // ----------DECLARATION DES FONCTIONS----------
  //----------------------------------------------
  // FONCTION POUR CALCULER LE PRIX A PAYER
  function prixAPayer() {
    return (
      prixPizza * $("#quantitePizza").val() +
      prixBoisson * $("#quantiteBoisson").val()
    );
  }
  // FONCTION POUR AFFICHER LE PRIX DANS LE HTML EN TEMPS REEL
  function afficherPrix() {
    $("#prix").text("prix total : " + prixAPayer() + "€");
  }

  //-------------------------------------------------------------------------
  // ----------EVENEMENTS SUBMIT POUR RECUPERER LES DONNEES DU FORM----------
  //-------------------------------------------------------------------------
  $("form").submit((e) => {
    e.preventDefault();
    let formulaire = $("form").serializeArray();
    let message = "";
    console.log(formulaire);
    // Boucle forEach pour parcourir le tableau et récuperer les données qui contiennent des valeurs
    formulaire.forEach((index) => {
      if (!(index.value === "")) {
        message += index.name + " : " + index.value + "\n";
      }
    });
    message += "prix total : " + prixAPayer() + "€";
    alert(message);
  });

  //---------------------------------------------------------------------------
  // ----------EVENEMENTS AU CLICK POUR CALCULER ET AFFICHER LES PRIX----------
  //---------------------------------------------------------------------------
  $("#pasBoisson").on("click", () => {
    quantiteBoisson.val(0);
    quantiteBoisson.prop("disabled", true);
    afficherPrix();
  });

  $(".choixBoisson").on("click", () => {
    quantiteBoisson.val(1);
    quantiteBoisson.prop("disabled", false);
    afficherPrix();
  });

  $("#pasPizza").on("click", () => {
    quantitePizza.val(0);
    quantitePizza.prop("disabled", true);
    $("#choixHuile").prop("disabled", true);
    afficherPrix();
  });

  $(".choixPizza").on("click", () => {
    quantitePizza.val(1);
    quantitePizza.prop("disabled", false);
    $("#choixHuile").prop("disabled", false);
    afficherPrix();
  });

  quantitePizza.on("input", () => {
    afficherPrix();
  });

  quantiteBoisson.on("input", () => {
    afficherPrix();
  });
});
