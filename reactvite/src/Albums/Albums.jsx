import './Albums.css'
export function Albums(){
const laminas=[
    {
        id:"1",
img:"https://firebasestorage.googleapis.com/v0/b/cuarte-f6c14.appspot.com/o/alberto-wolf.jpg?alt=media&token=b228e426-ac62-445f-8d74-6c3dcce5959e"
    },
    {
        id:"2",
img:"https://firebasestorage.googleapis.com/v0/b/cuarte-f6c14.appspot.com/o/apocalipsis-zombie.jpg?alt=media&token=23f3a6ca-e248-4589-8bf8-04b0f0838590"
    },
    {
        id:"3",
img:"https://firebasestorage.googleapis.com/v0/b/cuarte-f6c14.appspot.com/o/barrancabajo.jpg?alt=media&token=e764d5f7-da8f-46d8-87a6-80a21ea110cf"
    },
    {
        id:"4",
img:"https://firebasestorage.googleapis.com/v0/b/cuarte-f6c14.appspot.com/o/cancioness-del-corazon.jpg?alt=media&token=80981559-0a87-4fbd-b8f1-b1e57d331c08"
    },
    {
        id:"5",
img:"https://firebasestorage.googleapis.com/v0/b/cuarte-f6c14.appspot.com/o/cortamambo.jpg?alt=media&token=95c8b443-0986-456a-b65b-79e5533baaeb"
    },
    {
        id:"6",
img:"https://firebasestorage.googleapis.com/v0/b/cuarte-f6c14.appspot.com/o/cuartetobipolar.jpg?alt=media&token=0791bfd0-9494-4229-bfb5-95a0a484eb48"
    },
    {
        id:"7",
img:"https://firebasestorage.googleapis.com/v0/b/cuarte-f6c14.appspot.com/o/cuartetoemilio.jpg?alt=media&token=b4d352ab-6f44-4e40-9482-74bd49515341"
    },
    {
        id:"8",
img:"https://firebasestorage.googleapis.com/v0/b/cuarte-f6c14.appspot.com/o/cuartetonavidad.jpg?alt=media&token=d82a41ef-5b0d-4fbb-a9f8-74478d51ad5c"
    },
    {
        id:"9",
img:"https://firebasestorage.googleapis.com/v0/b/cuarte-f6c14.appspot.com/o/el-tren-bala.jpg?alt=media&token=7dc471e7-b09b-4705-9cbb-d0cd04858fa9"
    },
    {
        id:"10",
img:"https://firebasestorage.googleapis.com/v0/b/cuarte-f6c14.appspot.com/o/habla-tu-espejo.jpg?alt=media&token=21a9b9d0-a707-47b2-9d70-d5d8a67c91b2"
    },
    {
        id:"11",
        img:"https://firebasestorage.googleapis.com/v0/b/cuarte-f6c14.appspot.com/o/heladera.jpg?alt=media&token=dae7df9e-68fc-48ae-ba03-9d9419bb94b4"
    },
    {
        id:"12",
        img:"https://firebasestorage.googleapis.com/v0/b/cuarte-f6c14.appspot.com/o/jueves.jpg?alt=media&token=e68b31e9-767b-4b65-95af-816f60817020"
    },
    {
        id:"13",
        img:"https://firebasestorage.googleapis.com/v0/b/cuarte-f6c14.appspot.com/o/lamina-once.jpg?alt=media&token=4c81f4e0-27f3-46af-b1e1-a164224b260c"
    },
    {
        id:"14",
        img:"https://firebasestorage.googleapis.com/v0/b/cuarte-f6c14.appspot.com/o/no-somos-latinos.jpg?alt=media&token=62c88090-c74a-473e-a66e-7b6a14b983b6"
    },
    {
        id:"15",
        img:"https://firebasestorage.googleapis.com/v0/b/cuarte-f6c14.appspot.com/o/porfiado.jpg?alt=media&token=c0c2d959-fb86-4427-9f8e-7b7b9f709a4d"
    },
    {
        id:"16",
img:"https://firebasestorage.googleapis.com/v0/b/cuarte-f6c14.appspot.com/o/raro.jpg?alt=media&token=d604be4f-d104-4659-b82d-7d7c840c90dc"
    },
    {
        id:"17",
img:"https://firebasestorage.googleapis.com/v0/b/cuarte-f6c14.appspot.com/o/soy-una-arveja.jpg?alt=media&token=6621da03-2890-46e8-8e76-f012d178ef1b"}
    ]

return(<>
<div className="galeria">
    <h1 className='titulo'>DISCOGRAFIA</h1>
<div className="container-albums">
<div className="row justify-content-center">
{
    laminas.map(function(lamina){
        return(
<div className="col-lg-3 col-md-6">
    <a href=""><img className='img-fluid' src={lamina.img} alt="" /></a>
</div>
        )

    })
}
</div>
   
        </div>
</div>


</>)
}