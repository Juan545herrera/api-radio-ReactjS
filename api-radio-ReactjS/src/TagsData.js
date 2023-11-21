import { useEffect, useState } from "react";


export const TagsData = (url) => {

    const [tags, setTags] = useState({

        data: null,
        isLoading: false,
        errors: null       
    })

    const fetchTags = async () => {
        
        try{
            const response = await fetch(url);
            const data = await response.json();

            setTags({
                data,
                isLoading: false,
                errors: null
            })
            console.log(data);
        }catch(error){
            setTags({
                data: null,
                isLoading: false,
                errors: error
            })
            console.log(error);
        }    
    }

    useEffect (() => {
        if (!url) return
        fetchTags();
    }, [url])

    const { data, isLoading, errors } = tags;

    return {
        data,
        isLoading,
        errors
    }

}