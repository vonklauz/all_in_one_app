import type { ChangeEvent, InputHTMLAttributes, ReactNode } from 'react';
import { InputMask } from '@react-input/mask';
import styles from './Input.module.css';
import type { IInputProps } from '.';

export interface IMaskedInputProps extends IInputProps {
    mask: string;
    replacement: RegExp;
}

export const MaskedInput = ({
    label,
    type = 'text',
    name,
    id,
    value,
    onChange,
    placeholder,
    children,
    mask,
    replacement,
    ...props
}: IMaskedInputProps) => {
    return (
        <div className={styles.formRow}>
            <label
                htmlFor={id ? id : name ? name : ''}
                className={styles.formLabel}
            >{label}</label>
            <div className={`${styles.inputWrapper} ${props.disabled ? styles.readOnly : ''}`}>
                <InputMask
                    mask={mask}
                    replacement={{_: replacement}}
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