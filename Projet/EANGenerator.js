                                                    //* Fonctionnement du widget *//

function LancementGeneration()
{
    var input = window.document.getElementById("inputUtilisateur");
    var numeroCodeBarre = input.value.toString();

    ShowCanvas();

    if(numeroCodeBarre.length == 13)
    {
        var res = ean13Binary(numeroCodeBarre);
        CalculPNG(window.document, res, numeroCodeBarre);
    }
    else if(numeroCodeBarre.length == 15) {
        var ean13Texte = numeroCodeBarre.substr(0,13);
        var res = ean13Binary(ean13Texte).concat(ean15Binary(numeroCodeBarre));
        CalculPNG(window.document, res, numeroCodeBarre);
    }
    else if(numeroCodeBarre.length == 18)
    {
        var ean13Texte = numeroCodeBarre.substr(0,13);
        var res = ean13Binary(ean13Texte).concat(ean18Binary(numeroCodeBarre));
        CalculPNG(window.document, res, numeroCodeBarre);
    }
}

function Init()
{
    window.inputContainer = window.document.getElementById("inputContainer");
    window.canvasContainer = window.document.getElementById("canvasContainer");
    ShowInput();
}

function ShowInput()
{
    var box = window.document.getElementById("frame")
    while (box.firstChild)
        box.removeChild(box.firstChild);
    box.innerHTML = window.inputContainer.outerHTML;
}

function ShowCanvas()
{
    var box = window.document.getElementById("frame")
    while (box.firstChild)
        box.removeChild(box.firstChild);
    box.innerHTML = window.canvasContainer.outerHTML;
}

function printContent()
{
    var canvas = window.document.getElementById('printScope');

    var WindowObject = window.open('', "dataPrint", "width=700,height=300,top=150,left=150");

    WindowObject.document.body.appendChild(canvas);
    ShowInput();
    WindowObject.document.close();
    WindowObject.focus();
    WindowObject.print();
    WindowObject.close();
}

                                                    //* Génération du code EAN *//

// Constante pour la génération de tableau
var white = true;
var black = false;

// Constante communes à tous les codes barres
var ean13BeginEnd = [white,black,white];
var ean13Middle = [black,white,black,white,black];
var supBegin = [white,black,white,white];
var supEnd = [black,white];

// Tableau de conversion poue les codes barres
var ean13Correspondance = [
    [[black,black,black,white,white,black,white], [black,white,black,black,white,white,white], [white,white,white,black,black,white,black]],
    [[black,black,white,white,black,black,white], [black,white,white,black,black,white,white], [white,white,black,black,white,white,black]],
    [[black,black,white,black,black,white,white], [black,black,white,white,black,white,white], [white,white,black,white,white,black,black]],
    [[black,white,white,white,white,black,white], [black,white,black,black,black,black,white], [white,black,black,black,black,white,black]],
    [[black,white,black,black,black,white,white], [black,black,white,white,white,black,white], [white,black,white,white,white,black,black]],
    [[black,white,white,black,black,black,white], [black,white,white,white,black,black,white], [white,black,black,white,white,white,black]],
    [[black,white,black,white,white,white,white], [black,black,black,black,white,black,white], [white,black,white,black,black,black,black]],
    [[black,white,white,white,black,white,white], [black,black,white,black,black,black,white], [white,black,black,black,white,black,black]],
    [[black,white,white,black,white,white,white], [black,black,black,white,black,black,white], [white,black,black,white,black,black,black]],
    [[black,black,black,white,black,white,white], [black,black,white,black,white,white,white], [white,white,white,black,white,black,black]]
];

// Tableau d'encodage pour les codes barres
var ean13Encodage = [
    [0,0,0,0,0,0],
    [0,0,1,0,1,1],
    [0,0,1,1,0,1],
    [0,0,1,1,1,0],
    [0,1,0,0,1,1],
    [0,1,1,0,0,1],
    [0,1,1,1,0,0],
    [0,1,0,1,0,1],
    [0,1,0,1,1,0],
    [0,1,1,0,1,0]
];

// Tableau d'encodage pour les suppléments de longueur 2
var sup2 = [
    [0,0],
    [0,1],
    [1,0],
    [1,1]
];

// Tableau d'encodage pour les suppléments de longueur 5
var sup5 = [
    [1,1,0,0,0],
    [1,0,1,0,0],
    [1,0,0,1,0],
    [0,1,1,0,0],
    [0,0,1,1,0],
    [0,0,0,1,1],
    [0,1,0,1,0],
    [0,1,0,0,1],
    [1,0,0,0,1],
    [0,0,1,0,1]
];

// Fonction de vérification pour la longueur d'un code barres ean13
function ean13PreLengthVerif(code)
{
    if(code.length != 13) return false;
    return true;
}

// Fonction de vérification de clé pour code barre ean13
function keyVerif(code)
{
    let x = parseInt(code[10]) + parseInt(code[8]) + parseInt(code[6]) + parseInt(code[4]) + parseInt(code[2]) + parseInt(code[0]);
    let y = parseInt(code[11]) + parseInt(code[9]) + parseInt(code[7]) + parseInt(code[5]) + parseInt(code[3]) + parseInt(code[1]);
    let z = 3 * y + x;
    let m = Math.floor(z / 10 + 1) * 10;
    let key = m - z;
    if(code[12] != key) return false;
    return true;
}

// Vérification de la validité du code barre généré en regardant la taille
function ean13PostLengthVerif(code)
{
    if(code.length != 95) return false;
    return true;
}

// Vérification de la validité du code barre généré en comptant les barres
function ean13BarCount(code)
{
    let count = 0;
    let state = false;
    for(i = 0; i < 95; i++)
    {
        if(state != code[i])
        {
            state = code[i];
            if(state == true) count++;
        }
    }

    if(count != 30) return false;
    return true;
}

// Fonction de génération de code barre pour le systeme ean13
function ean13Binary(code)
{
    // Vérification préalable
    if(!ean13PreLengthVerif(code)) return null;
    if(!keyVerif(code)) return null;

    // Insertion du début du code
    var ret = ean13BeginEnd;
    // Reconnaissance de la clé
    let key = parseInt(code[0]);

    // Ecriture de la première moitié du code barre
    for(i = 1; i < 7; i++)
    {
        var correspondace = ean13Encodage[key][i-1];
        var next = ean13Correspondance[parseInt(code[i])][correspondace];
        ret = ret.concat(next);
    }

    // Ecriture des bares centrales
    ret = ret.concat(ean13Middle);

    // Ecriture de la seconde moitié du code barre
    for(i = 7; i < 13; i++)
    {
        var next = ean13Correspondance[parseInt(code[i])][2];
        ret = ret.concat(next);
    }

    // Ecriture de la fin du code barre
    ret = ret.concat(ean13BeginEnd);

    // Vérification post traitement
    if(!ean13PostLengthVerif(ret)) return null;
    if(!ean13BarCount(ret)) return null;

    return ret;
}

// Fonction de calcul de la clé de l'ean 15
function ean15Key(code15)
{
  var x = parseInt(code15);
  var m = Math.floor(x / 4) * 4;
  return x - m;
}

// Fonctionde génération de la seconde parti d'un code barre pour le systeme ean15
function ean15Binary(code) {
  // Récupération de la clé de codage
  var key = ean15Key(code)
  // Insertion du début du code
  var ret15 = supBegin;

  // Encodage des caractères
  for(i = 13; i < 15; i++)
  {
    var correspondace = sup2[key][i-13];
    var next = ean13Correspondance[parseInt(code[i])][correspondace];
    ret15 = ret15.concat(next);
  }

  // Ajout de l'élément final
  ret15 = ret15.concat(supEnd);

  // Retour des deux codes
  return ret15;
}

// Fonction de calcul de la clé de l'ean 18
function ean18Key(code18)
{
  var x = parseInt(code18[14]) + parseInt(code18[16]);
  var y = parseInt(code18[13]) + parseInt(code18[15]) + parseInt(code18[17]);
  var z = 9 * x + 3 * y;
  return z - (Math.floor(z / 10) * 10);
}

// Fonctionde génération de la seconde parti d'un code barre pour le systeme ean18
function ean18Binary(code) {
  // Récupération de la clé de codage
  var key = ean18Key(code)
  // Insertion du début du code
  var ret18 = supBegin;

  // Encodage des caractères
  for(i = 13; i < 18; i++)
  {
    var correspondace = sup5[key][i-13];
    var next = ean13Correspondance[parseInt(code[i])][correspondace];
    ret18 = ret18.concat(next);
  }

  // Ajout de l'élément final
  ret18 = ret18.concat(supEnd);

  // Retour des deux codes
  return ret18;
}

                                                        //* Génération de l'image résultante *//


function GetLargeurCanvas() { return window.largeurCanvas; }
function GetHauteurCanvas() { return window.hauteurCanvas; }

function CalculPNG(document, bitArray, texteInitiale)
{
    var canvas = document.getElementById('CodeBarrePNG');

    if(texteInitiale.length == 13)
    {
        ChangeCanvasSize(226,100, canvas);
        EAN13(canvas, bitArray, texteInitiale);
    }
    else if (texteInitiale.length == 15)
    {
        ChangeCanvasSize(276,100, canvas);
        EANExtra(canvas, bitArray, texteInitiale);
    }
    else
    {
        ChangeCanvasSize(330,100, canvas);
        EANExtra(canvas, bitArray, texteInitiale);
    }
}

function ChangeCanvasSize(largeur, hauteur, canvas)
{
    window.largeurCanvas = largeur;
    window.hauteurCanvas = hauteur;
    canvas.width = largeur;
    canvas.height = hauteur;
}

function EANExtra(canvas, bitArray, texteInitiale)
{
    var draweur = canvas.getContext('2d');
    var imageData = draweur.getImageData(0,0,GetLargeurCanvas(),GetHauteurCanvas());
    var data = imageData.data;
    var ean13Array = bitArray.slice(0,95);
    var extraArray = bitArray.slice(95, bitArray.length);
    var ean13Texte = texteInitiale.substr(0,13);
    var extraTexte = texteInitiale.substr(13, texteInitiale.length);

    Clear(data);
    DrawEAN13Line(ean13Array, data);
    DrawExtraLine(extraArray, data);

    draweur.putImageData(imageData, 0,0);
    WriteEAN13Text(draweur, ean13Texte);
    WriteExtraText(draweur, extraTexte);

}

function WriteExtraText(draweur, texte)
{
    draweur.fillText(texte,241,19);
}

function DrawExtraLine(bitArray, data)
{
    for(var i=0; i<bitArray.length; i++)
    {
        if(bitArray[i] == 1)
        {
            MakeVerticalBarre(226+(i*2), 24, 63, data, 2);
        }
    }
}

function EAN13(canvas, bitArray, texteInitiale)
{

        var draweur = canvas.getContext('2d');
        var imageData = draweur.getImageData(0,0,GetLargeurCanvas(),GetHauteurCanvas());
        var data = imageData.data;

        Clear(data);
        DrawEAN13Line(bitArray, data);
        draweur.putImageData(imageData, 0, 0);
        WriteEAN13Text(draweur, texteInitiale);
}

function WriteEAN13Text(draweur, texte)
{
    draweur.font = 'bold 20px sans-serif';
    draweur.imageSmoothingEnabled = false;
    var textP1 = texte[0];
    var textP2 = texte.substr(1,6);
    var textP3 = texte.substr(7,12);
    draweur.fillText(textP1,6,95);
    draweur.fillText(textP2, 37,95);
    draweur.fillText(textP3, 128,95);
}

function DrawEAN13Line(bitArray, data)
{
    for(var i=0; i<bitArray.length; i++)
    {
        if(bitArray[i] == 1)
        {
            if(i == 0 || i == 2 || i == 46 || i == 48 || i == 92 || i == 94)
                MakeVerticalBarre(22+(i*2), 0 , 87, data, 2);
            else
                MakeVerticalBarre(22+(i*2), 0 , 76, data, 2);
        }
    }
}

function Clear(data)
{
    for(var i=0; i<data.length; i++)
    {
        data[i] = 255;
    }
}

function MakeVerticalBarre(positionX, positionY, hauteurY, data, largeur)
{
    for(var i=0; i<hauteurY; i++)
    {
        for(var y=0; y<largeur; y++)
        {
            ColorierPixelNoir(data, positionX + y, i+positionY);
        }
    }
}

function ColorierPixelNoir(data, x, y)
{
    ColorierPixel(data, x, y, 0, 0, 0);
}

function ColorierPixel(data, x, y, r, g, b)
{
    var position = (y * GetLargeurCanvas() * 4) + (x * 4);
    data[position + 0 ] = r;
    data[position + 1 ] = g;
    data[position + 2 ] = b;
}
