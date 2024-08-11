import { atom, } from 'jotai'
import {atomWithStorage} from 'jotai/utils'
export {atom} from 'jotai'


// export const isDarkTheme = atom(false)

export const darkMode = atomWithStorage('dark',false)

// export const changeTheme = atom(null, (get,set)=>{
//     set(isDarkTheme, !get(isDarkTheme))
// })