import Image from "next/image";
import styles from "./page.module.css";
import { Input } from "@/Components/Input/Index";
import { InputWrapper } from "@/Components/InputWrapper";

export default function Home() {
  return (
    <div className={styles.page} style={{maxWidth: '1200px'}}>
      <InputWrapper title="Персональные данные" subtitle="шаг 1">
        <Input label="ФИО" />
      </InputWrapper>
    </div>
  );
}
