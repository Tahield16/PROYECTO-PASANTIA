import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/react";
import styles from "./CustomListbox.module.scss";
import type { Option, OptionsArray } from "../../../types/listboxOptionType";
interface CustomSelectProps {
  value: Option | null;
  onChange: (value: Option | null) => void;
  options: OptionsArray;
  placeholder?: string;
  className?: "dark" | "light";
}
export const CustomListbox = ({
  value,
  onChange,
  options,
  placeholder,
  className,
}: CustomSelectProps) => {
  const theme = className == "dark" ? styles.darkTheme : styles.lightTheme;
  return (
    <Listbox value={value} onChange={onChange}>
      <div>
        {/* {placeholder && <p className={styles.title}>{placeholder}</p>} */}
        <ListboxButton className={`${styles.button} ${theme}`}>
          {value ? value.label:placeholder}
        </ListboxButton>
        <ListboxOptions className={`${styles.options} ${theme}`}>
          {options.map(({ label, optionItems },index) => (
            <div key={index}>
              {label && (
                <>
                  <p className="title">{label}</p>
                  <hr />
                </>
              )}

              {optionItems.map((item, index) => (
              
                  <ListboxOption
                    className={styles.option}
                    key={index}
                    value={item}
                  >
                    <span>{item.label}</span>
                  </ListboxOption>
                
              ))}
            </div>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
};
