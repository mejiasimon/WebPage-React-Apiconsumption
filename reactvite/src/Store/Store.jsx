import './Store.css'

export function Store() {
    const Productos = [
        {
            id: 1,
            nombre: "paranoia",
            descripcion: "500$",
            foto: "https://cuartetodenos.com.uy/wp-content/uploads/2022/12/PARANOIA_MOCKUP-705x661.jpeg"
        },
        {
            id: 2,
            nombre: "picante",
            descripcion: "500$",
            foto: "https://cuartetodenos.com.uy/wp-content/uploads/2022/12/PICANTE_MOCKUP-705x661.jpeg"
        },
        {
            id: 3,
            nombre: "lamina once",
            descripcion: "500$",
            foto: "https://cuartetodenos.com.uy/wp-content/uploads/2022/07/LaminaOnce-705x661.jpg"
        },
        {
            id: 4,
            nombre: "flan",
            descripcion: "500$",
            foto: "https://cuartetodenos.com.uy/wp-content/uploads/2022/07/Flan-gris-2-705x651.jpeg"
        },
        {
            id: 5,
            nombre: "maldito show",
            descripcion: "500$",
            foto: "https://cuartetodenos.com.uy/wp-content/uploads/2022/05/Maldito-Show-Lavanda-mock-up-705x661.jpg"
        },
        {
            id: 6,
            nombre: "frankenstein posmo",
            descripcion: "500$",
            foto: "https://cuartetodenos.com.uy/wp-content/uploads/2022/07/Frankestein-Posmo-705x661.jpg"
        },
        {
            id: 7,
            nombre: "la ciudad sin alma",
            descripcion: "500$",
            foto: "https://cuartetodenos.com.uy/wp-content/uploads/2022/02/La-Ciudad-sin-alma-705x620.png"
        },
        {
            id: 8,
            nombre:"DR hermes",
            descripcion: "500$",
            foto: "https://cuartetodenos.com.uy/wp-content/uploads/2021/09/Hermes-blanca-705x705.jpeg"
        },
        
    ]
    function hacer(evento){
evento.target.classList.add("filter")
    }
    function hacer2(evento){
        evento.target.classList.remove("filter")
    }
    return(<>
                <h1 className='titulo'>TIENDA</h1>
        <div className="galeria">
        <div className="container-abums">
        <div className="row justify-content-center">
        {
             
             Productos.map(function(producto){
                 return(
                    
         <div id='tarjeta' className="col-lg-3 col-md-6 row-prodcutos">
             <h1>{producto.nombre}</h1>
             <p>{producto.descripcion}</p>
             <img className='img-fluid producto' onMouseOver={hacer} onMouseLeave={hacer2} src={producto.foto} alt="" />
         </div>
                 )
         
             })
         }
                    </div>
            
                </div>
        </div>
        
        
        </>)
   
}
