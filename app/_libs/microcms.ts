import { createClient } from 'microcms-js-sdk';
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSListContent,
} from 'microcms-js-sdk';

export type Product = {
  title: string;
  link: string;
  thumbnail: MicroCMSImage;
  copysite?: string;
  summary?: string;
  background?: string;
  techstack?: string;
  features?: string;
  period?: string;
  highlights?: string;
  challenges?: string;
} & MicroCMSListContent;

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required');
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error('MICROCMS_API_KEY is required');
}

const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

export const getProductsList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Product>({
    endpoint: 'products',
    queries,
  });
  return listData;
};

export const getProductsDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<Product>({
    endpoint: 'products',
    contentId,
    queries,
    customRequestInit: {
      next: {
        revalidate: queries?.draftKey === undefined ? 60 : 0,
      },
    },
  });

  return detailData;
};