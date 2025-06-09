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

export interface ISimpleResponse {
    success: boolean
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

/**
 * Интерфейс базового события календаря.
 */
export interface IScheduleEvent {
    id: string;
    title: string;
}

/**
 * Интерфейс состояния формы событий календаря.
 */
export interface IScheduleEventState extends IScheduleEvent {
    sendDate?: string;
    userEventId?: string;
    disabled?: boolean;
}

/**
 * Интерфейс получаемых базовых событий с бэка.
 */
export interface IEvents {
    events: IScheduleEvent[];
}

/**
 * Интерфейс существующего события конкретного пользователя.
 */
export interface IUserScheduleEvent {
    id: string,
    sendDate: string,
    send_date?: string,
    event: IScheduleEvent
    disabled?: boolean;
}

/**
 * Интерфейс получаемых сущесвтующих пользовательских событий с бэка.
 */
export interface IUserEvents {
    eventTasks: IUserScheduleEvent[];
}



