// ********************************************************************* //
//                     Copyright : Cthulhu-Agility                       //
// This code is intended to test if the barcode contains 13 characters   //
// ********************************************************************* //

function testLength ()
{
    QUnit.test ("Test pour mésurer la taille du code", function (code_bar, assert)
    {
        assert.equal (code_bar.length, 13, "Le code comporte 13 caractères");
    });    
}