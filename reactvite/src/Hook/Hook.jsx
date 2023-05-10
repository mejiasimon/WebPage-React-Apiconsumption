import { useState,useEffect } from "react"
export function Hook(){
    const [contador,setContador]=useState(0)
    useEffect(function(){
        setContador(contador+1)
    },[])
    function click(){
        setContador(contador+1)
    }
    return(
        <>
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <button onClick={click} type="button" className="btn btn-primary">click</button>
                    <h2>la cuenta va en:{contador} </h2>
                </div>
            </div>
            </div>
            </>
    )
}