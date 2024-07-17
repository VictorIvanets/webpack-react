import { Article } from "pages/ArticlesPage/articleTypes/articleTypes"
import { useEffect, useState } from "react"


export type IuseDataFetch = [ 
    data: unknown[],
    isLoading: boolean,
    error?: string | number,
    status?: number
]

export function useDataFetch(url: string, auth?: string, method?: string, body?: unknown): IuseDataFetch {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [status, setStatus] = useState(null)


    let isheaders: Object = {}
    if (auth || method) {
        isheaders = 
        {
            method: method,
            headers: {
                'Content-Type': 'application/json test',
                authorization: auth
                },
            body: body 
        }
    }


    useEffect(()=> {
        setData([])
        setIsLoading(true)
        setError('')
        setStatus(null)

        fetch(url, isheaders)
            .then(
                (res)=>{
                    if (res.status !== 200) { //сервер не дает ошибки, только ответы. Обработка ошибок через статус
                        setStatus(res.status)
                    } else {
                        return res.json()
                    }
                }
            )
            .then(res => setData(res || []))
            .catch((e)=> setError(e.message))
            .finally(()=> setIsLoading(false))
    }, [url])

    return [data, isLoading, error, status]
}