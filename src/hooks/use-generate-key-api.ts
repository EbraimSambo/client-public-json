import { configInstance } from "@/config/global/axios";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";



export function useGenerateKeyApi(){

    const {handleSubmit} = useForm()
    const [isPadding, startTransition] = useState(false)
    const [response,setResponse] = useState({
        keyApi: "",
        expiration: 0
    })

    const [success,setSuccess] = useState(false)
    async function sendData() {
        setSuccess(false)
        startTransition(true)
          configInstance.postForm('api/create')
        .then((res)=>{
            console.log(res.data)
            const dateExpiration = new Date(res.data.expiration)
            console.log(dateExpiration)
            setResponse({
                keyApi: res.data.apiKey,
                expiration: Number(res.data.expiration)
            })
            setSuccess(true)
        })
        .catch((error)=>{
            console.log(error)
        }).finally(()=>{
            startTransition(false)
        })
    }

    return {sendData,isPadding,handleSubmit,response,success,setSuccess}
}