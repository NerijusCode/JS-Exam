/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
document.getElementById('submit-btn').addEventListener('click', convert);

function convert(event) {
    event.preventDefault();
    let imputValue = document.getElementById('search').value;
    const lbConv= Number(imputValue) * 2.2046;
    const gConv = Number(imputValue) / 0.0010000;
    const ozConv = Number(imputValue) * 35.274;
    const returnCalcValues = `Rezultatas: <br> Svarai (lb) - ${lbConv} <br> Gramai (g) - ${gConv} <br> Uncijos (oz) - ${ozConv}`;
    document.getElementById('output').innerHTML = returnCalcValues;
}