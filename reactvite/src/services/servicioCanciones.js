export async function Canciones(){
//Receta para consumir apis
//1.Para donde vamos url+ep
const ids="0rre7z2j7c3zbxasPRhshi,6CLlWqMKd95lyqfHKBzSM4,6Jp05umHWHkUhR6V6TnonS,1ffZ5xExmmOr15QQzYrXyf,4X6PQwYWxtGGtKjAfX6wa6,4Ay02WMMtEKaySj1mtPTga,6evTdl2CjuBbkiCaXOKUKW,4fNaCXMkt7UWlUf7W8ncFz,3BQcHexO7ax9cofAYeNwTo,3xbz47G6HXJnh7xB1tzekc,5I6NoY1Bon3fgdreGQJjPZ,29OvepmbxMRRmrZCwREeHx,2ifnB89PpCOFh12OZVVeHO,2nYkOzI6plzhX7StDOlMOA,30k1g1RNzspPOJ7gSnQawf,1yf1JecN6PiQqab6umYHPj"
const URI=`https://api.spotify.com/v1/albums?ids=0rre7z2j7c3zbxasPRhshi,6CLlWqMKd95lyqfHKBzSM4,6Jp05umHWHkUhR6V6TnonS,1ffZ5xExmmOr15QQzYrXyf,4X6PQwYWxtGGtKjAfX6wa6,4Ay02WMMtEKaySj1mtPTga,6evTdl2CjuBbkiCaXOKUKW,4fNaCXMkt7UWlUf7W8ncFz,3BQcHexO7ax9cofAYeNwTo,3xbz47G6HXJnh7xB1tzekc,5I6NoY1Bon3fgdreGQJjPZ,29OvepmbxMRRmrZCwREeHx,2ifnB89PpCOFh12OZVVeHO,2nYkOzI6plzhX7StDOlMOA,30k1g1RNzspPOJ7gSnQawf,1yf1JecN6PiQqab6umYHPj`
const Token="Bearer BQDPODryuLkD08WgPrZafv561K_XGhM3R3aUZEIJbWcbK6mL0Yh1MxfnISMEPwtk3RXlAQ3pIx213ffj0BJ21vFtfkSr3RmGPtiPW3112F8k7cHnQ14 "
//2. que vas a hacer
//configuro la peticion
let peticion={
    method:"GET",
    headers:{
        "Authorization":Token
    }
}
//3. salga 
//utilice la promesa decth para ir al back y consumir api
let respuesta=await fetch(URI,peticion)
let canciones=await respuesta.json()
return (canciones)
    
}