/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
'use strict';


function Calculator(a, b) {
  this.number1 = a;
  this.number2 = b;
  this.sum = function() {
    return this.number1 + this.number2
  }
  this.subtraction = function() {
    return this.number1 - this.number2
  }
  this.multiplication = function() {
    return this.number1 * this.number2
  }
  this.division = function() {
    return this.number1 / this.number2
  }
};

  const testas = new Calculator(5, 6); //const atėjo tik su ES6

  console.log(testas.sum());
  console.log(testas.subtraction());
  console.log(testas.multiplication());
  console.log(testas.division());