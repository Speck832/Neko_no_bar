const body = document.getElementById("body");
const header = document.createElement("header");
header.className = "header";
const h1 = document.createElement("h1");
h1.className = "titre";
h1.textContent = "Neko No Bar - Carte";
header.appendChild(h1);
const h3 = document.createElement("h3");
h3.className = "titrejap";
h3.textContent = "猫のバー - ちず";
header.appendChild(h3);
body.appendChild(header);

const section = document.createElement("section");
const sousSection1 = document.createElement("section");
sousSection1.id = "navs";
fetch("detailsCocktails.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((cocktail) => {
        const divNav = document.createElement("div");
        divNav.id = cocktail.name;
        divNav.className = "nav";
        const link = document.createElement("a");
        link.className = "links";
        link.href = `cocktail.html?name=${cocktail.name}`;
        divNav.appendChild(link);
        const h4 = document.createElement("h4");
        h4.textContent = cocktail.title;
        divNav.appendChild(h4);
        const img = document.createElement("img");
        img.id = "a";
        img.className = "imagenav";
        img.src = cocktail.image;
        img.alt = cocktail.title;
        divNav.appendChild(img);
        const desc = document.createElement("p");
        desc.className = "txt";
        desc.textContent = cocktail.description;
        divNav.appendChild(desc);
        sousSection1.appendChild(divNav);
    });
  })
  .catch((error) => console.error("Erreur :", error));
section.appendChild(sousSection1);
body.appendChild(section);

const divButton = document.createElement("div");
divButton.id = "button";
const button = document.createElement("button");
button.id = "adminBtn";
button.textContent = "🔒 Accès admin";
divButton.appendChild(button);
body.appendChild(divButton);

const divCommandes = document.createElement("div");
const linkCommandes = document.createElement("a");
linkCommandes.id = "dcr";
linkCommandes.href = "./liste_commandes.html";
const buttonCommandes = document.createElement("button");
buttonCommandes.id = "liste";
buttonCommandes.textContent = "Liste des commandes";
linkCommandes.appendChild(buttonCommandes);
divCommandes.appendChild(linkCommandes);
body.appendChild(divCommandes);

const footer = document.createElement("footer");
footer.className = "footer";
const h1Footer = document.createElement("h1");
h1Footer.className = "titre";
h1Footer.textContent = "Bon appétit !";
footer.appendChild(h1Footer);
const h3Footer = document.createElement("h3");
h3Footer.className = "titrejap";
h3Footer.textContent = "いただきます！";
footer.appendChild(h3Footer);
body.appendChild(footer);

sousSection1.addEventListener("click", (e) => {
    const div = e.target.closest(".nav");
    if (!div) return;

    document.querySelectorAll(".nav").forEach(el => {
        el.classList.remove("active");
    });

    div.classList.add("active");
});
/* const divNavs = document.getElementsByClassName("nav");
divNavs.addEventListener("click", () => {

    divNav.className = "nav.active";
});
divNavs.addEventListener("mouseenter", () => {
    divNav.className = "nav.active";
});
divNavs.addEventListener("mouseleave", () => {
    divNav.className = "nav";
}); */