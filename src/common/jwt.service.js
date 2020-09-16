const ID_TOKEN = 'c0nb0LuXLaX';
export const getToken = () => {
    return localStorage.getItem(ID_TOKEN);
}

export const setToken = (_token) => {
    localStorage.setItem(ID_TOKEN, _token);
}

export const destroyToken = () => {
    localStorage.removeItem(ID_TOKEN);
}

export default {getToken, setToken, destroyToken};