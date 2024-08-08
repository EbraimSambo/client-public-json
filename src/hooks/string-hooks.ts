import { useToast } from "@/components/ui/use-toast"
import { useRef, useState, useTransition } from "react"




export const useCopyText = () => {

    const textRef = useRef<HTMLElement>(null)
    const { toast } = useToast()
    const [isPending, setPadding] = useState(false)

    const handleClick = () => {
        if (textRef.current) {
            navigator.clipboard.writeText(textRef?.current?.textContent || '');
            toast({
                description: "Codigo copiado com sucesso"
            })
           
        }
    }
    return { textRef, handleClick, isPending }
}


function ap(){
  const s =  fetch("sss",{
        headers:{
            authorization: ""
        }
    })
    console.log(s)
}