import Image from 'next/image';
import styles from '@/styles/ProductCard.module.scss';

interface ProductCardProps {
  title: string;
  category: string;
  price: number;
  image: string;
  showButton?: boolean;
}

export default function ProductCard({
  title,
  category,
  price,
  image,
  showButton = true,
}: ProductCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image src={image} alt={title} width={200} height={200} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.category}>{category}</p>
      <p className={styles.price}>${price}</p>
      {showButton && <button className={styles.button}>Add to cart</button>}
    </div>
  );
}
