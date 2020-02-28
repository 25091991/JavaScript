//  Autor: Kristina Smiljkovic
//  Datum: 28.02.2020
/* Kurs: JavaScript Programming Fundamentals
   Modul: Promenljive i konstante */
//  Javascript program za računanje zapremine valjka
//  Ključna reč: var
//  Identifikatori: poluprecnik, visina, rezultat
//  Metod: document.getElementById
//  Funkcija: myFunction()
//  Math.PI  =  3.14159
//  Formula: r * r * pi * H


function myFunction() {
	var poluprecnik = document.getElementById("poluprecnik").value;
	var visina = document.getElementById("visina").value;
	var rezultat = document.getElementById("rezultat");
	rezultat.value = poluprecnik * poluprecnik * Math.PI  * visina;
}


