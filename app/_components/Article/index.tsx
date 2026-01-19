import styles from "./index.module.css";
import Image from "next/image";
import type { Product } from "@/app/_libs/microcms";
import Link from "next/link";

type Props = {
  data: Product;
};

export default function Article({ data }: Props) {
  return (
    <article>
      <h3 className={styles.title}>{data.title}</h3>
      <Image
        src={data.thumbnail.url}
        alt=""
        className={styles.thumbnail}
        width={data.thumbnail.width}
        height={data.thumbnail.height}
      />
      {data.link && (
        <>
          <h4 className={styles.subTitle}>URL</h4>
          <Link href={data.link} className={styles.link}>
            {data.link}
          </Link>
        </>
      )}
      {data.copysite && (
        <>
          <h4 className={styles.subTitle}>模写サイト</h4>
          <Link href={data.copysite} className={styles.link}>
            {data.copysite}
          </Link>
        </>
      )}
      {data.background && (
        <>
          <h4 className={styles.subTitle}>制作背景</h4>
          <div
            className={styles.text}
            dangerouslySetInnerHTML={{
              __html: data.background,
            }}
          />
        </>
      )}
      {data.techstack && (
        <>
          <h4 className={styles.subTitle}>使用技術</h4>
          <div
            className={styles.text}
            dangerouslySetInnerHTML={{
              __html: data.techstack,
            }}
          />
        </>
      )}
      {data.features && (
        <>
          <h4 className={styles.subTitle}>機能</h4>
          <div
            className={styles.text}
            dangerouslySetInnerHTML={{
              __html: data.features,
            }}
          />
        </>
      )}
      {data.period && (
        <>
          <h4 className={styles.subTitle}>制作期間</h4>
          <p className={styles.text}>{data.period}</p>
        </>
      )}
      {data.highlights && (
        <>
          <h4 className={styles.subTitle}>工夫した点</h4>
          <div
            className={styles.text}
            dangerouslySetInnerHTML={{
              __html: data.highlights,
            }}
          />
        </>
      )}
      {data.challenges && (
        <>
          <h4 className={styles.subTitle}>苦労した点</h4>
          <div
            className={styles.text}
            dangerouslySetInnerHTML={{
              __html: data.challenges,
            }}
          />
        </>
      )}
    </article>
  );
}
