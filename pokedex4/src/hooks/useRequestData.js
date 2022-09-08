import axios from "axios"
import { useEffect, useState } from "react"

export const useRequestData = (initialState, url) => {
    const [data, setData] = useState(initialState)

    useEffect(() => {
        axios.get(url)
            .then((res) => {
                setData(res.data)
            }).catch((err) => {
            })
    }, [url])

    return [data]
}