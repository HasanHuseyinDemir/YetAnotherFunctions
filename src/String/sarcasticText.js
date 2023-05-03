import { fiftyChance } from "../Random/fiftyChance.js"

export const sarcasticText=(arg)=>{
    let chars=arg.toLowerCase().split("")
    let str=""
    for(i in chars){
        fiftyChance()?str+=chars[i].toUpperCase():str+=chars[i]
    }
    return str
}