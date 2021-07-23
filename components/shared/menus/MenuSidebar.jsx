import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const MenuSidebar = () => {
    const router = useRouter();
    const menuItems = [
        {
            text: 'Tableau de bord',
            url: '/',
            icon: 'icon-home',
        },
        {
            text: 'Produits',
            url: '/products',
            icon: 'icon-database',
        },
        {
            text: 'Commandes',
            url: '/orders',
            icon: 'icon-bag2',
        },
        {
            text: 'Promotions',
            url: '/promotions',
            icon: 'icon-arrow-down',
        },
        {
            text: 'Catégories',
            url: '/categories',
            icon: 'icon-users2',
        },
        {
            text: 'Newsletter',
            url: '/newsletters',
            icon: 'icon-mail',
        }
    ];

    return (
        <ul className="menu">
            {menuItems.map((item, index) => (
                <li
                    key={index}
                    className={router.pathname === item.url ? 'active' : ''}>
                    <Link href={item.url}>
                        <a>
                            <i className={item.icon}></i>
                            {item.text}
                        </a>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default MenuSidebar;
