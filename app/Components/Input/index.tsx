import type { ChangeEvent, InputHTMLAttributes, ReactNode } from 'react';
import styles from './Input.module.css';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    type?: 'text' | 'email' | 'password' | 'number' | 'search';
    name?: string;
    id?: string;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    children?: ReactNode;
}

export const Input = ({
    label,
    type = 'text',
    name,
    id,
    value,
    onChange,
    placeholder,
    children,
    defaultValue,
    ...props
}: IInputProps) => {
    return (
        <div className={styles.formRow}>
            <label
                htmlFor={id ? id : name ? name : ''}
                className={styles.formLabel}
            >{label}</label>
            <div className={`${styles.inputWrapper} ${props.disabled ? styles.readOnly : ''}`}>
                <input
                    defaultValue={defaultValue || ''}
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
        </div>
    )
};