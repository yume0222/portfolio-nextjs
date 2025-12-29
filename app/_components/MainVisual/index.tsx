import styles from "./index.module.css";
import Image from "next/image";

export default function MainVisual() {
  return (
    <div className={styles.mainVisual}>
      <Image
        src="/mainvisual-sp.jpg"
        alt=""
        fill
        className={styles.sp}
        priority
      />
      <Image
        src="/mainvisual-pc.jpg"
        alt=""
        fill
        className={styles.pc}
        priority
      />
    </div>
  );
}
