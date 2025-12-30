import type { Metadata } from "next";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { Raleway, Noto_Sans_JP } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-nextjs-eta-ashy.vercel.app"),
  title: {
    template: "%s | ポートフォリオサイト",
    default: "ポートフォリオサイト",
  },
  description: "野依由芽のポートフォリオサイトです。",
  openGraph: {
    title: "ポートフォリオサイト",
    description: "野依由芽のポートフォリオサイトです。",
    images: ["/ogp.png"],
  },
  alternates: {
    canonical: "https://portfolio-nextjs-eta-ashy.vercel.app",
  },
};

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "600"],
  variable: "--title-font",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "600"],
  variable: "--text-font",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${raleway.variable} ${notoSansJP.variable}`}>
      <body>
        <div className="content">
          <Header />
          <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
