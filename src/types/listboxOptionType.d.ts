export type Option = {
  label: string | undefined;
  value: string | undefined;
};

export type OptionGroup = {
  label?: string; // nombre de la categoría
  optionItems: Option[]; // las opciones de esa categoría
};

export type OptionsArray = OptionGroup[];
