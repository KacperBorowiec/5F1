document.querySelector("#przycisk").addEventListener("click", function () {
    var liczba1 = document.getElementById('liczba1').value;
    var liczba2 = document.getElementById('liczba2').value;
    var dod1 = parseInt(liczba1);
    var dod2 = parseInt(liczba2);
    wynik=(dod1)+(dod2);
    var wpisywanie = document.getElementById('wynik').innerHTML="Wynik: "+wynik;
});

