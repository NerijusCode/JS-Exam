/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */
'use strict';

class Movie {
  constructor(title, director, budget) {
    this.pavadinimas = title;
    this.rezisierius = director;
    this.samata = budget;
  };
  wasExpensive() {
  return this.samata >= 100000000;
  };

  getIntroduction() {
    return `Filmo pavadinimas - ${this.pavadinimas}, ReŽisierius - ${this.rezisierius}, Biudžetas - ${this.samata}`;
  }
  };
  
  let pirmasFilmas = new Movie('Kill Bill', 'Tarantino', 99999999); //čia galėjot ir const panaudoti vietoj let


console.log(pirmasFilmas.getIntroduction());
console.log(`Ar brangu: ${pirmasFilmas.wasExpensive()}`);