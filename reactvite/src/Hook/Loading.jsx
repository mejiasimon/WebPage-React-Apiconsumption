import { useState,useEffect } from "react"
export function Loading (){
    const [loading,setLoading]=useState(true)
    const [time,setTime]=useState(0)
    
    useEffect(function(){
        if(time>0){
            setLoading(false)
        }else{
            setLoading(true)
        }

    },[tiempo])
    
    
    setTimeout(function(){
setTime(1)
    },5000)
    
    if (loading==true) {
        return(<>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <img className="img-flui mx-auto d-block" src="../../src/assets/vecteezy_loading-circle-icon-loading-gif-loading-screen-gif-loading_8202382_205.mp4" alt="" />
                </div>
            </div>
        </div>
        </>)
    }
    else{
        return(<>
        
        <h4>ya cargo</h4>
        </>)
    }
}