import styles from "./index.module.css";
import SectionTitle from "../SectionTitle";
import SectionTitleStyles from "../SectionTitle/index.module.css";
import { getProductsList } from '@/app/_libs/microcms';
import ProductCard from "../ProductCard";
import { PRODUCT_LIST_LIMIT } from "@/app/_constants";

type Props = {
  className?: string;
};

export const revalidate = 60;

export default async function ProductSection({ className }: Props) {
  const products = await getProductsList({ limit: PRODUCT_LIST_LIMIT });
  return (
    <section id="products" className={className}>
      <SectionTitle className={SectionTitleStyles.titleMb}>Product</SectionTitle>
      <ProductCard product={products.contents} />
    </section>
  );
}
