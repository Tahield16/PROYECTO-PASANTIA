import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import type { Option, OptionGroup, OptionsArray } from "../../types/listboxOptionType";
import styles from "./CustomListbox.module.scss";

// 🔹 Nuevo tipo que admite un solo grupo o un array
type OptionInput = OptionGroup | OptionsArray;

interface BaseProps {
  options: OptionInput;
  placeholder?: string;
  className?: "dark" | "light";
}

interface SingleProps extends BaseProps {
  isMultiple?: false;
  value: Option | null;
  onChange: (value: Option | null) => void;
}

interface MultipleProps extends BaseProps {
  isMultiple: true;
  value: Option[];
  onChange: (value: Option[]) => void;
}

type CustomSelectProps = SingleProps | MultipleProps;

export const CustomListbox = (props: CustomSelectProps) => {
  const { options, placeholder, className } = props;
  const theme = className === "dark" ? styles.darkTheme : styles.lightTheme;

  // 🔹 Normalizamos: si es un solo grupo, lo convertimos en array
  const normalizedOptions = Array.isArray(options) ? options : [options];

  if (props.isMultiple) {
    const { value, onChange } = props;
    // normalizar value para que HeadlessUI reciba siempre un array
    const valueArray = value ?? [];

    return (
      <Listbox value={valueArray} onChange={onChange} multiple>
        <div>
          <ListboxButton className={`${styles.button} ${theme}`}>
            {valueArray.length > 0
              ? valueArray.map((v) => v.label).join(", ")
              : placeholder}
          </ListboxButton>

          <ListboxOptions className={`${styles.options} ${theme}`} anchor="bottom start">
            {normalizedOptions.map(({ label, optionItems }, index) => (
              <div key={index}>
                {label && (
                  <>
                    <p className={styles.title}>{label}</p>
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
  }

  const { value, onChange } = props;

  return (
    <Listbox value={value} onChange={onChange}>
      <div>
        <ListboxButton className={`${styles.button} ${theme}`}>
          {value ? value.label : placeholder}
        </ListboxButton>

        <ListboxOptions className={`${styles.options} ${theme}`}>
          {normalizedOptions.map(({ label, optionItems }, index) => (
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
