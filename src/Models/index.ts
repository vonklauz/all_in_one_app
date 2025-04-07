export interface IParentProps {
    children: React.ReactNode;
}

export interface IInputProps {
    label: string;
    value?: string;
    type?: string;
    id?: string;
    name?: string;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IFormWrapperProps extends IParentProps {
    title?: string;
    subtitle?: string;
}