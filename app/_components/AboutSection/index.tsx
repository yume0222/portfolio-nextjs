import SectionTitle from "../SectionTitle";
import SectionTitleStyles from "../SectionTitle/index.module.css";
import styles from "./index.module.css";

type Props = {
  className?: string;
};

export default function AboutSection({ className }: Props) {
  return (
    <section id="about" className={className}>
      <SectionTitle className={SectionTitleStyles.titleMb}>about</SectionTitle>
      <p className={styles.name}>野依 由芽 / Noyori Yume</p>
      <p className={styles.text}>
        サイバー大学IT総合学部IT総合学科2年生。
        <br />
        プログラミングはすべて独学で学んでいます。
        <br />
        未経験からWebデザイナーのアルバイトとして2年間、デザイン制作からコーディングまでを一貫して担当していました。
        <br />
        Webデザイナーのアルバイト先は、少人数で自律的に業務を進める事が歓迎されていたため、全て自分で調べ解決するよう常に努力しました。
        <br />
        その結果、社員の方にも何度も挑戦して自分で解決することできるという点を高く評価いただきました。
        <br />
        能動的に行動できる強みを活かし、知識やスキルを磨き続け、業務を遂行していく所存です。
      </p>
    </section>
  );
}
