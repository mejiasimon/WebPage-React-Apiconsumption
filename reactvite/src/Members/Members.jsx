import './Members.css'
import WOW from 'wow.js'
import 'animate.css'
export function Members (){
    const wow=new WOW(function(){
        wow.init()
            },[])
return(
    <>
<div className="members">
<h1 className='Members-text'>INTEGRANTES</h1>
<div className="container-tarjetas">
    <div className="container-Members">
<div id='primero' className="tarjeta wow animate__animated animate__backInDown">
<img src="https://cuartetodenos.com.uy/wp-content/uploads/2022/07/Cuarteto18212-1.jpg" alt="" />
</div>
<div id='segundo' className="tarjeta wow animate__animated animate__backInDown">
    <img src="https://cuartetodenos.com.uy/wp-content/uploads/2022/07/Cuarteto18157-1.jpg" alt="" />
</div>
<div id='tercero' className="tarjeta wow animate__animated animate__backInDown">
    <img src="	https://cuartetodenos.com.uy/wp-content/uploads/2022/07/Cuarteto18150-1.jpg" alt="" />
</div>
<div id='cuarto' className="tarjeta wow animate__animated animate__backInDown">
    <img src="https://cuartetodenos.com.uy/wp-content/uploads/2022/07/Cuarteto18194-1.jpg" alt="" />
</div>
<div id='quinto' className="tarjeta wow animate__animated animate__backInDown">
    <img src="	https://cuartetodenos.com.uy/wp-content/uploads/2022/07/Cuarteto18200-1.jpg" alt="" />
</div>
    </div>
    </div>
</div>
    
    
    </>
)



}