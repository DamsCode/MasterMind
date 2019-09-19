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
                let tab = [];
                if (tabtd.length == 0) {
                    currrow = newrow(e, tabReponses);
                } else if (tabtd.length == 5) {
                    // currrow.appendChild(createpion(tabCouleurIndice[0], false));
                    // currrow.appendChild(createpion(tabCouleurIndice[1], false));

                    for (let index = 0; index < tabSol.length; index++) {
                        let b = false;
                        for (let ind = 0; ind < tabtd.length; ind++) {

                            if (tabSol[index] == tabtd[ind].style.backgroundColor && !b) {
                                tab.push(tabtd[ind].style.backgroundColor);
                                b = true;
                                // console.log(tab.find(e => tabtd[ind].style.backgroundColor));


                            }
                        }

                    }
                    console.log(tab);
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