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

    /////// 2
    var classe = [
      {
        'nome':'Nicolò',
        'cognome':'Paganelli',
        'eta':29
      },
      {
        'nome':'Sara',
        'cognome':'Moretti',
        'eta':24
      },
      {
        'nome':'Lorenzo',
        'cognome':'Zammarchi',
        'eta':29
      },
      {
        'nome':'Samuele',
        'cognome':'Astolfi',
        'eta':29
      },
      {
        'nome':'Alessandro',
        'cognome':'D\'Antonio',
        'eta':29
      },
    ];
    // console.log(classe);

    for (var i = 0; i < classe.length; i++) {
      // console.log(classe[i]);
      // console.log(classe[i].nome);
      // console.log(classe[i].cognome);
      console.log('studente_' + (i+1) + ' Nome: ' + classe[i]['nome']);
      console.log('           Cognome: ' + classe[i]['cognome']);
    }

    /////// 3
    var nome = prompt('Come ti chiami?');
    var cognome = prompt('Qual\'è il tuo cognome?');
    var eta = parseInt(prompt('Quanti anni hai?'));

    var nuovoStudente = {
      'nome': nome,
      'cognome': cognome,
      'eta': eta
    }
    
    classe.push(nuovoStudente);
    console.log('Classe aggiornata');

    for (var i = 0; i < classe.length; i++) {
      console.log('studente_' + (i+1) + ' Nome: ' + classe[i]['nome']);
      console.log('           Cognome: ' + classe[i]['cognome']);
    }

  }
);
