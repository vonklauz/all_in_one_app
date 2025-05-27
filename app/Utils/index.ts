import type { LoginResponse, User } from "~/Models";

export const parseJwt = (token: string) => {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

export const handleLoginSuccess = (data: LoginResponse) => {
    const accessToken = data.access_token;
    const user = parseJwt(accessToken);

    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('user', JSON.stringify(user));
}

export const handleLogoutSuccess = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
}

export const getDefaultUser = (): User => (
    {
        firstName: '',
        secondName: '',
        lastName: '',
        userId: '',
        email: '',
        phone: ''
    }
)