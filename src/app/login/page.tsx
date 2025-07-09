'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';
import { getErrorMessage } from '@/lib/utils';
import { useToastStore } from '@/store/toastStore';
import { api } from '@/lib/api';
import styles from '@/styles/login.module.scss';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const login = useAuthStore(state => state.login);
  const router = useRouter();

  const showToast = useToastStore(state => state.showToast);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (username.length < 3 || password.length < 3) {
      setError('Username and password must be at least 3 characters');
      return;
    }

    try {
      setLoading(true);
      const response = await api.post('/auth/login', {
        username,
        password,
      });

      login({
        firstName: response.data.firstName,
        lastName: response.data.lastName,
        email: response.data.email,
        token: response.data.token,
      });

      router.push('/');
    } catch (err) {
      const message = getErrorMessage(err, 'Login failed');
      showToast(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className="content">
        <h2 className={styles.title}>Login</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className={styles.input}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className={styles.input}
            required
          />
          {error && <p className={styles.error}>{error}</p>}
          <button type="submit" className={styles.button} disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
}
