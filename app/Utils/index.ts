import type { LoginResponse, RegisterData, User } from "~/Models";
import { dispatch } from "~/Store";
import { getDefaultUser, setUser } from "~/Store/User/userSlice";

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
    localStorage.setItem('rawUser', JSON.stringify(user));
}

export const handleLogoutSuccess = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('rawUser');
    sessionStorage.removeItem('user');
    dispatch(setUser(getDefaultUser()));
}

export const clearPhoneNumberString = (phone: string): string => phone.split('').filter((el) => !['(', ')', '-', ' '].includes(el)).join('');

export const remapServerFieldToFrontFormat = (backendField: string): keyof RegisterData => {
    const fieldsMap: { [key: string]: keyof RegisterData } = {
        'first_name': 'firstName',
        'last_name': 'lastName',
        'second_name': 'secondName',
    }
    return fieldsMap[backendField] || backendField;
}