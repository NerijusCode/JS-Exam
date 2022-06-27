/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */
'use strict'

const state = {};
 
 const baseURL = 'https://api.github.com/users';



 
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