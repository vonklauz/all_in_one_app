import { useGetUserQuery } from '~/Service/baseApi';
import styles from './User.module.css'
import { useEffect, useState } from 'react';
import type { User } from '~/Models';
import { UserThumb } from './UserThumb';

export const UserComponent = () => {
    const [user, setUser] = useState<User>();
    const { data, isLoading, error } = useGetUserQuery('');

    useEffect(() => {
        if (data) {
            setUser(data)
        }
    }, [data])

    if (user) {
        return (
            <UserThumb
                {...user}
                onLogout={() => { }}
            />
        )
    }

    return (
        <div className={styles.action}>
            {isLoading && (
                <div className={styles.loader}>
                    <svg className="mr-3 size-5 animate-spin" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                </div>
            )}
            <a href="/login" className={`${styles.button} button button_gray button_link`}>
                Войти
            </a>
        </div>
    )
}