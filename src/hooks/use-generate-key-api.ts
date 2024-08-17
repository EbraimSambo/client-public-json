import { configInstance } from "@/config/global/axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { userError } from "./errors";
import { useResult } from "./results";



export function useGenerateKeyApi() {

    const { handleSubmit } = useForm()
    const [isPadding, startTransition] = useState(false)
    const { response, setResponse } = useResult()

    const [success, setSuccess] = useState(false)

    const { errorMessage, setErrorMessage } = userError()

    async function sendData() {
        setErrorMessage({
            error: false,
            message: ""
        })
        setSuccess(false)
        startTransition(true)
        configInstance.postForm('api/create')
            .then((res) => {
                setResponse({
                    keyApi: res.data.apiKey,
                    expiration: Number(res.data.expiration)
                })
                setSuccess(true)
            })
            .catch((error) => {
                console.log(error)
                if (error?.request?.status == 0) {
                    console.log("aqui 1")

                    return setErrorMessage({
                        error: true,
                        message: "Alguma coisa ocorreu com a sua conexão, tente maís tarde!"
                    })
                }

                if (error?.code == "ERR_BAD_RESPONSE") {
                    console.log("aqui 2")

                    return setErrorMessage({
                        error: true,
                        message: "Não conseguismos buscar a sua chave de api, tente maís tarde!"
                    })
                }

                if (error?.code == "ECONNABORTED") {
                    console.log("aqui 3")
                    return setErrorMessage({
                        error: true,
                        message: "Alguma coisa ocorreu com a sua conexão, tente maís tarde!"
                    })
                }

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