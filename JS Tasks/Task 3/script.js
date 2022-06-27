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
'use strict';

const ENDPOINT = "https://api.github.com/users";

document.getElementById("btn").addEventListener("click", function () {

const output = document.getElementById("output");
output.innerHTML = `
<table id="usersBox">
        <thead>
            <tr>
                <th id="thead-style" width="40%">Login</th>
                <th id="thead-style" width="50%">Avatar</th>
            </tr>
        </thead>
        <tbody usersInfo></tbody>
    </table>
`;
function usersData() {
  return fetch(ENDPOINT).then((response) => response.json());
};

usersData()
  .then((data) => {
    createTableSkeleton(data);
  })
  .catch((event) => console.log(event));

function createTableSkeleton(data) {
  let usersInfo = document.querySelector("[usersInfo]");
  usersInfo.innerHTML = "";
  data.map((table) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <th>${table.login}</th>
        <th><img src="${table.avatar_url}"></th>
        `;
    usersInfo.append(tr);
  });
}
});
