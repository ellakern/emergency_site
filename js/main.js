/***************** hotspotTelefon ***************/
console.log(document.querySelector("#hotspotTelefon"));

document
  .querySelector("#hotspotTelefon")
  .addEventListener("mouseover", mouseOverTelefon);
function mouseOverTelefon() {
  console.log("mouseOverTelefon");
  document.querySelector("#hotspotTelefon").style.fill = "#827c36";
}

document
  .querySelector("#hotspotTelefon")
  .addEventListener("mouseout", mouseOutTelefon);
function mouseOutTelefon() {
  console.log("mouseOutTelefon");
  document.querySelector("#hotspotTelefon").style.fill = "#ca9baa";
}

document
  .querySelector("#hotspotTelefon")
  .addEventListener("click", clickTelefon);
function clickTelefon() {
  console.log("clickTelefon");
  document.querySelector(".info-text > h2").textContent =
    "Bestil mad med levering";
  document.querySelector("#efficiency").innerHTML = `<h3>Ella</h3>
  <p>bla bla bla</p>`;
  document.querySelector("#requirement").innerHTML = `<h3>Prut</h3>
  <p>god weekend bla bla bla</p>`;
}

/***************** hotspotIrma ***************/
console.log(document.querySelector("#hotspotIrma"));

document
  .querySelector("#hotspotIrma")
  .addEventListener("mouseover", mouseOverIrma);
function mouseOverIrma() {
  console.log("mouseOverIrma");
  document.querySelector("#hotspotIrma").style.fill = "#827c36";
}

document
  .querySelector("#hotspotIrma")
  .addEventListener("mouseout", mouseOutIrma);
function mouseOutIrma() {
  console.log("mouseOutIrma");
  document.querySelector("#hotspotIrma").style.fill = "#ca9baa";
}

document.querySelector("#hotspotIrma").addEventListener("click", clickIrma);
function clickIrma() {
  console.log("clickIrma");
  document.querySelector(".info-text > h2").textContent =
    "Let røven og køb ind";
  document.querySelector("#efficiency").innerHTML = `<h3>Køb ind</h3>
  <p>noget med at købe innd</p>`;
  document.querySelector(
    "#requirement"
  ).innerHTML = `<h3>Du bliver glad for det i morgen</h3>
  <p>noget mere med indkøb</p>`;
}

/***************** hotspotHoved ***************/
console.log(document.querySelector("#hotspotHoved"));

document
  .querySelector("#hotspotHoved")
  .addEventListener("mouseover", mouseOverHoved);
function mouseOverHoved() {
  console.log("mouseOverHoved");
  document.querySelector("#hotspotHoved").style.fill = "#827c36";
}

document
  .querySelector("#hotspotHoved")
  .addEventListener("mouseout", mouseOutHoved);
function mouseOutHoved() {
  console.log("mouseOutHoved");
  document.querySelector("#hotspotHoved").style.fill = "#ca9baa";
}

document.querySelector("#hotspotHoved").addEventListener("click", clickHoved);
function clickHoved() {
  console.log("clickHoved");
  document.querySelector(".info-text > h2").textContent = "Revurder";
  document.querySelector("#efficiency").innerHTML = `<h3>Tage to panodiler</h3>
  <p>noget med det</p>`;
  document.querySelector("#requirement").innerHTML = `<h3>Tag en lur</h3>
  <p>noget med at revurdere</p>`;
}
