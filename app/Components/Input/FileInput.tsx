import { useCallback, useRef, type ChangeEvent, type InputHTMLAttributes, type ReactNode } from 'react';
import styles from './Input.module.css';

export interface IFileInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name?: string;
    id?: string;
    value?: string;
    error?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    children?: ReactNode;
    fileName?: string;
}

export const FileInput = ({
    label,
    name,
    id,
    value,
    error,
    onChange,
    children,
    fileName,
    ...props
}: IFileInputProps) => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    return (
        <div className={styles.formRow}>
            <label
                htmlFor={id ? id : name ? name : ''}
                className={styles.formLabel}
            >{label}</label>
            <div className={`${styles.inputWrapper} ${props.disabled ? styles.readOnly : ''}`}>
                <input
                    type="file"
                    name={name}
                    id={id}
                    value={value}
                    onChange={(e) => onChange && onChange(e)}
                    className="hidden"
                    ref={fileInputRef}
                    {...props}
                />
                <span className={`${styles.input} ${styles.inputLikeSpan}`} onClick={() => fileInputRef?.current?.click()}>{fileName ? fileName : 'Выберите файл'}</span>
                {children}
            </div>
            {error && <span className={styles.error}>{error}</span>}
        </div>
    )
};