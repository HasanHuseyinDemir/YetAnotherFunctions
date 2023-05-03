import { isArray } from "../Control/isArray.js"
import { randomRange } from "./randomRange.js"

export const randomPick=(arr)=>{
    if(isArray(arr)){
        return arr[randomRange(arr.length)]
    }else{
        throw new TypeError("RandomPick argument is must be a array")
    }
}