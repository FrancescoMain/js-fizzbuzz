// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.


// inseriamo un contatore 
const container = document.getElementById("container");

for (let index = 1; index <= 100 ; index++) {

    // partiamo dal caso che annulla gli altri a seguire
    if (index % 3 == 0 && index % 5 == 0) {
        // BONUS 1: Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
        const element = document.createElement('div');
        element.append("FizzBuzz") 
        // BONUS 2: Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
        element.classList.add("fizzbuzz")
        container.append(element);

    } else if (index % 3 == 0) { 
        const element = document.createElement('div');
        element.append("Fizz")
        element.classList.add("fizz")
        container.append(element);
        
    } else if (index % 5 == 0) {
        const element = document.createElement('div');
        element.append("Buzz")
        element.classList.add("buzz")
        container.append(element);

    } else {
        const element = document.createElement('div');
        element.append(index)
        element.classList.add("box")
        container.append(element);


    }

    
    
}