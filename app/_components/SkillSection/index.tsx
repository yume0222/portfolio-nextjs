import styles from "./index.module.css";
import SectionTitle from "../SectionTitle";
import SectionTitleStyles from "../SectionTitle/index.module.css";

type Props = {
  className?: string;
};

export default function SkillSection({ className }: Props) {
  const data = {
    contents: [
      {
        label: "使用ツール",
        skill: 
        "AdobeXD, Figma, GitHub, AWSCloud9, microCMS, HubSpot, Vercel"
      
      },
      {
        label: "プログラミング",
        skill: 
          "HTML, CSS, JavaScript, PHP, Laravel, React.js, Next.js"
        
      },
    ],
  };
  return (
    <section id="skill" className={className}>
      <SectionTitle className={SectionTitleStyles.titleMb}>skill</SectionTitle>
      <dl className={styles.list}>
        {data.contents.map((item) => (
          <div key={item.label} className={styles.item}>
            <dt className={styles.label}>{item.label}</dt>
            <dd className={styles.skill}>{item.skill}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
