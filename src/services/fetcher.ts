import { clientURL } from "@/config/constants"
import { configInstance } from "@/config/global/axios"
import { redirect } from "next/navigation"


export const fetcher = async <T>(url: string) =>
   await configInstance.get<T>(url).then((res)=>res.data)
.catch((er)=>{if(er.response?.status === 404)return redirect(clientURL) })
