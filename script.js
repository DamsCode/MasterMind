(() => {
    const tabCouleur = ["red", "yellow", "green", "blue"];

    const tabCouleurIndice = ["black", "white"];

    const tabPion = [];
    const tabSol = ["red", "yellow", "green", "blue"];

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
                if (tabtd.length == 0) {
                    currrow = newrow(e, tabReponses);
                    // currrow.appendChild(createpion(e.target.id, false));
                } else if (tabtd.length == 4) {
                    for (let index = 0; index < tabSol.length; index++) {
                        let b = false;
                        if (tabSol[index] == tabtd[index].style.backgroundColor) {
                            currrow.appendChild(createpion(tabCouleurIndice[0], false));
                        } else {
                            for (let ind = 0; ind < tabtd.length; ind++) {
                                if (tabSol[index] == tabtd[ind].style.backgroundColor && !b) {
                                    currrow.appendChild(createpion(tabCouleurIndice[1], false));
                                    b = true;
                                }
                            }
                        }

                    }
                    tabHistorique.appendChild(currrow);
                    currrow = newrow(e, tabReponses);
                } else {
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

    function newrow(elem, tab) {
        let row = document.createElement("tr");
        row.appendChild(createpion(elem.target.id, false));
        tab.appendChild(row);
        return row;
    }
})();