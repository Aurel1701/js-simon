//Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
//Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
const numberElement = document.querySelector('.numbers')
const numberRandom = []

while (numberRandom.length !== 5) {

    const numero = Math.floor(Math.random()*100)

    if (!numberRandom.includes(numero)) {
        numberRandom.push(numero)
        
    }

    
    numberElement.innerHTML = `memorizza questi numeri:${numberRandom}`

    setTimeout(() => {
        user_attempts = []
        for (let index = 0; index < 5; index++) {
            const user =  Number(prompt(' inserisci un numero che hai visto prima '))
             console.log(user);
            if (numberRandom.includes.user && !user_attempts.includes(user)) {
                 user.attempts.push(user)
             }
            
        }
        alert(`hai indovinato ${user_attempts.length}/${numberRandom.length} i numeri individuati sono :${user_attempts}` )
        
    }, 3000);
}