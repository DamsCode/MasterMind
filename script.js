(() => {
    const tabCouleur = ["red", "yellow", "green", "blue"];

    const tabCouleurIndice = ["black", "white"];

    const tabPion = [];

    tabCouleur.forEach(element => {
        let pion = createpion(element, true);
        tabPion.push(pion);
    });

    const divCouleur = document.getElementById("couleurs");
    const tabReponses = document.getElementById("tabrep");
    const tabHistorique = document.getElementById("tabhisto");

    tabPion.forEach(element => {
        divCouleur.appendChild(element);
    });
    let currrow = document.createElement("tr");

    function createpion(element, mode) {
        let pion;
        if (mode) {
            pion = document.createElement("button");
            pion.id = element;
            pion.addEventListener("click", e => {
                let tabtd = currrow.getElementsByTagName("td");
                if (tabtd.length == 0 || tabtd.length == 4) {
                    currrow = document.createElement("tr");
                    currrow.appendChild(createpion(e.target.id, false));
                    tabReponses.appendChild(currrow);
                } else if (tabtd.length == 4) {} else {
                    currrow.appendChild(createpion(e.target.id, false));
                }
            });
        } else {
            pion = document.createElement("td");
        }

        pion.style.backgroundColor = element;
        pion.style.display = "inline-block";
        pion.style.width = "30px";
        pion.style.height = "30px";
        pion.style.borderRadius = "50%";
        return pion;
    }
})();