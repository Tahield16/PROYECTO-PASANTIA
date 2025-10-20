import { useState } from "react";
import type {
  Option as OptionCombo,
  OptionsArray as OptionsArrayCombo,
} from "../../types/comboboxOptionsType";
import type {
  Option as OptionList,
  OptionsArray as OptionsArrayList,
} from "../../types/listboxOptionType";
import { CustomCombobox } from "../CustomCombobox/CustomCombobox";
import { CustomListbox } from "../CustomListbox/CustomListbox";
import styles from "./FiltersContainer.module.scss";
// const sourceOptions:Options[]=[{label:"Todos",:"ALL"},{label:"API",value:"API"},{label:"Usuario",value:"DATABASE"}];
// const {games}=useGamesStore();
// const parseGames=games.map((game)=>{id:game._id,name:game.name});

const OrderByOptions: OptionsArrayList = [
  {
    label: "Alfabeticamente",
    optionItems: [
      {
        label: "A-Z",
        value: "A-Z",
      },
      { label: "Z-A", value: "Z-A" },
    ],
  },
  {
    label: "Por rating",
    optionItems: [
      {
        label: "Mayor a menor",
        value: "highestToLowest",
      },
      {
        label: "Menor a mayor",
        value: "lowestToHighest",
      },
    ],
  },
];
const filterByOrigin: OptionsArrayList = [
  {
    optionItems: [
      {
        label: "API",
        value: "API",
      },
      {
        label: "Creados por ti",
        value: "USER",
      },
      {
        label: "Todos",
        value: "ALL",
      },
    ],
  },
];
const mockGames: OptionsArrayCombo = [
  {
    id: 1,
    name: "The Legend of Zelda: Breath of the Wild",
    logo: "https://placehold.co/40x40?text=Zelda",
  },
  {
    id: 2,
    name: "Elden Ring",
    logo: "https://placehold.co/40x40?text=ER",
  },
  {
    id: 3,
    name: "Hollow Knight",
    logo: "https://placehold.co/40x40?text=HK",
  },
  {
    id: 4,
    name: "Cyberpunk 2077",
    logo: "https://placehold.co/40x40?text=CP",
  },
];
const mockGenres: OptionsArrayCombo = [
  { id: "rpg", name: "RPG" },
  { id: "action", name: "Action" },
  { id: "adventure", name: "Adventure" },
  { id: "platformer", name: "Platformer" },
  { id: "indie", name: "Indie" },
];
export const FiltersContainer = () => {
  const [genre, setGenre] = useState<OptionCombo | null>(null);
  const [game, setGame] = useState<OptionCombo | null>(null);
  const [orderByValue, setOrderByValue] = useState<OptionList | null>(null);
  const [source, setSource] = useState<OptionList | null>(null);
  return (
    <section className={styles.filtersContainer}>
      {/* <CustomCombobox /> */}
      <CustomListbox
        value={orderByValue}
        onChange={setOrderByValue}
        options={OrderByOptions}
        isMultiple={false}

        className="dark"
        placeholder="Ordenar por"
      />
      <CustomCombobox
        value={game}
        onChange={setGame}
        className="light"
        options={mockGames}
        img="/assets/SearchIcon.svg"
        placeholder="Buscar juegos"
      />
      <CustomCombobox
        value={genre}
        onChange={setGenre}
        className="dark"
        options={mockGenres}
        placeholder="Filtrar por generos"
      />
      <CustomListbox
        value={source}
        onChange={setSource}
        options={filterByOrigin}
        isMultiple={false}
        className="dark"
        placeholder="Filtrar por origen"
      />
    </section>
  );
};
