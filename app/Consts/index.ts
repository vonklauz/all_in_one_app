import type { Link } from "~/Models";

export const BASE_URL = 'http://82.202.130.103:8005/';

export const MENU_LINKS: Link[] = [
    {
        label: 'Главная',
        path: '/',
        isProtected: true
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
    // {
    //     label: 'Новости',
    //     path: '/news',
    //     isProtected: false
    // },
    // {
    //     label: 'Задать вопрос',
    //     path: '/ask',
    //     isProtected: true
    // },
]

export const REDIRECT_TIMING = 3000;

export const ALLOWED_FILE_TYPES = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/tif',
    'image/tiff',
    'application/msword',
    'application/pdf',
    'application/psx',
    'application/vnd.openxmformats-officedocument.wordprocessingml.document',
    'application/zip',
    'application/x-zip',
    'application/octet-stream',
    'application/x-zip-compressed',
    'application/x-7z-compressed',
    'application/x-rar-compressed',
];