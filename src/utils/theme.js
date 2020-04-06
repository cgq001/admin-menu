import Cookie from 'js-cookie';

const Theme = 'theme';

export function getTheme(){
    return window.localStorage.getItem(Theme)
    // return Cookie.get(Theme);
}

export function setTheme(token){
    // return Cookie.set(Theme,token)
    return window.localStorage.setItem(Theme,token)
}

export function removeTheme(){
    return window.localStorage.removeItem(Theme)
    // return Cookie.remove(Theme)
}