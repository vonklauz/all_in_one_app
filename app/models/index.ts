export type Link = {
    label: string,
    path: string,
    isProtected?: boolean
}

export type FormAction = (formData: FormData) => void;