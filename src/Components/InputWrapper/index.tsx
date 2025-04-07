import { IFormWrapperProps } from "@/Models"
import styles from './styles.module.scss';

export const InputWrapper = ({ title, subtitle, children }: IFormWrapperProps) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <h2>{title}</h2>
                <small>{subtitle}</small>
            </div>
            <div className={styles.body}>
                {children}
            </div>
        </div>
    )
}