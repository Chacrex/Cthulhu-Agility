var chiffres = [ 1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1];
CalculPNG(document, chiffres, "977123456789812345");

function GetLargeurCanvas() { return window.largeurCanvas; }
function GetHauteurCanvas() { return window.hauteurCanvas; }

function test()
{
    console.log(test);
}

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
