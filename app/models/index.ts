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

export interface User extends Login {
    firstName: string;
    lastName: string;
    secondName?: string;
    phone: string;
}