// Consegna:
// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
// per i multipli di 3 stampi “Fizz” al posto del numero e
// per i multipli di 5 stampi “Buzz” al post del numero.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.

// inizializzazione  della variabile n
let n = 100; //numero

// inizializzazione della variabile associata alla lista
const numbersElement = document.querySelector('.numbers'); // Object | null

// inizializzazione del ciclo for per le n iterazioni
for (let i = 0; i < n; i++){

    // controllo del numero da stampare a video e inserimento in una variabile
    let num = i + 1; //numero

    // creazione dell'elemento li
    const liElement = document.createElement('li');

    // dichiarazione delle variabili usate per i moduli 
    let mod3 = num % 3;
    let mod5 = num % 5;    

    // se il numero è sia divisibile per 3 che per 5 allora fizbuz
        // per essere divisibile per 3 il modulo 3 del numero dev'essere uguale a 0 lo stesso vale per il modulo 5 se il numero è divisibile per 5
        if( mod3 == 0 && mod5 ==0){
            // aggiunta della classe all'elemento li
            liElement.classList.add('fizz-buzz');
            
            //inserimento nell'html del contenuto del elemento li
            liElement.innerHTML = `<span>FizzBuzz</span>`;

            //collegamento dell'elemento li al padre ul .numbers
            numbersElement.append(liElement);

        } else if (mod3 == 0){      // se il numero è divisibile solo per 3 allora stampa Fizz
                // aggiunta della classe all'elemento li
                liElement.classList.add('fizz');
            
                //inserimento nell'html del contenuto del elemento li
                liElement.innerHTML = `<span>Fizz</span>`;

                //collegamento dell'elemento li al padre ul .numbers
                numbersElement.append(liElement);

            } else if ( mod5 == 0){     // se il numero è divisibile solo per 5 allora stampa Buzz                
                // aggiunta della classe all'elemento li
                liElement.classList.add('buzz');
            
                //inserimento nell'html del contenuto del elemento li
                liElement.innerHTML = `<span>Buzz</span>`;

                //collegamento dell'elemento li al padre ul .numbers
                numbersElement.append(liElement);
            } else { // altrimenti stampa il numero
                // aggiunta della classe all'elemento li
                liElement.classList.add('number');
            
                //inserimento nell'html del contenuto del elemento li
                liElement.innerHTML = `<span>${num}</span>`;

                //collegamento dell'elemento li al padre ul .numbers
                numbersElement.append(liElement);
            } 
}