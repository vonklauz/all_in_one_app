export type Link = {
    label: string,
    path: string,
    isProtected?: boolean
}

export type FormAction = (formData: FormData) => void;

export interface Login {
    email: string;
    password: string;
}

export interface RegisterData extends Login {
    firstName: string;
    lastName: string;
    secondName?: string;
    phone: string;
}

export interface LoginResponse {
    access_token: string;
    refresh_token: string;
}

export interface RawUser {
    first_name: string,
    last_name: string,
    second_name?: string,
    user_id: string,
    phone: string,
    email: string
}

export interface User {
    firstName: string;
    lastName: string;
    secondName?: string;
    userId: string;
    phone: string;
    email: string;
}
