import { IResultApiKey } from "@/interfaces";
import { useState } from "react";


export function useResult(){
    const [response, setResponse] = useState<IResultApiKey>({
        keyApi: "",
        expiration: 0
    })


    return {
        response,
        setResponse
    }
}