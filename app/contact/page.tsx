import styles from "./page.module.css";

export default function Page() {
  return (
    <p className={styles.text}>
      お問い合わせいただき、ありがとうございます。
      <br />
      お返事まで今しばらくお待ちください。
    </p>
  );
}