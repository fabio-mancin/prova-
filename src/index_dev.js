// le funzioni asincrone si dichiarano aggiungendo async prima dell'espressione
async function requestPollutionData() {
    // la nostra chiave è al sicuro nelle Environment Variables
    const API_KEY = process.env.API_KEY

    // la parola chiave è await: è quella che dice a JS di fermarsi a questa riga finchè la fetch API non restituisce il risultato della richiesta
    const response = await fetch(`/* ... */${API_KEY}`) // non scriverò COME fare la richiesta, va capito dalla documentazione https://aqicn.org/json-api/doc/
    const data = await response.json()

    console.log(data) // facciamo ciò che vogliamo con i dati ottenuti: scelta, elaborazione, visualizzazione..
}

requestPollutionData()
// sarebbe meglio una IIFE: https://developer.mozilla.org/en-US/docs/Glossary/IIFE - non l'ho usata per rendere più chiaro il codice
