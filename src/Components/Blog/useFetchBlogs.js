import React, { useState, useEffect } from 'react'
import Axios from 'axios'

export const useFetch = (urlLink) => {

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    console.log(urlLink)

    const beginFetch = async () => {

        setLoading(true)

        try {
            const req = await Axios.get(urlLink)
            if(req.data != null) {
                setData(req.data)
                setError(null)
                setLoading(false)
            } else {
                setData(null)
                setError("Error")
                setLoading(false)
            }
        } catch (e) {
            setData(null)
            setError(e)
            setLoading(false)
        }

    }

    useEffect(() => {
         beginFetch()
    }, [urlLink])

    return {
        loading,
        data,
        error
    }

}