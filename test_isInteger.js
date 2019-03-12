// ************************************************************* //
//                     Copyright : Cthulhu-Agility               //
//  This code is intended to test if the barcode is an integer   //
// ************************************************************* //

function test_isInteger ()
{
    QUnit.test ("Test pour savoir si le code barre est bien un entier", function (code_bar, assert)
    {
        assert.equal (Number.isInteger(code_bar), true, "Le code barre est un entier");
    });    
}