
export async function Canciones(token){
        const URI=`https://api.spotify.com/v1/albums?ids=0rre7z2j7c3zbxasPRhshi,6CLlWqMKd95lyqfHKBzSM4,6Jp05umHWHkUhR6V6TnonS,1ffZ5xExmmOr15QQzYrXyf,4X6PQwYWxtGGtKjAfX6wa6,4Ay02WMMtEKaySj1mtPTga,6evTdl2CjuBbkiCaXOKUKW,4fNaCXMkt7UWlUf7W8ncFz,3BQcHexO7ax9cofAYeNwTo,3xbz47G6HXJnh7xB1tzekc,5I6NoY1Bon3fgdreGQJjPZ,29OvepmbxMRRmrZCwREeHx,2ifnB89PpCOFh12OZVVeHO,2nYkOzI6plzhX7StDOlMOA,30k1g1RNzspPOJ7gSnQawf,1yf1JecN6PiQqab6umYHPj`
        let peticion = await fetch(URI,{
            method:"GET",
            headers:{
                "Authorization":token
            }
        })
        var canciones=await peticion.json()
        return(canciones)

}