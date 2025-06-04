export type Link = {
    label: string,
    path: string,
    isProtected?: boolean
}

export type FormAction = (formData: FormData) => void;

/**
 * Базовый тип для ответов от сервера.
 */
export interface IBaseSuccessResponse<T> {
    success: boolean;
    error?: string;
    data: T;
}

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

export interface IScheduleEvent {
    id: string;
    title: string;
}

export interface IScheduleEventState extends IScheduleEvent {
    sendDate?: string;
}

export interface IEvents {
    events: IScheduleEvent[];
}



