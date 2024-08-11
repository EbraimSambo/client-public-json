import { configInstance } from "@/config/global/axios";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";



export function useGenerateKeyApi() {

    const { handleSubmit } = useForm()
    const [isPadding, startTransition] = useState(false)
    const [response, setResponse] = useState({
        keyApi: "",
        expiration: 0
    })

    const [success, setSuccess] = useState(false)
    const [errorMessage, setErrorMessage] = useState({
        error: false,
        message: ""
    })

    async function sendData() {
        setErrorMessage({
            error: false,
            message: ""
        })
        setSuccess(false)
        startTransition(true)
        configInstance.postForm('api/create')
            .then((res) => {
                console.log(res.data)
                const dateExpiration = new Date(res.data.expiration).toDateString()
                console.log(dateExpiration)
                setResponse({
                    keyApi: res.data.apiKey,
                    expiration: Number(res.data.expiration)
                })
                setSuccess(true)
            })
            .catch((error) => {
                console.log(error)
                if (error?.request?.status == 0) return setErrorMessage({
                    error: true,
                    message: "Alguma coisa ocorreu com a sua conexão, tente maís tarde!"
                })

                if (error?.code == "ERR_NETWORK") return setErrorMessage({
                    error: true,
                    message: "Alguma coisa ocorreu com a sua conexão, tente maís tarde!"
                })

                if (error?.code == "ERR_BAD_RESPONSE") return setErrorMessage({
                    error: true,
                    message: "Alguma coisa ocorreu com a sua conexão, tente maís tarde!"
                })

                if (error?.code == "ECONNABORTED") return setErrorMessage({
                    error: true,
                    message: "Alguma coisa ocorreu com a sua conexão, tente maís tarde!"
                })

                if (error?.code == "ERR_NETWORK") return setErrorMessage({
                    error: true,
                    message: "Alguma coisa ocorreu com a sua conexão, tente maís tarde!"
                })


            }).finally(() => {
                startTransition(false)
            })
    }

    return {
        sendData,
        errorMessage,
        isPadding,
        handleSubmit,
        response,
        success,
        setSuccess
    }
}