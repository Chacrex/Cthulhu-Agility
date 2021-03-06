# Cthulhu-Agility
## Service de génération de code barres

**Membres du projet**

| AGBEKTAS Ahmet | HABIB Mohamed | RENARD-CALZANT David | PASSEMARD Kevin | VALAY Florent |
|:-:|:-:|:-:|:-:|:-:|

---

# Sommaire

Dans le cadre de la réalisation de ce projet, notre équipe de développement va mettre en œuvre une solution de génération de code barres. Ce projet a pour but d'intégrer à des sites web existants une interface légère de gestion de code barres. Cette dernière permettra à l'utilisateur de rentrer des chiffres correspondants à l'étiquette d'un produit et de générer ensuite un code barres valide, qui pourra être exporté au format pdf ou imprimer.

Après identification des besoins du client, il en ressort différentes fonctionnalités qui devront être intégrées à notre solution :
* un script léger que l'utilisateur pourra placer où il le souhaite sur son site web.
* l'exportation en pdf de l'image du code barres
* l'impression de l'image du code barres

À l'issue de ce projet, le client pourra optimiser sa productivité en gagnant du temps lors de l'étiquettage des produits. Le service que nous développons ayant une envergure assez restreinte, notre petite équipe de développement est adaptée pour répondre à ce problème, que ce soit en terme de coût ou d'efficacité.

La solution que nous avons retenu pour la mise en œuvre de ce projet consiste à développer un script en JS intégrable via une balise **\<iframe>**. L'ergonomie et la facilité d'intégration sont des avantages qui nous ont poussé à choisir cette solution plutôt qu'une autre. Dans un cas d'utilisation nominal, l'utilisateur clique sur l'élément concerné sur le site web du client, ce qui lance la fenêtre de génération de code barres. Après avoir saisi les chiffres composants le code barres, le système génère une image que l'on peut imprimer, télécharger en pdf ou bien copier dans le presse-papier.

Afin d'évaluer la réussite du projet, nous procéderons à plusieurs enquêtes de satisfaction cliente à chaque démonstration. Les critères principaux sont l'ergonomie, la facilité d'intégration au site web et l'assurance que les codes barres générés sont valides. Pour ce dernier point, notre équipe de développement utilise la méthode **TDD** pour vérifier au maximum le bon fonctionnement du système et satisfaire les exigences du client.

---

# Gestion de l'intégration

## 1.Gouvernance du projet et structure de l'équipe du projet

Dans le cadre de l'organisation de ce projet, il est important de définir les moyens de communication entre les différents acteurs prenant part à la conception. Tout d'abord, le client est l'émetteur des besoins et l'utilisateur final de la solution développée, sa participation est essentielle pour la bonne compréhension du problème par l'équipe de développement. La méthode Scrum étant un pilier fondamental pour le bon déroulement du projet, le client assiste à une démonstration du logiciel à l'issue de chaque sprint. C'est à cette occasion que l'on s'assure que la solution réponde bien à ses exigences, mais aussi que de nouveaux besoins peuvent apparaître.

Pour la communication interne au sein de l'équipe de développement, ce point sera détaillée dans la partie **"Gestion de la communication"**

__Organismes de gouvernance__

![Organismes de gouvernance](Organigramme.png "Organismes de gouvernances")

## 2.Rôles et responsabilités

* Product Owner : Il est client et émetteur des besoins, il définit avec l'équipe de développement les fonctionnalités attendues pour le produit.
* Scrum master : Son rôle est d'assurer la cohésion et l'organisation de l'équipe de développement en répartissant les tâches suivants les besoins.
* Testeur : La mission du testeur est d'élaborer des scénarios de tests pour que la solution développée soit conforme aux attentes du client et fonctionne correctement.
* Développeur : Discuter avec le client des fonctionnalités attendues, développer une solution adéquate et s'occuper des aspects techniques du projet comme la production, l'intégration et la maintenance sont les objectifs du développeur.

## 3.Gestion du changement

En cas d'imprévus lors du projet, comme l'absence d'un membre ou un dysfonctionnement dans un processus, nous avons mis en place quelques mesures pour pallier aux problèmes et éviter que le projet prenne du retard.

Par exemple, en cas d'absence d'un membre de l'équipe de développement, un autre développeur peut prendre le relais sur la tâche en suspens puisque le code est partagé via un GitHub où chacun des membres poste son travail à l'issue d'une séance. Ainsi, il est possible d'avancer sur des tâches critiques malgré les aléas.

De manière générale, l'équipe de développement débat de la répartition des tâches en cas d'imprévus pour réorganiser le travail et limiter les délais.

## 4.Clôture du projet 

Une fois que le projet sera cloturé, notre équipe sera placé sur de nouveaux projets où sur des projets déjà existant sur lesquels il y a un besoin de main-d'oeuvre. Il s'agira principalement de projet en Java.

L'archivage des fichiers se fera sur les serveurs de GitHub qui ont servit pour le versionning du projet ainsi que pour la rédaction d'une partie de la documentation. L'autre partie se trouve sur l'outils de gestion de projet, qui se compose principalement de l'explication de l'algorithmie utilisée pour l'implémentation des différents codes barres.

La rédaction du compte-rendu aux membres se fera à partir des différents contenus des réunions, principalement les rétrospectives et les daily, qui on permis de mettre l'accent sur des problèmes organisationnels dans l'équipe.

Le rapport définitif sera rédigé en se basant principalement sur les rétrospectives ainsi que sur les données stockées dans le gestionnaire de projet. Cela donnera un apercu macroscopique du projet, tout en détaillant les réussites et les échecs de l'équipe au cours du projet.

---

# Gestion de la portée

Tout au long du projet, des réunions régulières avec les membres de l'équipe de développement vont nous permettre de définir les axes à travailler à chaque séance. Ce processus assure une gestion constante du contenu produit et de son adéquation avec les besoins du projet.

Par ailleurs, il est important de noter les différentes fonctionnalités attendues par le client et lister de manière non-exhaustive celles qui n'en font pas partie.

**Activités visées par le projet**
* Génération de code barres sous forme d'image à partir d'un code à 13 chiffres
* Exportation au format PDF
* Impression de l'image du code barres
*Activités visées en cas de temps supplémentaire* 
* Génération de code barres sous forme d'image à partir d'un code à 15/18 chiffres

**Activités non-visées par le projet**
* Génération de QR Code

Pour recenser les exigences du client, des démonstrations sont organisées à l'issue de chaque séance pour s'assurer que les fonctionnalités développées correspondent bien aux attentes du client. Cela nous permet également de définir un "cap" pour la séance suivante et définir ensemble les points à travailler.

Au cours de la phase de développement, de nouveaux besoins peuvent émerger et il est important d'en mesurer la faisabilité. À cet effet, chaque nouvelle fonctionnalité fait l'objet d'une étude par l'équipe de développement pour décider ou non de son intégration ainsi que du coût engendré, de la répartition des effectifs pour la réaliser, etc ...

**Contraintes**

Au vue des délais assez courts pour la réalisation de ce projet, il nous est difficile de développer des fonctionnalités très avancées, c'est pour cela que nous avons choisi un découpage en activités simples, facilement réalisables et intégrables.

---

# Gestion du calendrier

Le projet se déroulera du **2 mars** au **2 avril**, les différents jalons s'étalent sur cette période et sont définis suivant le tableau suivant :

| **Modules** | 02/03 | 12/03 | 26/03 | 02/04 |
|:-:|:-:|:-:|:-:|:-:|
| Tests | :x: | :white_check_mark: | :white_check_mark: | :x: |
| *Développements applicatifs* |  |  |  |  |
| 1. Processing | :x: | :white_check_mark: | :white_check_mark: | :x: |
| 2. Moteur de rendu | :x: | :x: | :white_check_mark: | :white_check_mark: |
| Interfaçage | :x: | :white_check_mark: | :x: | :x: |
| Front-end | :x: | :white_check_mark: | :white_check_mark: | :white_check_mark: |
 
Pour vérifier le bon déroulement de chaque tâche, nous utilisons l'outil de **[Planification de projet](https://projets.univ-avignon.fr/)** de l'université d'Avignon. Grâce à cet outil, nous pouvons définir des tâches, les attribuer facilement aux membres de l'équipe, fixer des échéances. Cette solution offre également différentes vues (tableau de bord, liste de tâches, diagramme de Gantt) nous permettant d'avoir une vision globale de l'avancement du projet.

**Diagramme de Gantt**

![Diagramme de Gantt](Gantt.png "Diagramme de Gantt")

---

# Gestion des coûts

Durant la réalisation du projet, trois phases permettront d'évaluer les coûts inhérents au développement des fonctionnalités : la phase initiale, la phase d'ajustement et la réévaluation finale.

Après avoir rencontré le client et établit ses besoins vis-à-vis de l'application à développer, il est possible d'établir une estimation du coût global de l'application. Cette étape correspond à la phase initiale et se déroule donc au lancement du projet.

À l'inverse, plusieurs phases d'ajustement ont lieu à l'issue de chaque daily et rencontre avec le client. En cas d'ajout de fonctionnalités ou de modifications de celles déjà présentes, on dresse un nouveau tableau d'estimation des coûts.

Pour finir, à l'issue de la phase de réalisation du projet, une dernière étape de vérification aura lieu pour valider les estimations réalisées précédemment et s'assurer du non-dépassement des coûts prévus initialement.

**Estimation**

À l'issue d'une discussion au sein de l'équipe de développement au lancement du projet, il a été décidé du volume horaire nominal pour la réalisation de ce projet. Le temps alloué à la phase de spécification, de développement et d'intégration représente un total de 15h de travail pour chaque membre de l'équipe, réparti sur 2 séances de 4h30 et 2 séances de 3h. C'est une estimation du temps total nécessaire à la réalisation de ce projet, sachant que tout délai supplémentaire ne sera pas facturé au client.

|**Intitulés**|**Montants (en €)**|
|:--|:-:|
|Charges locatives | 300 |
|Charges salariales ||
|Salaires développeur | 706.95 |
|Salaire testeur | 182.10 |
|Salaire scrum master | 345.90 |
|||
|**Total**| **1534.95** |

Les charges locatives correspondent au loyer du bâtiment utilisé par l'équipe de développement durant la réalisation du projet.

Les charges salariales se divisent de manière suivante :
* Salaire horaire brut (Dev): 15.71€/h
* Salaire horaire brut (Scrum Master): 23.06€/h
* Salaire horaire brut (Testeur) : 12.14€/h

**Contrôle du budget**

Pour s'assurer du contrôle du budget, chaque rétrospective sera l'occasion de vérifier la qualité du code produit au cours de la séance et sa cohérence avec les estimations réalisées. Le nombre d'heures nécessaires à la réalisation d'une étape sera comparée au temps estimé afin de piloter plus facilement les futures étapes du projet et adapter les tâches en cours.

---

# Gestion de la qualité

Au cours de ce projet, diverses procédures ont été mises en place pour assurer la qualité du logiciel produit :
* Des démonstrations régulières avec le client ont permit de s'assurer de la bonne réalisation des besoins exprimés au début du projet
* À chaque fin de séance, une rétrospective a lieu pour vérifier la qualité de chaque fonctionnalité développée
* Le testeur a réalisé une batterie de tests tout au long du projet pour couvrir chacun des besoins

---

# Gestion des communications

Nous commençons nos séances par un daily, dans lequel nous détaillons chaque activité que nous avons réalisé durant la séance précédente. C'est également l'occasion de fixer les objectifs à réaliser pour la séance en cours.

Le scrum master répartit les tâches, et affecte une activité spécifique pour chaque membre de l'équipe. Si la tâche en question demande plus de personnes, on peut être amené à travailler à plusieurs sur la même tâche en découpant en plusieurs sous-tâches.

Lorsqu'un besoin client n'est pas totalement compris par l'équipe de développement, on fait appel au client afin d'avoir plus de détails sur ses attentes. De part la proximité du client avec notre équipe, les incompréhensions sont vite résolues et il nous est possible d'avancer sans entraîner de délais supplémentaires.

À la fin de chaque séance nous faisons une rétrospective : chaque personne de l'équipe prévient les autres membres de son état d'avancement, de ce qu'il a fait pendant la séance. De plus, chacun a l'occasion de s'exprimer sur ce qu'il a aimé durant la séance et partager avec l'équipe ses doutes si besoin. Cela permet d'améliorer la cohésion de l'équipe et les compétences des membres de manière continue.

Par ailleurs, entre le daily et la rétrospective, nous faisons d'autres réunions intermédiaires selon les besoins.

* Les outils que nous avons mis en place pour mener à bien le projet :
  - Nous avons mis en place un GitHub pour pouvoir déposer nos codes pour le développement et les éventuels tests.
  - Nous avons mis en place un Discord pour pouvoir s'échanger des messages, et s'envoyer les articles utiles.
  - Nous avons mis en place un outil de planification de projet qui contient les diagrammes de Gantt, les tâches que chacun doit réaliser et bien d'autres fonctionnalités intéressantes.

Nous utilisons les méthodes agiles, pour cela nous organisons régulièrement des réunions avec le client pour savoir si cela correspond bien au cahier des charges.

## Analyse des intervenants

| Nom de l'intervenant | Impact de l'intervenant sur le projet | Impact du projet sur l'intervenant | Exigences en matière de communications |
|:-|:-|:-|:-|
| M. LEMESLE Romuald | C'est le client | C'est le produit que le client nous a demandé de développer | Les dailys, les rétrospectives, les réunions intermédiaires.

## Rapports sur le projet et communications

| Type de communication | Calendrier des communications | Mécanisme de communication | Auteur | Destinataire |
|:-|:-|:-|:-|:-|
| Daily | Chaque début de séance | Réunion d'équipe | Scrum master| Chaque membre de l'équipe |
| Planification | Après chaque daily | Discord + Outil de planification de projet | Scrum master | Chaque membre de l'équipe |
| Démonstration du produit | Avant la fin de chaque séance | Démonstration du groupe avec le client | Chaque membre de l'équipe | Le client
| Rétrospective | Avant la fin de chaque séance | Réunion d'équipe | Scrum master | Chaque membre de l'équipe

## Collecte de données

Notre code est hébergé sur [GitHub](https://github.com/Chacrex/Cthulhu-Agility), et comporte deux branches : 
- Développement
- Tests

Dans la branche *_*développement*_* on trouve notre script et dans la branche *_*tests*_* on trouve deux fonctions pour savoir si le code entré est bien un entier et une autre fonction pour vérifier si la taille est adaptée.

Chaque membre de l'équipe possède un compte GitHub et peut déposer son travail pour tenir informé les autres membres de l'avancement du projet et en cas de reprise de code.
