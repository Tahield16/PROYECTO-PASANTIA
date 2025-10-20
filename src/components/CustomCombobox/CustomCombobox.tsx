import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import type { OptionsArray, Option } from "../../types/comboboxOptionsType";
import { useState } from "react";
import styles from "./CustomCombobox.module.scss";

interface ComboboxPropsType {
  value: Option | null;
  onChange: (v: Option | null) => void;
  className: "dark" | "light";
  options: OptionsArray;
  img?: string;
  placeholder?: string;
}
export const CustomCombobox = ({
  value,
  onChange,
  className,
  options,
  img,
  placeholder,
}: ComboboxPropsType) => {
  const theme = className == "dark" ? styles.darkTheme : styles.lightTheme;
  const [query, setQuery] = useState("");
  const filteredOptions =
    query === ""
      ? options
      : options.filter((option) =>
          option.name.toLowerCase().includes(query.toLowerCase())
        );
  return (
    <div className={styles.relative}>
      <Combobox value={value} onChange={onChange}>
        <div className={styles.inputWrapper}>
          {/* ComboboxInput */}
          <ComboboxInput
            aria-label="Asignee"
            displayValue={(item: Option | null) => (item ? item.name : "")}
            onChange={(event) => setQuery(event.target.value)}
            className={`${theme} ${styles.input}`}
          />

          {/* Placeholder custom */}
          {!value && query === "" && (
            <span className={styles.customPlaceholder}>
              {img && <img src={img} alt="logo" className={styles.logo} />}
              {placeholder}
            </span>
          )}
        </div>

        <ComboboxOptions className={`${styles.optionsWrapper} ${theme}`}>
          {filteredOptions.map((option) => (
            <ComboboxOption
              key={option.id}
              value={option}
              className={styles.option}
            >
              {option.logo && (
                <img className={styles.logo} src={option.logo}></img>
              )}
              {option.name}
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </Combobox>
    </div>
  );
};
