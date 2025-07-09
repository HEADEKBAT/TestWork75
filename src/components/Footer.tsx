'use client';

import styles from '@/styles/Footer.module.scss';
import { useAuthStore } from '@/store/authStore';

export default function Footer() {
  const user = useAuthStore(state => state.user);
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="content">
        {user ? <p>{user.email}</p> : ''}
        <p>&copy; {year}</p>
      </div>
    </footer>
  );
}
