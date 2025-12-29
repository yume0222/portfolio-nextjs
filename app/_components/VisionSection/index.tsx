import SectionTitle from "../SectionTitle";
import SectionTitleStyles from "../SectionTitle/index.module.css";

type Props = {
  className?: string;
};

export default function VisionSection({ className }: Props) {
  return (
    <section id="vision" className={className}>
      <SectionTitle className={SectionTitleStyles.titleMb}>vision</SectionTitle>
      <p>
        プログラミングに興味を持ったきっかけは、YouTubeでプログラミングの魅力に触れたことです。
        <br />
        何度も挫折しそうになりましたが、諦めずに取り組み続けるうちに、コードを少しずつ積み上げ完成に近づいていく過程にワクワクするようになりました。
        <br />
        また、わからないことがあれば調べ、新しい技術を習得できたときの達成感は大きく、それがさらに学ぶ意欲へとつながっています。
        <br />
        この楽しさを原動力に、日々スキルを磨き続け、価値のある人材へと成長していきたいと考えています。
        <br />
        知識や経験はまだ十分ではありませんが、コーディングは時間を忘れるほど夢中になれるほど楽しく、もっとスキルを高めたいと強く思っています。
        <br />
        インターンを通じて積極的に行動し、さまざまな経験を積みながら成長していきたいです。
      </p>
    </section>
  );
}
