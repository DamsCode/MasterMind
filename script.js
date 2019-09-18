(() => {
    const tabCouleur = ["red", "yellow", "green", "blue"];

    const tabCouleurIndice = ["black", "white"];

    const tabPion = [];


    tabCouleur.forEach(element => {
        let pion = create(element, true);
        tabPion.push(pion);
    });

    const divCouleur = document.getElementById("couleurs");
    const tabReponses = document.getElementById("tabrep");
    const tabHistorique = document.getElementById("tabhisto");
    console.log(tabPion);

    tabPion.forEach(element => {
        divCouleur.appendChild(element);
    });

    function create(element, mode) {
        let pion;
        if (mode) {
            pion = document.createElement("button");
            pion.id = element;
        } else {
            pion = document.createElement("td");
        }

        pion.style.backgroundColor = element;
        pion.style.display = "inline-block";
        pion.style.width = "30px";
        pion.style.height = "30px";
        pion.style.borderRadius = "50%";
        pion.addEventListener("click", (e) => {
            let tabtd = tabReponses.getElementsByTagName("td");
            let tr = document.createElement("tr");
            tr.className = "test";
            if (tabtd.length == 0 || tabtd.length == 4) {
                tr.appendChild(create(e.target.id, false));
                tabReponses.appendChild(tr);
            } else
                tabReponses.getElementsByClassName("test")[tabReponses.getElementsByClassName("test").length - 1].appendChild(create(e.target.id, false));

        });
        return pion;
    }
})();