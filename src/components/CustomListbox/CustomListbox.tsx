import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/react";
import styles from "./CustomListbox.module.scss";
import type { Option, OptionsArray } from "../../types/listboxOptionType";

interface BaseProps {
  options: OptionsArray;
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
  value: Option[] | null;
  onChange: (value: Option[] | null) => void;
}

type CustomSelectProps = SingleProps | MultipleProps;

export const CustomListbox = (props: CustomSelectProps) => {
  const { options, placeholder, className } = props;
  const theme = className == "dark" ? styles.darkTheme : styles.lightTheme;

  if (props.isMultiple) {
    const { value, onChange } = props as MultipleProps;
    const valueArray = value ?? [];

    return (
      <Listbox value={valueArray} onChange={onChange} multiple>
        <div>
          {/* {placeholder && <p className={styles.title}>{placeholder}</p>} */}
          <ListboxButton className={`${styles.button} ${theme}`}>
            {valueArray && valueArray.length ? valueArray.map((v) => v.label).join(", ") : placeholder}
          </ListboxButton>
          <ListboxOptions className={`${styles.options} ${theme}`}>
            {options.map(({ label, optionItems }, index) => (
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
  }

  const { value, onChange } = props as SingleProps;

  return (
    <Listbox value={value} onChange={onChange}>
      <div>
        {/* {placeholder && <p className={styles.title}>{placeholder}</p>} */}
        <ListboxButton className={`${styles.button} ${theme}`}>
          {value ? value.label : placeholder}
        </ListboxButton>
        <ListboxOptions className={`${styles.options} ${theme}`}>
          {options.map(({ label, optionItems }, index) => (
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