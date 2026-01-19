import styles from "./page.module.css";
import { notFound } from "next/navigation";
import { getProductsDetail } from "@/app/_libs/microcms";
import Article from "@/app/_components/Article";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: Props) {
  const data = await getProductsDetail(params.slug).catch(notFound);
  return <Article data={data} />;
}
