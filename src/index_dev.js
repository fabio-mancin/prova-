// le funzioni asincrone si dichiarano aggiungendo async prima dell'espressione
async function requestPollutionData() {
    // la nostra chiave è al sicuro nelle Environment Variables
    const API_KEY = process.env.API_KEY
    const data = API_KEY

    console.log(data) // facciamo ciò che vogliamo con i dati ottenuti: scelta, elaborazione, visualizzazione..
}

requestPollutionData()
// sarebbe meglio una IIFE: https://developer.mozilla.org/en-US/docs/Glossary/IIFE - non l'ho usata per rendere più chiaro il codice
