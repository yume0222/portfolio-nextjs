import styles from "./page.module.css";
import MainVisual from "./_components/MainVisual";
import AboutSection from "./_components/AboutSection";
import VisionSection from "./_components/VisionSection";
import Sheet from "./_components/Sheet";
import ProductSection from "./_components/ProductSection";
import HistorySection from "./_components/HistorySection";
import SkillSection from "./_components/SkillSection";
import ContactSection from "./_components/ContactSection";

export default function Home() {
  return (
    <>
      <MainVisual />
      <Sheet>
        <AboutSection className={styles.sectionMt} />
        <SkillSection className={styles.sectionMtSm} />
        <ProductSection className={styles.sectionMtSm} />
        <HistorySection className={styles.sectionMtLg} />
        <VisionSection className={styles.sectionMtSm} />
        <ContactSection className={styles.sectionMtSm} />
      </Sheet>
    </>
  );
}
