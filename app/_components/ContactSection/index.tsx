import ContactForm from "../ContactForm";
import SectionTitle from "../SectionTitle";
import SectionTitleStyles from "../SectionTitle/index.module.css";
import styles from "./index.module.css";

type Props = {
  className?: string;
};


export default function ContactSection({ className }: Props) {
  return (
    <section id="contact" className={className}>
      <SectionTitle className={SectionTitleStyles.titleMb}>contact</SectionTitle>
      <div className={styles.body}>
      <ContactForm />
      </div>
    </section>
  )
}
