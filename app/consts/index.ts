import type { Link } from "~/Models";

export const BASE_URL = 'http://82.202.130.103:8005/';

export const MENU_LINKS: Link[] = [
    {
        label: 'Главная',
        path: '/',
        isProtected: false
    },
    {
        label: 'Анкеты',
        path: '/dossiers',
        isProtected: true
    },
    {
        label: 'Документы',
        path: '/documents',
        isProtected: true
    },
    {
        label: 'Календарь',
        path: '/calendar',
        isProtected: true
    },
    {
        label: 'Новости',
        path: '/news',
        isProtected: false
    },
    {
        label: 'Задать вопрос',
        path: '/ask',
        isProtected: true
    },
]