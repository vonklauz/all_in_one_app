import type { ChangeEvent, InputHTMLAttributes, ReactNode } from 'react';
import styles from './Input.module.css';

interface IIputProps extends InputHTMLAttributes<HTMLInputElement> {
    type?: 'text' | 'email' | 'password' | 'number' | 'search';
    name?: string;
    id?: string;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    children?: ReactNode;
}

export const Input = ({
    type = 'text',
    name,
    id,
    value,
    onChange,
    placeholder,
    children,
    ...props
}: IIputProps) => {
    return (
        <div className={styles.inputWrapper}>
            <input
                type={type}
                name={name}
                id={id}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={styles.input}
                {...props}
            />
            {children}
        </div>
    )
};