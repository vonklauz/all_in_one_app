import styles from './User.module.css'

export const UserComponent = () => {
    return (
        <div className={styles.action}>
            <a href="/login" className="button button_gray button_link">Войти</a>
        </div>
    )
}