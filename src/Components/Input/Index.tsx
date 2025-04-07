import { IInputProps } from '@/Models';
import styles from './styles.module.scss';

export const Input = ({ label, type = 'text', name, id, placeholder, onChange }: IInputProps) => {
    return (
        <div className="row">
            <label htmlFor={name} className={styles.label}>{label}</label>
            <div className={styles.wrapper}>
                <input type={type} name={name} id={id} className={styles.input} placeholder={placeholder} onChange={onChange && onChange} />
            </div>
        </div>
    )
}