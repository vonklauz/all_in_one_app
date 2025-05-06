import { SearchBar } from './SearchBar';
import styles from './Header.module.css';
import { UserComponent } from '~/Widgets/UserComponent';

export const DesktopHeader = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <button type="button" className={`${styles.menuIcon} ${styles.iconMenu}`}><span></span></button>
                <a href="/" className={styles.headerLogo}><img src="/logo.svg" alt="Logo" /></a>
                <div className={styles.menuBlock}>
                    <div className={styles.headerMenu}>
                        <nav className={styles.menuBody}>
                            <ul className={styles.menuList}>
                                <li className={styles.menuItem}><a href="#" className={styles.menuLink}>Главная</a></li>
                                <li className={styles.menuItem}><a href="#" className={styles.menuLink}>Анкеты</a></li>
                                <li className={styles.menuItem}><a href="#" className={styles.menuLink}>Документы</a></li>
                                <li className={styles.menuItem}><a href="#" className={styles.menuLink}>Календарь</a></li>
                                <li className={styles.menuItem}><a href="#" className={styles.menuLink}>Новости</a></li>
                                <li className={styles.menuItem}><a href="#" className={styles.menuLink}>Задать вопрос</a></li>
                            </ul>
                        </nav>
                    </div>
                    <SearchBar />
                    <UserComponent />
                </div>
            </div>
        </header>
    )
}