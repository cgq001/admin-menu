import Cookie from 'js-cookie';

const Token = 'token';

export function getToken(){
    return Cookie.get(Token);
}

export function setToken(token){
    return Cookie.set(Token,token)
}

export function removeToken(){
    return Cookie.remove(Token)
}