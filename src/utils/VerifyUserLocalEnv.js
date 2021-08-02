import env from "./../env"
import {getText} from './Crypto'
export default (username, password) => {
    return env.users.filter(item => item.username === username &&  item.password === password).length > 0
}

export const veryToken = () =>{
    let tokenAuthUser =  ""
    let tokenAuthUserVerify = ""
    console.log(localStorage.getItem("token-auth-user"))
    console.log(localStorage.getItem("token-auth-user-verify"))
    try {
        tokenAuthUser = JSON.parse(getText(localStorage.getItem("token-auth-user")))
    } catch (error) {}
    
    try {
        tokenAuthUserVerify = JSON.parse(getText(localStorage.getItem("token-auth-user-verify")))
    } catch (error) {}
    if(typeof tokenAuthUser === 'object' && typeof tokenAuthUserVerify === 'object') {
        if(tokenAuthUser["username"] === tokenAuthUserVerify["verify"]){
            return true;
        }
    }
    return false
}