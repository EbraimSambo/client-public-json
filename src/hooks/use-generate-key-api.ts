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

    const { errorMessage, setErrorMessage, handleError } = userError()

    async function sendData() {
        setErrorMessage({
            error: false,
            message: ""
        })
        setSuccess(false)
        startTransition(true)
        try {
            const response = await configInstance.postForm('api/create')
            if (response?.data && response?.data.apiKey && response?.data.expiration) {
                setResponse({
                    keyApi: response.data.apiKey,
                    expiration: Number(response.data.expiration),
                });
                setSuccess(true);
            } else {
                setErrorMessage({ error: true, message: 'Resposta da API inválida.'});
                throw new Error('Resposta da API inválida.');
            }
        } catch (error) {
            handleError(error);
        } finally {
            startTransition(false);
        }


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