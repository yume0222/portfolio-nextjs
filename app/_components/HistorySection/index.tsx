import styles from "./index.module.css";
import SectionTitle from "../SectionTitle";
import SectionTitleStyles from "../SectionTitle/index.module.css";

type Props = {
  className?: string;
};

export default function HistorySection({ className }: Props) {
  const data = {
    contents: [
      { date: "2023.2", title: "ITパスポート試験 合格" },
      { date: "2023.3-2025.1", title: "Webデザイナーのアルバイトを始める" },
      { date: "2023.4", title: "サイバー大学IT総合学部IT総合学科 入学" },
      {
        date: "2024.1-5",
        title: "長期インターンシップにてPythonを学習",
      },
      {
        date: "2024.6-8",
        title: "プログラミングスクールにて3ヶ月間バックエンドの基礎を学習",
      },
      {
        date: "2024.10-11",
        title: "エンジニアの長期インターンシップに参加",
      },
      {
        date: "2025.9-11",
        title: "Webコーダーの長期インターンシップに参加",
      },
      { date: "2028.3", title: "サイバー大学IT総合学部IT総合学科 卒業見込" },
    ],
  };

  return (
    <section id="history" className={className}>
      <SectionTitle className={SectionTitleStyles.titleMb}>
        history
      </SectionTitle>
      <dl className={styles.list}>
        {data.contents.map((item) => (
          <div key={item.date} className={styles.item}>
            <dt className={styles.date}>{item.date}</dt>
            <dd className={styles.title}>{item.title}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
