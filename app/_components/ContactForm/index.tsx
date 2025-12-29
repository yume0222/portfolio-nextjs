"use client";

import { createContactData } from "@/app/_actions/contact";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./index.module.css";
import InputText from "../InputText";
import Textarea from "../Textarea";

const initialState = {
  status: "",
  message: "",
};

export default function ContactForm() {
  const [state, formAction] = useFormState(createContactData, initialState);
  const router = useRouter();
  useEffect(() => {
    if (state.status === "success") {
      router.push("/contact");
    }
  }, [state.status, router]);
  return (
    <form className={styles.form} action={formAction}>
      <div className={styles.item}>
        <label className={styles.label} htmlFor="lastname">
        NAME
        </label>
        <InputText
          className={styles.textfield}
          type="text"
          id="lastname"
          name="lastname"
        />
      </div>
      <div className={styles.item}>
        <label className={styles.label} htmlFor="email">
        E-mail
        </label>
        <InputText
          className={styles.textfield}
          type="text"
          id="email"
          name="email"
        />
      </div>
      <div className={styles.item}>
        <label className={styles.label} htmlFor="message">
        MESSAGE
        </label>
        <Textarea
          className={styles.textarea}
          id="message"
          name="message"
        />
      </div>
      <div className={styles.actions}>
        {state.status === "error" && (
          <p className={styles.error}>{state.message}</p>
        )}
        <input type="submit" value="送信する" className={styles.button} />
      </div>
    </form>
  );
}