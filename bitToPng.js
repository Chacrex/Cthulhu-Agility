var chiffres = [ 1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1];
CalculPNG(document, chiffres);

function CalculPNG(document, bitArray)
{
    var draweur = document.getElementById('CodeBarrePNG').getContext('2d');
    var imageData = draweur.getImageData(0,0,226,100);
    for(var i=0; i<bitArray.length; i++)
    {
        if(bitArray[i] == 1)
        {
            draweur.beginPath();
            draweur.rect(22 + (i*2),0, 1, 76);
            draweur.stroke();
            draweur.closePath();

        }
    }

}
