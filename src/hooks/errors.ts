import { IErrorMessage } from "@/interfaces";
import { useState } from "react";




export function userError() {
    const [errorMessage, setErrorMessage] = useState<IErrorMessage>({
        error: false,
        message: ""
    })

    return {
        errorMessage,
        setErrorMessage,
    }
}