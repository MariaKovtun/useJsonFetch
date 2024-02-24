import {useEffect, useState} from "react"

export default function useJsonFetch(url: string) {
    const [data, setData] = useState<{status: string}>();
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState<string>();

    const fetchData = (url: string) => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setData(data);
            setLoading(false);
        })
        .catch(error => {
            setLoading(false);
            setError(error);
        });
    }

    useEffect(() => fetchData(url),[url]);

    return [{data,isLoading,error}];
}


