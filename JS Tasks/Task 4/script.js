/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

'use strict'
 
const state = {};
 
 const baseURL = 'https://olive-bead-glazer.glitch.me';



 
const fetchData = async () => {
    try {
      const response = await fetch(baseURL);
      if (response.ok) {
        state.cars = await response.json();
        populateTable(state.cars)
      }
    } catch (error) {
      console.error(error);
    }
  };
  function populateTable(cars) {
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';
    cars.forEach((car) => {
        console.log(car);
        const tr = document.createElement('tr');
 
        const brand = document.createElement('td');
        brand.innerText = car.brand;
 
        const model = document.createElement('td');
        model.innerText = car.model;
 
        tr.append(brand, model);
        tbody.append(tr);
      });
  };
  
  fetchData();