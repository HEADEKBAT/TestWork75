'use client';

import { useToastStore } from '@/store/toastStore';
import styles from '@/styles/Toast.module.scss';

export default function Toast() {
  const message = useToastStore(state => state.message);

  if (!message) return null;

  return (
    <div className={styles.toast}>
      <p>{message}</p>
    </div>
  );
}
