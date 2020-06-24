/////// 1
// Creare un oggetto che descriva uno studente con le seguenti proprietà:
//  --> nome, cognome e età.
// Stampare a schermo attraverso il for in tutte le proprietà.
/////// 2
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
/////// 3
// Dare la possibilità all’utente attraverso 3 prompt di
// aggiungere un nuovo oggetto studente inserendo nell’ordine:
//  --> nome, cognome e età.

$(document).ready(
  function() {

    /////// 1
    var studente = {
      'nome':'Nicolò',
      'cognome':'Paganelli',
      'eta':29
    };
    // console.log(studente);
    // console.log(studente.nome);
    // console.log(studente.cognome);
    // console.log(studente.eta);
    // console.log(studente['nome']);
    // console.log(studente['cognome']);
    // console.log(studente['eta']);

    for (var chiave in studente) {
      console.log(studente[chiave]);
    };


  }
);
