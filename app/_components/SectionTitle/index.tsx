import styles from "./index.module.css";

type Props = {
  children: React.ReactNode;
  className?: React.ReactNode;
}

export default function SectionTitle({ children, className }: Props) {
  return (
    <h2 className={`${styles.title} ${className}`}>{children}</h2>
  )
}
