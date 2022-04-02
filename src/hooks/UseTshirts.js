import { useEffect, useState } from "react"

const useTShirts = () => {
    const [tSirts, setTshirts] = useState([])
    useEffect(() => {
        fetch('t-shirt.json')
            .then(res => res.json())
            .then(data => setTshirts(data))
    })
    return [tSirts, setTshirts]

}

export default useTShirts