/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją "showObjectKeys", kuri kaip argumentą priims objektą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  make: 'audi',
  model: 'A6',
  year: 2005,
  color: 'white',
};

function showObjectKeys(objArg) {
  const objkeys = Object.keys(objArg);
  
  console.log(objkeys);

  document.querySelector('body').innerHTML = objkeys; //kadangi objkeys naudojamas tik čia, tai jam dedikuoto kintamojo ir nereikėjo. Taip pat, kadangi tai yra tiesiog masyvas, be jokių html tagų, tai vietoj innerHTML reikėtų naudoti innerText = Object.keys(objArg);
};
showObjectKeys(audi);
