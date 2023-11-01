import React from 'react'
import { useEffect } from "react";

const Nosotros = () => {

    useEffect(() => {

        const clickear = () => {
            console.log("click")
        }

    window.addEventListener("click", clickear)
    return () => {
        window.removeEventListener("click", clickear)
    }
    
    }, [])
    
    return (
        <div>
            <h1>Nosotros</h1>
            Este es el componente "nosotros"
        </div>
    )
}

export default Nosotros