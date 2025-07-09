'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';
import userIcon from '../../public/user.svg';
import Logout from '../../public/log-out.svg';
import styles from '@/styles/Header.module.scss';

export default function AuthBlock() {
  const user = useAuthStore(state => state.user);
  const logout = useAuthStore(state => state.logout);
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  if (!user) {
    return (
      <Link href="/login" className={styles.element}>
        <Image src={userIcon} alt="login" />
        <span>Login</span>
      </Link>
    );
  }

  return (
    <div className={styles.authBlock}>
      <div>
        {user.firstName} {user.lastName}
      </div>
      <span onClick={handleLogout} className={styles.element}>
        <Image src={Logout} alt="login" />
        Logout
      </span>
    </div>
  );
}
