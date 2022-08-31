import { useState, useEffect } from 'react'
import axios from 'axios'

export const useRequestData = (url) => {
    const [data, setData] = useState(undefined)

    useEffect(() => {
        axios.get(url)
            .then((response) => {
                setData(response.data)
            }).catch((error) => {
                console.log(error.message);
            })
    }, [url])

    return [data]
}