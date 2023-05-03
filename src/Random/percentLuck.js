export const percentLuck=(percent)=>{
    if(percent<=100&&percent>=0){
        let p=percent/100
        return Math.random()<p
    }else{
        throw new TypeError("Percent must be a number 0-100")
    }
}