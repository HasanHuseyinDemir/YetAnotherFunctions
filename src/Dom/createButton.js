export const createButton=(c,onclick)=>{
    let btn=document.createElement("button")
    btn.addEventListener("click",()=>{onclick()})
    if(typeof c=="object"){
        btn.append(c)
    }else if(typeof c=="string"){
        btn.textContent=c
    }
    return btn
}