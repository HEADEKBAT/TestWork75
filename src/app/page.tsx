'use client';

import { useEffect, useState } from 'react';
import { api } from '@/lib/api';
import { getErrorMessage } from '@/lib/utils';
import { useToastStore } from '@/store/toastStore';
import { useAuthStore } from '@/store/authStore';

import ProductCard from '@/components/ProductCard';
import Loading from '@/components/Loading';
import styles from '@/styles/products.module.scss';

interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  images: string[];
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const user = useAuthStore(state => state.user);

  const showToast = useToastStore(state => state.showToast);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await api.get('/products?limit=12');
        setProducts(res.data.products);
      } catch (err) {
        const message = getErrorMessage(err, 'Failed to load products');
        setError(message);
        showToast(message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className={styles.products}>
      <div className="content">
        <h2 className={styles.title}>Latest Products</h2>

        {loading && <Loading />}
        {error && <p className={styles.error}>{error}</p>}

        {!loading && !error && (
          <div className={styles.grid}>
            {products.map(product => (
              <ProductCard
                key={product.id}
                title={product.title}
                category={product.category}
                price={product.price}
                image={product.images[0]}
                showButton={!!user}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
