import CryptoJS from "crypto-js";
import env from "./../env"

export const cipherText = (text)=>{
    return CryptoJS.AES.encrypt(text, env.keyPrivateApp).toString();
}

export const getText = (ciphertext) => {
    let bytes  = CryptoJS.AES.decrypt(ciphertext, env.keyPrivateApp);
    return bytes.toString(CryptoJS.enc.Utf8);
}

