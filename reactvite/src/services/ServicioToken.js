export async function token(){
    const URI="https://accounts.spotify.com/api/token"
    let peticion={
    method:"POST",
    body:"grant_type=client_credentials&client_id=5938fd7d0e5f4d889ba4db749d5780ad&client_secret=63d8eca3cf88416ca881b4f92588b05b",
    headers:{
        "Content-Type": "application/x-www-form-urlencoded"
    }
    
    }
    let respuesta=await fetch(URI,peticion)
    let answer=await respuesta.json()
    let token=`${answer.token_type} ${answer.access_token}`
    return(token)
}
