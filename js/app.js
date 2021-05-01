"use strict";
document.addEventListener("DOMContentLoaded", function () {
  /* *************
   ** variables **
   ***************/

  //creation d'un compteur i qui s'incrémente à chaque click de rajout d'année
  //creation d'un tableau des mois pour epurer le code
  let i = 0;
  const mois = [
    "juin",
    "juillet",
    "aout",
    "septembre",
    "octobre",
    "novembre",
    "decembre",
    "janvier",
    "fevrier",
    "mars",
    "avril",
    "mai",
  ];
  const nbAnneeCalculee = [1];
  const iccpTotal = [];
  const $btnAnnee = document.getElementById("newYear");
  const $btnNew = document.getElementById("newCalcul");
  const $header = document.querySelector(".header");
  const $btnOuvre = document.getElementById("ouvreButton");
  const $btnOuvrable = document.getElementById("ouvrableButton");
  const $h1 = document.querySelector("h1");
  const $ouvre = document.getElementById("ouvre");
  const $salaireForm = document.getElementById("salaireForm");
  const $btnForm = document.getElementById("validSalaire");
  const $salaireMensuel = document.getElementById("salaireMensuel");
  const $soldeCP = document.getElementById("soldeCP");
  const $totalSalaireN = document.getElementById("totalSalaireN");
  let diviseur = 21.67;

  /* **********************
   ** fonctions call back **
   *************************/

  //Ajout d'une nouvelle année
  const nouvelleAnnee = function () {
    $btnAnnee.addEventListener("click", function (e) {
      e.preventDefault();
      $btnAnnee.blur();
      //on incremente i
      i++;
      //on rajoute une année dans le compteur d'année
      nbAnneeCalculee.push(1);
      //on duplique les infos du nombre de CP:
      //année
      let trAnnee = document.getElementById("infoAnnee");
      let th = document.createElement("th");
      let p = document.createElement("p");
      p.textContent = `Année N-${i}`;
      th.append(p);
      trAnnee.append(th);

      let thSal = document.getElementById("thsalaire");
      let thSalaire = document.createElement("th");
      let pTh = document.createElement("p");
      pTh.innerText = `Salaire N-${i}`;
      pTh.setAttribute("class", "ligneEtendre");
      thSalaire.append(pTh);
      thSal.append(thSalaire);

      let trAlert = document.getElementById("tralert");
      let thAlert = document.createElement("th");

      thAlert.setAttribute("class", "table-warning");
      thAlert.setAttribute("id", `alertN${i}`);
      trAlert.append(thAlert);

      //CPAcquis
      let trCPAcquis = document.getElementById("infoCPAcquis");
      let tdCPAcquis = document.createElement("td");
      let inputCPAcquis = document.createElement("input");
      inputCPAcquis.setAttribute("name", `totalCPN${i}`);
      inputCPAcquis.setAttribute("id", `totalCPN${i}`);
      inputCPAcquis.setAttribute("type", "text");
      inputCPAcquis.setAttribute("placeholder", `CP acquis sur N-${i}`);
      inputCPAcquis.setAttribute("pattern", "[0-9]{0,}(.)?(,)?[0-9]{0,}");
      inputCPAcquis.required = true;
      tdCPAcquis.append(inputCPAcquis);
      trCPAcquis.append(tdCPAcquis);

      //CPPris
      let trCPPris = document.getElementById("infoCPPris");
      let tdCPPris = document.createElement("td");
      let inputCPPris = document.createElement("input");
      inputCPPris.setAttribute("name", `CPN${i}`);
      inputCPPris.setAttribute("id", `CPN${i}`);
      inputCPPris.setAttribute("type", "text");
      inputCPPris.setAttribute("placeholder", `CP pris de N-${i}`);
      inputCPPris.setAttribute("pattern", "[0-9]{0,}(.)?(,)?[0-9]{0,}");
      inputCPPris.required = true;
      tdCPPris.append(inputCPPris);
      trCPPris.append(tdCPPris);

      //Maintien
      let trInfoMaintien = document.getElementById("infoMaintien");
      let tdInfoMaintien = document.createElement("td");
      let inputInfoMaintien = document.createElement("input");
      inputInfoMaintien.setAttribute("name", `montantCPN${i}`);
      inputInfoMaintien.setAttribute("id", `montantCPN${i}`);
      inputInfoMaintien.setAttribute("type", "text");
      inputInfoMaintien.setAttribute("placeholder", "Indemn. déjà versé");
      inputInfoMaintien.setAttribute("pattern", "[0-9]{0,}(.)?(,)?[0-9]{0,}");
      inputInfoMaintien.required = true;
      tdInfoMaintien.append(inputInfoMaintien);
      trInfoMaintien.append(tdInfoMaintien);

      //on duplique les éléments de salaire
      mois.forEach(function (mois, ind) {
        let tr = document.getElementById(`${mois}`);
        let td = document.createElement("td");
        let input = document.createElement("input");
        input.setAttribute("class", `moisN${i}`);
        input.setAttribute("type", "text");
        input.setAttribute("id", `moisN${i}${ind}`);
        input.setAttribute("placeholder", `Salaire de ${mois}`);
        input.setAttribute("pattern", "[0-9]{0,}(.)?(,)?[0-9]{0,}");
        let btn = document.createElement("button");
        btn.setAttribute("class", "etendre");
        btn.setAttribute("id", `etendreN${i}${ind}`);
        btn.setAttribute("title", "copier le salaire");
        let textBtn = document.createElement("i");
        textBtn.setAttribute("class", "fas fa-copy");
        btn.append(textBtn);
        td.insertAdjacentElement("afterbegin", btn);
        td.append(input);
        tr.append(td);
      });

      //activer le bouton extension sur l'année créée
      nbAnneeCalculee.forEach(function (annee, indexannee) {
        mois.forEach(function (month, ind) {
          document
            .getElementById(`etendreN${indexannee}${ind}`)
            .addEventListener("click", function (e) {
              e.preventDefault();
              console.log("test");
              let salaireACopier = document.getElementById(
                `moisN${indexannee}${ind}`
              );
              //bloquer le collage à partir de l'index +1
              //pour chaque mois à comptert de ind+1
              for (let abs = ind + 1; abs < mois.length; abs++) {
                document.getElementById(`moisN${indexannee}${abs}`).value =
                  salaireACopier.value;
              }
            });
        });
      });
    });
  };

  //ecoute du bouton Nouveau calcul
  const nouveauCalcul = function () {
    $btnNew.addEventListener("click", function (e) {
      e.preventDefault();
      $salaireForm.reset();
      window.location.reload();
    });
  };

  //ecoute du bouton Valider
  const validForm = function () {
    $salaireForm.addEventListener("submit", function (e) {
      e.preventDefault();
      $btnForm.blur();
      document.getElementById("tralert").classList.add("hide");
      iccpTotal.splice(0);
      //pour chaque année calculée:
      nbAnneeCalculee.forEach(function (annee, index, arr) {
        //vider les cases du résultat précédent
        let trTotalSal = document.getElementById("trTotalSal");
        if (document.getElementById(`CP${index}`)) {
          document
            .getElementById("soldeCPN")
            .removeChild(document.getElementById(`CP${index}`));
          trTotalSal.removeChild(document.getElementById(`tdTotal${index}`));
        }
        if (document.getElementById(`pTHAlertN${index}`)) {
          document
            .getElementById(`alertN${index}`)
            .removeChild(document.getElementById(`pTHAlertN${index}`));
        }
        mois.forEach(function (mois, ind) {
          document
            .getElementById(`moisN${index}${ind}`)
            .classList.remove("span");
        });

        //calcul du salaire annuel:
        const arrSalaireHTML = Array.from(
          document.querySelectorAll(`.moisN${index}`)
        ).map((tab) => +tab.value.replace(",", "."));
        const salaireN = arrSalaireHTML.reduce((acc, sal) => acc + sal, 0);
        let tdTotalSal = document.createElement("td");
        let pTotalSal = document.createElement("p");
        pTotalSal.setAttribute("class", "ligneEtendre");
        pTotalSal.textContent = salaireN;
        tdTotalSal.append(pTotalSal);
        tdTotalSal.setAttribute("id", `tdTotal${index}`);
        trTotalSal.append(tdTotalSal);
        $totalSalaireN.classList.remove("hide");

        // calcul des compteurs
        //solde de CP:
        const soldeCPN =
          +document.getElementById(`totalCPN${index}`).value -
          +document.getElementById(`CPN${index}`).value;
        $soldeCP.classList.remove("hide");

        const tbody = document.getElementById("soldeCPN");
        let trSoldeCPN = document.createElement("tr");
        trSoldeCPN.setAttribute("id", `CP${index}`);
        let tdSoldeCPAnnee = document.createElement("td");
        let pSoldeCPAnnee = document.createElement("p");
        index === 0
          ? (pSoldeCPAnnee.textContent = "N")
          : (pSoldeCPAnnee.textContent = `N-${index}`);
        tdSoldeCPAnnee.append(pSoldeCPAnnee);
        let tdSoldeCP = document.createElement("td");
        let pSoldeCP = document.createElement("p");
        pSoldeCP.textContent = soldeCPN;
        tdSoldeCP.append(pSoldeCP);

        //calcul ICCP maintien
        const iccpNmaintien = +(
          (+$salaireMensuel.value.replace(",", ".") * soldeCPN) /
          diviseur
        ).toFixed(2);
        let tdICCPM = document.createElement("td");
        let pICCPM = document.createElement("p");
        iccpNmaintien < 0
          ? (pICCPM.textContent = 0)
          : (pICCPM.textContent = iccpNmaintien);
        tdICCPM.append(pICCPM);
        let iccp = iccpNmaintien;

        //calcul ICCP 10eme:
        let $montantCP = document.getElementById(`montantCPN${index}`);
        const iccpN10eme = +(
          salaireN * 0.1 -
          +$montantCP.value.replace(",", ".")
        ).toFixed(2);
        let tdICCP10 = document.createElement("td");
        let pICCP10 = document.createElement("p");
        iccpN10eme < 0
          ? (pICCP10.textContent = 0)
          : (pICCP10.textContent = iccpN10eme);
        tdICCP10.append(pICCP10);
        trSoldeCPN.append(tdSoldeCPAnnee);
        trSoldeCPN.append(tdSoldeCP);
        trSoldeCPN.append(tdICCPM);
        trSoldeCPN.append(tdICCP10);
        tbody.append(trSoldeCPN);
        //calcul ICCP totale à verser - ne garder que le montant le plus élevé dans iccpTotal:
        if (iccpN10eme > iccp) iccp = iccpN10eme;
        iccpTotal.push(iccp);

        //verification si salaires mensuels cohérents
        let nbSalaireN = 0;
        //incrementation du nb d'input de salaire complété
        arrSalaireHTML.forEach(function (sal) {
          if (sal != 0) nbSalaireN++;
        });
        //calcul du salaire moyen
        let salaireMoyen = +(salaireN / nbSalaireN).toFixed(2);
        //verification de l'ecart
        const verifSalaire = arrSalaireHTML.some(
          (sal) => sal <= salaireMoyen * 0.85 || sal >= salaireMoyen * 1.15
        );
        //si condition d'ecart verifié, alors affichage de l'ecart
        if (verifSalaire) {
          document.getElementById("tralert").classList.remove("hide");
          let pThAlert = document.createElement("p");
          pThAlert.setAttribute("id", `pTHAlertN${index}`);
          pThAlert.innerText = "Écart significatif entre les salaires";
          document.getElementById(`alertN${index}`).append(pThAlert);
          arrSalaireHTML.forEach(function (sal, ind, arr) {
            if (sal <= salaireMoyen * 0.85 || sal >= salaireMoyen * 1.15) {
              document
                .getElementById(`moisN${index}${ind}`)
                .classList.add("span");
            }
          });
        }
      });
      //calcul ICCP totale à verser (suite):
      //additionner les montants
      const iccpFinal = +iccpTotal.reduce((acc, iccp, i, arr) => acc + iccp, 0);
      //les afficher
      let resultat = document.getElementById("indemniteTotale");
      resultat.innerText = `Le montant de l'indemnité totale est de ${iccpFinal} €`;
      resultat.classList.remove("hide");
    });
  };

  //fonction copier les salaires
  const extension = function () {
    mois.forEach(function (month, ind) {
      document
        .getElementById(`etendreN${i}${ind}`)
        .addEventListener("click", function (e) {
          e.preventDefault();
          let salaireACopier = document.getElementById(`moisN${i}${ind}`);
          //bloquer le collage à partir de l'index +1
          //pour chaque mois à compter de ind+1
          for (let abs = ind + 1; abs < mois.length; abs++) {
            document.getElementById(`moisN${i}${abs}`).value =
              salaireACopier.value;
          }
        });
    });
  };

  /* *******************
   ** fonctionnalités **
   *********************/

  //selection jours ouvrés
  $btnOuvre.addEventListener("click", function (e) {
    e.preventDefault();
    $ouvre.classList.remove("hide");
    $header.classList.add("hide");
    $h1.textContent = "Calcul de l'indemnité de congés payés en jours ouvrés";
    diviseur = 21.67;
    nouvelleAnnee();
    nouveauCalcul();
    validForm();
    if (i === 0) extension();
  });

  //selection jours ouvrables
  $btnOuvrable.addEventListener("click", function (e) {
    e.preventDefault();
    $ouvre.classList.remove("hide");
    $header.classList.add("hide");
    $h1.textContent =
      "Calcul de l'indemnité de congés payés en jours ouvrables";
    diviseur = 26;
    nouvelleAnnee();
    nouveauCalcul();
    validForm();
    if (i === 0) extension();
  });
});
