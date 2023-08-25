import axios from "axios"
import { useState, useEffect } from "react"
import Flower from "./Flower"

const API = process.env.REACT_APP_API_URL


export default function Flowers(){

    const [flowers, setFlowers] = useState([])

    useEffect(()=>{
        axios
        .get(`${API}/flowers`)
        .then((response) => {
            setFlowers(response.data)
        })
        .catch((error) => console.warn("catch", error))
    },[])
    console.log(flowers)


    return (
        <div className="flowers">
            {flowers.map((flower) => {
                return <Flower key={flower.id} flower={flower}/>
            })}
        </div>
    )

}