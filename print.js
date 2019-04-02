function printContent(idDeLimage)
{
    var restorepage = document.body.innerHTML;
    var printcontent = document.getElementById(idDeLimage).innerHTML;
    document.body.innerHTML = printcontent;
    window.print();
    document.body.innerHTML = restorepage;
}
