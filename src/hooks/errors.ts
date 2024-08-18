/* eslint-disable react-hooks/rules-of-hooks */

import { IErrorMessage } from "@/interfaces";
import { useState } from "react";




export function userError() {
    const [errorMessage, setErrorMessage] = useState<IErrorMessage>({
        error: false,
        message: ""
    })

    function handleError(error: any) {
        let errorMsg = "Ocorreu um erro inesperado. Tente novamente mais tarde.";

        if (error.response) {
            switch (error.response.status) {
                case 400:
                    errorMsg = "Solicitação inválida.";
                    break;
                     
                case 401:
                    errorMsg = "Não autorizado. Verifique suas credenciais.";
                    break;

                case 500:
                    errorMsg = "Erro interno do servidor. Tente novamente mais tarde.";
                    break;

                default:
                    errorMsg = "Erro na resposta da API.";
        }

        } else if (error.request) {

            errorMsg = "Problema de conexão. Verifique sua internet.";

        } else if (error.code === "ECONNABORTED") {

            errorMsg = "A requisição demorou muito e foi cancelada. Tente novamente.";

        } else if (error.code === "ERR_BAD_RESPONSE") {

            errorMsg = "Resposta da API inválida. Tente novamente.";
        }

        console.error("Erro na requisição:", error);
        setErrorMessage({ error: true, message: errorMsg });
    }
    return {
        errorMessage,
        setErrorMessage,
        handleError
    }
}