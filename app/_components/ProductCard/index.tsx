import styles from "./index.module.css";
import { Product } from "@/app/_libs/microcms";
import Image from "next/image";
import Link from "next/link";

type Props = {
  product: Product[];
};

export default function ProductCard({ product }: Props) {
  return (
    <ul className={styles.list}>
      {product.map((item) => (
        <li key={item.id} className={styles.item}>
          <Link href={`/product/${item.id}`} className={styles.link}>
            <Image
              src={item.thumbnail.url}
              alt=""
              className={styles.image}
              width={item.thumbnail.width}
              height={item.thumbnail.height}
            />
            <p className={styles.title}>{item.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
