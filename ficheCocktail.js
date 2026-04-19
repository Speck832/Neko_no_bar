const params = new URLSearchParams(window.location.search); // Récupération des paramètres de l'URL
const nameCocktail = params.get("name"); // Récupération de la valeur du paramètre "name" à partir des paramètres de l'URL
const body = document.getElementById("body");
const css = document.getElementById("css");

// On crée et on affiche l'animation
const divCocktail = document.createElement("div");
divCocktail.className = "cocktail";
const divLiquid = document.createElement("div");
divLiquid.className = "liquid";
const divIceCubes = document.createElement("div");
divIceCubes.className = "ice-cubes";
const divIceCube1 = document.createElement("div");
divIceCube1.className = "ice-cube";
const divIceCube2 = document.createElement("div");
divIceCube2.className = "ice-cube";
const divIceCube3 = document.createElement("div");
divIceCube3.className = "ice-cube";
divIceCubes.appendChild(divIceCube1);
divIceCubes.appendChild(divIceCube2);
divIceCubes.appendChild(divIceCube3);
divCocktail.appendChild(divLiquid);
divCocktail.appendChild(divIceCubes);
const divLemon = document.createElement("div");
divLemon.className = "lemon-slice";
divCocktail.appendChild(divLemon);
const divLeaves = document.createElement("div");
divLeaves.className = "leaves";
const divLeave1 = document.createElement("div");
divLeave1.className = "leave leave-1";
const divLeave2 = document.createElement("div");
divLeave2.className = "leave leave-2";
const divLeave3 = document.createElement("div");
divLeave3.className = "leave leave-3";
divLeaves.appendChild(divLeave1);
divLeaves.appendChild(divLeave2);
divLeaves.appendChild(divLeave3);
divCocktail.appendChild(divLeaves);
const divStraw = document.createElement("div");
divStraw.className = "straw";
divCocktail.appendChild(divStraw);
const divStrawSurface = document.createElement("div");
divStrawSurface.className = "straw-surface";
divStraw.appendChild(divStrawSurface);
const divShadow = document.createElement("div");
divShadow.className = "shadow";
divCocktail.appendChild(divShadow);
body.appendChild(divCocktail);
setTimeout(() => {
    divCocktail.remove(); // Suppression de l'animation après 2 secondes
    css.href = "./ficheCocktail.css"; // Changement de la feuille de style pour afficher la fiche du cocktail
    let result; // Déclaration de la variable "result" pour stocker l'objet trouvé dans le tableau
    
    fetch("detailsCocktails.json") // On lance une recherche dans le fichier JSON
    .then((response) => response.json())
    .then((data) => {
        result = data.find((item) => item.name === nameCocktail); // Recherche de l'objet dans le tableau dont la propriété "name" correspond à la valeur de "nameCocktail"
        
        if (!result) {
            console.error("Objet non trouvé");
        }
        // Maintenant qu'on a récupéré les infos du cocktail on crée la page :
        // On crée le header et on l'ajoute au body :
        const header = document.createElement("header"); // Création de l'élément de typeheader
        const idHeader = "header" + result.name; // Création de l'id du header en concaténant "header" avec le nom du cocktail
        header.id = idHeader; // Définition de l'id de l'élément header
        const h1 = document.createElement("h1"); // Création de l'élément de type h1
        h1.className = "titre"; // Ajout de la classe "titre" à l'élément h1
        h1.textContent = result.title; // Définition du texte de l'élément h1
        header.appendChild(h1); // Ajout de l'élément h1 en tant qu'enfant de l'élément header
        body.appendChild(header); // Ajout de l'élément header en tant qu'enfant de l'élément body
    
        // On crée la section et on l'ajoute au body :
        const section = document.createElement("section"); // Création de l'élément de type section
        section.id = "section1"; // Définition de l'id de l'élément section
        const divImage = document.createElement("div"); // Création de l'élément de type div
        divImage.id = "divimage"; // Définition de l'id de l'élément div
        divImage.className = "flex" + result.name; // Ajout de la classe "flex1" à l'élément div
        const img = document.createElement("img"); // Création de l'élément de type img
        img.id = "img"; // Définition de l'id de l'élément img
        img.src = result.image; // Définition de la source de l'image à partir de la propriété "image" de l'objet trouvé
        img.alt = "image"; // Définition du texte alternatif de l'image
        img.height = 505; // Définition de la hauteur de l'image
        img.width = 300; // Définition de la largeur de l'image
        divImage.appendChild(img); // Ajout de l'élément img en tant qu'enfant de l'élément div
        section.appendChild(divImage); // Ajout de l'image en tant qu'enfant de l'élément section
        const section2 = document.createElement("section");
        const diving = document.createElement("div");
        diving.id = "diving";
        diving.className = "flex" + result.name;
        const h1Deux = document.createElement("h1");
        h1Deux.id = "titredes";
        h1Deux.textContent = "Ingrédients";
        const ul = document.createElement("ul");
        result.ingredients.forEach((ingredient) => {
          const li = document.createElement("li");
          li.textContent = ingredient;
          ul.appendChild(li);
        });
        diving.appendChild(h1Deux);
        diving.appendChild(ul);
        const divAsso = document.createElement("div");
        divAsso.id = "divasso";
        divAsso.className = "flex" + result.name;
        const h1Trois = document.createElement("h1");
        h1Trois.id = "titredes";
        h1Trois.textContent = "Associations";
        const p = document.createElement("p");
        p.textContent = result.association;
        divAsso.appendChild(h1Trois);
        divAsso.appendChild(p);
        section2.appendChild(diving);
        section2.appendChild(divAsso);
        section.appendChild(section2);
        body.appendChild(section); // Ajout de l'élément section en tant qu'enfant de l'élément body
    
        const footer = document.createElement("footer");
        const inputPrenom = document.createElement("input");
        inputPrenom.id = "prenom";
        inputPrenom.placeholder = "Prénom";
        inputPrenom.type = "text";
        footer.appendChild(inputPrenom);
        const inputCommentaire = document.createElement("input");
        inputCommentaire.id = "commentaire";
        inputCommentaire.placeholder = "Spécificité";
        inputCommentaire.type = "text";
        footer.appendChild(inputCommentaire);
        const boutonCommander = document.createElement("button");
        boutonCommander.id = "commander";
        boutonCommander.className = "commander";
        boutonCommander.textContent = "Commander";
        footer.appendChild(boutonCommander);
        body.appendChild(footer);
    
        commander(); // Appel de la fonction commander pour ajouter l'événement de clic au bouton commander
    
      })
      .catch((error) => console.error("Erreur :", error));

}, 2000); // Délai de 2 secondes avant d'exécuter le code à l'intérieur du setTimeout


function commander() {
    document.getElementById('commander').addEventListener('click', async () => {
        const prenom = document.getElementById('prenom').value.trim();
        const commentaire = document.getElementById('commentaire').value.trim();

        if (!prenom) {
            alert("Veuillez entrer un prénom !");
            return;
        }

        // Envoi au script PHP
        const response = await fetch(`commande.php?name=${encodeURIComponent(nameCocktail)}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({ prenom, commentaire })
        });

        const result = await response.json();
        alert(result.message);
    });
}