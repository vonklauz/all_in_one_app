import { SearchBar } from './SearchBar';
import styles from './Header.module.css';
import { UserComponent } from '~/Widgets/UserComponent';
import type { Link } from '~/Models';
import { useScreenSize } from '~/Hooks/useScreenSize';
import { useEffect, useState } from 'react';

interface IHeaderProps {
    links: Link[]
}

export const HeaderComponent = (props: IHeaderProps) => {
    const { width } = useScreenSize();
    const [isDesktop, setDesktop] = useState(false);
    const [isDevice, setDevice] = useState(false);
    const [isOpenDeviceMenu, setOpenDeviceMenu] = useState(false);

    useEffect(() => {
        if (width > 991) {
            setDesktop(true);
            setDevice(false);
        } else if (width <= 991) {
            setDesktop(false);
            setDevice(true);
        }
    }, [width]);

    return (
        <header className={`${styles.header} ${isOpenDeviceMenu ? styles.menuOpen : ''}`}>
            <div className={styles.headerContainer}>
                <button
                    type="button"
                    className={`${styles.menuIcon} ${styles.iconMenu}`}
                    onClick={() => setOpenDeviceMenu(!isOpenDeviceMenu)}>
                    <span></span>
                </button>
                <a href="/" className={styles.headerLogo}><img src="/logo.svg" alt="Logo" /></a>
                <div className={styles.menuBlock}>
                    <div className={styles.headerMenu}>
                        <nav className={styles.menuBody}>
                            <ul className={styles.menuList}>
                                {props.links.map((item) => (
                                    <li className={styles.menuItem} key={item.path}>
                                        <a href={item.path} className={styles.menuLink}>{item.label}</a>
                                    </li>
                                ))}
                                {isDevice && (
                                    <li className={styles.menuItem} key="searchBar"><SearchBar /></li>
                                )}
                            </ul>
                        </nav>
                    </div>
                    {isDesktop && <SearchBar />}
                    <UserComponent />
                </div>
            </div>
        </header>
    )
}