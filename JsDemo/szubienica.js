var haslo = "Bez pracy nie ma kołaczy";
haslo = haslo.toUpperCase();
function wypisz_haslo()
{
    document.getElementById("plansza").innerHTML = haslo;
}
window.onload = wypisz_haslo; 