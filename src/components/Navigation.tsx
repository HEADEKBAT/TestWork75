'use client';

import Link from 'next/link';
import styles from '@/styles/Navigation.module.scss';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Hot Deals', href: '/placeholder' },
  { name: 'Categories', href: '/placeholder' },
  { name: 'Laptops', href: '/placeholder' },
  { name: 'Smartphones', href: '/placeholder' },
  { name: 'Cameras', href: '/placeholder' },
  { name: 'Accessories', href: '/placeholder' },
];

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <div className="content">
        <ul className={styles.navList}>
          {navLinks.map(link => (
            <li key={link.name}>
              <Link href={link.href} className={styles.navItem}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
