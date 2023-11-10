import axios from "axios"



export const commonAPI = async (httpMeathod,url, reqBody)=>{
    let reqConfig = {
        
            method: httpMeathod,
            url,
            data:reqBody,
            Headers :{
              "content-Type":"application/json"
            }
          
}
return await axios(reqConfig).then((result)=>{
    return result
}).catch((err)=>{
    return err
})
}