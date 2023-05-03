export const wordList=(arg)=>{
    let str=arg.trim()
    let arr=str.split(" ")
    arr=arr.filter((e)=>e!="")
    return arr
}