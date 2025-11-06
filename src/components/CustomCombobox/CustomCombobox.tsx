import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import type { OptionsArray, Option } from "../../types/comboboxOptionsType";
import { useState } from "react";
import styles from "./CustomCombobox.module.scss";
import debounce from "lodash/debounce";

interface ComboboxPropsType {
  value: Option | null;
  onChange: (v: Option | null) => void;
  className: "dark" | "light";
  options: OptionsArray;
  img?: string;
  placeholder?: string;
  allowCustomValue?: boolean;
}

export const CustomCombobox = ({
  value,
  onChange,
  className,
  options,
  img,
  placeholder,
  allowCustomValue = true, // nuevo prop para controlar si se permiten valores personalizados
}: ComboboxPropsType) => {
  const theme = className == "dark" ? styles.darkTheme : styles.lightTheme;
  const [query, setQuery] = useState("");

  // Debounce para evitar muchas actualizaciones mientras se escribe
  const debouncedOnChange = debounce((text: string) => {
    if (allowCustomValue) {
      onChange({ id: text, name: text });
    }
  }, 500);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    setQuery(text);
    debouncedOnChange(text);
  };

  const filteredOptions =
    query === ""
      ? options
      : [
          // Incluir el valor actual como primera opción si no está en las opciones
          ...(allowCustomValue ? [{ id: query, name: query }] : []),
          ...options.filter((option) =>
            option.name.toLowerCase().includes(query.toLowerCase())
          ),
        ];

  return (
    <div className={styles.relative}>
      <Combobox value={value} onChange={onChange}>
        <div className={styles.inputWrapper}>
          {/* ComboboxInput */}
          <ComboboxInput
            aria-label="Asignee"
            displayValue={(item: Option | null) => (item ? item.name : "")}
            onChange={handleInputChange}
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
