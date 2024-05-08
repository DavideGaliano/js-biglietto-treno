'use strict'

function calcolaPrezzo() {
  // Dati utente
  const km = prompt("Quanti chilometri vuoi percorrere?");
  const eta = prompt("Quanti anni hai?");

  
  const prezzoBase = km * 0.21;

  // Sconti
  let prezzoFinale;
  if (eta < 18) {
    prezzoFinale = (prezzoBase * Math.floor((1 - 0.2) * 100)) / 100; // Sconto del 20%
  } else if (eta > 65) {
    prezzoFinale = (prezzoBase * Math.floor((1 - 0.4) * 100)) / 100; // Sconto del 40%
  } else {
    prezzoFinale = prezzoBase;
  }

  // Risultato
  document.getElementById(
    "prezzo"
  ).textContent = `Il prezzo del tuo biglietto è: €${prezzoFinale.toFixed(2)}`;
}