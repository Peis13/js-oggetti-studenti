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

    // Array di oggeti
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

    // Ciclo ogni indice dell'array classe
    // aggiungo nell'html nome e cognome di ogni studente
    for (var i = 0; i < classe.length; i++) {
      var studente = classe[i];
      aggiungiHtml(studente);
    }

    // Al click su aggiungi leggo i valori inseriti nelle input
    // formo un nuovo oggetto con i valori inseriti
    // aggiungo l'oggetto all'array di studenti 'classe'
    // aggiungo lo studente alla lista presente nell'html
    $('.aggiungi').click(
      function() {
        var nome = $('.nome').val();
        var cognome = $('.cognome').val();
        var eta = $('.eta').val();

        var nuovoStudente = {
          'nome': nome,
          'cognome': cognome,
          'eta': eta
        }
        classe.push(nuovoStudente);
        aggiungiHtml(nuovoStudente);
      }
    );

    // Funzione che appende l'oggetto che gli passo per argomento nell'html
    function aggiungiHtml(elemento) {
      var risorsa = $('#entry-template').html();
      var template = Handlebars.compile(risorsa);
      var html = template(elemento);
      $('.classe').append(html);
    }

  }
);
