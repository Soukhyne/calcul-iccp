<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="keywords" content="calcul indemnités de congés payés">
        <meta name="description" content="Calcul indemnités de congés payés">
        <title>Calcul indemnités de congés payés</title>
        <!--CSS-->
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="css/style.css">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous">
    </head>
    <body>
        <header class="container-fluid header">
            <p>- Calcul de l'indemnité de congés payés - Quelle est la gestion de l'entreprise? -</p>
            <button class="btn btn-outline-light btn-lg" id="ouvreButton" type="submit">En jours ouvrés</button>
            <button class="btn btn-outline-light btn-lg" id="ouvrableButton" type="submit">En jours ouvrables</button>
        </header>
        <main>
            <article id="ouvre" class="hide">
                <div  class="container">
                    <h1 class="alert alert-primary"></h1>
                    <div class="col-xs-12 col-sm-12 col-md-12">
                        <form id="salaireForm">
                            <div class="d-flex justify-content-center">
                                <button class="btn btn-primary btn-lg btnPrem" id="newYear" ><i class="fas fa-plus-circle"></i> Ajouter une année</button> <!--col-xs-3 col-sm-3 col-md-3-->
                                <button class="btn btn-primary btn-lg btnPrem" id="newCalcul" type="submit"><i class="fas fa-redo-alt"></i> Nouveau calcul</button>
                            </div>
                            <table  class="table table-hover">
                                <thead>
                                    <tr>
                                        <th colspan="2">Informations sur le salarié</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Nom du salarié</td>
                                        <td><input type="text" name="nom" id="nom" placeholder="Nom du salarié"></td>
                                    </tr>
                                    <tr>
                                        <td>Prénom du salarié</td>
                                        <td><input type="text" name="prenom" id="prenom" placeholder="Prénom"></td>
                                    </tr>
                                    <tr>
                                        <td>Salaire mensuel brut<span>*</span></td>
                                        <td><input type="text" name="salaireMensuel" id="salaireMensuel" placeholder="Salaire mensuel brut" required></td>
                                    </tr>
                                </tbody>
                            </table>
                            <p class="droite"><span>* champs obligatoires</span></p>

                            <table class="table table-hover">
                                <thead>
                                    <tr id="infoAnnee">
                                        <th></th>
                                        <th>Année N</th>
                                        <!-- display au click 'rajouter une année' -->
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr id="infoCPAcquis">
                                        <td>Nombre de CP acquis<span>*</span></td>
                                        <td><input type="text" name="totalCPN0" id="totalCPN0" placeholder="Nb CP acquis sur N" pattern="[0-9]{0,}(.)?(,)?[0-9]{0,}" required ></td>
                                        <!-- display au click 'rajouter une année' -->
                                    </tr>
                                    <tr id="infoCPPris">
                                        <td>Nombre de CP pris<span>*</span></td>
                                        <td><input type="text" name="CPN0" id="CPN0" placeholder="Nb CP pris de N" pattern="[0-9]{0,}(.)?(,)?[0-9]{0,}" required></td>
                                        <!-- display au click 'rajouter une année' -->
                                    </tr>
                                    <tr id="infoMaintien">
                                        <td>Montant du maintien<span>*</span></td>
                                        <td><input type="text" name="montantCPN0" id="montantCPN0" placeholder="Indemn. déjà versé" pattern="[0-9]{0,}(.)?(,)?[0-9]{0,}" required></td>
                                        <!-- display au click 'rajouter une année' -->
                                    </tr>
                                </tbody>
                            </table>

                            <table class="table table-striped table-hover">
                                <thead>
                                    <tr id="tralert" class="hide">
                                        <th id="alert" class="table-warning"><p><i class="fas fa-exclamation-triangle"></i> Etes vous sur de votre saisie? <i class="fas fa-exclamation-triangle"></i></p></th>
                                        <th id="alertN0" class="table-warning"></th>
                                    </tr>
                                    <tr id="thsalaire">
                                        <th>Mois</th>
                                        <th><p class="ligneEtendre">Salaire N</p></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr id="juin">
                                        <td>Juin</td>
                                        <td><button class="etendre" id="etendreN00" title="copier le salaire"><i class="fas fa-sort-amount-down-alt"></i></button><input class="moisN0" id="moisN00" type="text"  placeholder="Salaire de juin" pattern="[0-9]{0,}(.)?(,)?[0-9]{0,}"></td>
                                        <!-- display au click 'rajouter une année' -->
                                    </tr>
                                    <tr id="juillet">
                                        <td>Juillet</td>
                                        <td ><button class="etendre" id="etendreN01" title="copier le salaire"><i class="fas fa-sort-amount-down-alt"></i> </button><input class="moisN0" id="moisN01" type="text"  placeholder="Salaire de juillet" pattern="[0-9]{0,}(.)?(,)?[0-9]{0,}"></td>
                                        <!-- display au click 'rajouter une année' -->
                                    </tr>
                                    <tr id="aout">
                                        <td>Août</td>
                                        <td><button class="etendre" id="etendreN02" title="copier le salaire"><i class="fas fa-sort-amount-down-alt"></i> </button><input class="moisN0" id="moisN02" type="text"  placeholder="Salaire d'août" pattern="[0-9]{0,}(.)?(,)?[0-9]{0,}"></td>
                                        <!-- display au click 'rajouter une année' -->
                                    </tr>
                                    <tr id="septembre">
                                        <td>Septembre</td>
                                        <td><button class="etendre" id="etendreN03" title="copier le salaire"><i class="fas fa-sort-amount-down-alt"></i> </button><input class="moisN0" id="moisN03" type="text"  placeholder="Salaire de septembre" pattern="[0-9]{0,}(.)?(,)?[0-9]{0,}"></td>
                                        <!-- display au click 'rajouter une année' -->
                                    </tr>
                                    <tr id="octobre">
                                        <td>Octobre</td>
                                        <td><button class="etendre" id="etendreN04" title="copier le salaire"><i class="fas fa-sort-amount-down-alt"></i> </button><input class="moisN0" id="moisN04" type="text"  placeholder="Salaire d'octobre" pattern="[0-9]{0,}(.)?(,)?[0-9]{0,}"></td>
                                        <!-- display au click 'rajouter une année' -->
                                    </tr>
                                    <tr id="novembre">
                                        <td>Novembre</td>
                                        <td><button class="etendre" id="etendreN05" title="copier le salaire"><i class="fas fa-sort-amount-down-alt"></i> </button><input class="moisN0" id="moisN05" type="text"  placeholder="Salaire de novembre" pattern="[0-9]{0,}(.)?(,)?[0-9]{0,}"></td>
                                        <!-- display au click 'rajouter une année' -->
                                    </tr>
                                    <tr id="decembre">
                                        <td>Décembre</td>
                                        <td><button class="etendre" id="etendreN06" title="copier le salaire"><i class="fas fa-sort-amount-down-alt"></i> </button><input class="moisN0" id="moisN06" type="text" placeholder="Salaire de décembre" pattern="[0-9]{0,}(.)?(,)?[0-9]{0,}" ></td>
                                        <!-- display au click 'rajouter une année' -->
                                    </tr>
                                    <tr id="janvier">
                                        <td>Janvier</td>
                                        <td><button class="etendre" id="etendreN07" title="copier le salaire"><i class="fas fa-sort-amount-down-alt"></i> </button><input class="moisN0" id="moisN07" type="text" placeholder="Salaire de janvier" pattern="[0-9]{0,}(.)?(,)?[0-9]{0,}"></td>
                                        <!-- display au click 'rajouter une année' -->
                                    </tr>
                                    <tr id="fevrier">
                                        <td>Février</td>
                                        <td><button class="etendre" id="etendreN08" title="copier le salaire"><i class="fas fa-sort-amount-down-alt"></i> </button><input class="moisN0" id="moisN08" type="text" placeholder="Salaire de février" pattern="[0-9]{0,}(.)?(,)?[0-9]{0,}"></td>
                                        <!-- display au click 'rajouter une année' -->
                                    </tr>
                                    <tr id="mars">
                                        <td>Mars</td>
                                        <td><button class="etendre" id="etendreN09" title="copier le salaire"><i class="fas fa-sort-amount-down-alt"></i> </button><input class="moisN0" id="moisN09" type="text" placeholder="Salaire de mars" pattern="[0-9]{0,}(.)?(,)?[0-9]{0,}"></td>
                                        <!-- display au click 'rajouter une année' -->
                                    </tr>
                                    <tr id="avril">
                                        <td>Avril</td>
                                        <td><button class="etendre" id="etendreN010" title="copier le salaire"><i class="fas fa-sort-amount-down-alt"></i> </button><input class="moisN0" id="moisN010" type="text" placeholder="Salaire d'avril" pattern="[0-9]{0,}(.)?(,)?[0-9]{0,}"></td>
                                        <!-- display au click 'rajouter une année' -->
                                    </tr>
                                    <tr id="mai">
                                        <td>Mai</td>
                                        <td><button class="etendre" id="etendreN011" title="copier le salaire"><i class="fas fa-sort-amount-down-alt"></i> </button><input class="moisN0" id="moisN011" type="text" placeholder="Salaire de mai" pattern="[0-9]{0,}(.)?(,)?[0-9]{0,}"></td>
                                        <!-- display au click 'rajouter une année' -->
                                    </tr>
                                </tbody>
                                <tfoot id="totalSalaireN" class="hide">
                                    <tr id="trTotalSal">
                                        <td>Total</td>
                                        <!-- remplissage auto -->
                                    </tr>
                                </tfoot>
                            </table>
                            <div class="d-flex justify-content-center">
                                <button class="btn btn-success btn-lg btnPrem" id="validSalaire" ><i class="fas fa-check-circle"></i> Valider les informations</button>
                            </div>
                        </form>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-12">
                        <div id="indemniteTotale" class="alert alert-primary hide" role="alert"></div>
                        <table class="table table-dark">
                            <thead>
                                <tr id ="soldeCP" class="hide">
                                    <th>Année</th>
                                    <th>Solde CP</th>
                                    <th>Maintien</th>
                                    <th>1/10eme</th>
                                </tr>
                            </thead>
                            <tbody id="soldeCPN">
                            <!-- remplissage auto -->
                            </tbody>
                        </table>
                    </div>
                </div> 
            </article>
        </main>
        <script type="module" src="js/app.js"></script>
    </body>
</html>