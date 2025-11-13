import { useGamesStore } from "../../store/gamesStoreApi";
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

const OrderByOptions: OptionsArrayList = [
  {
    label: "Alfabeticamente",
    optionItems: [
      { label: "A-Z", value: "name" },
      { label: "Z-A", value: "-name" },
    ],
  },
  {
    label: "Por rating",
    optionItems: [
      { label: "Mayor a menor", value: "-rating" },
      { label: "Menor a mayor", value: "rating" },
    ],
  },
];
export const mockTags: OptionsArrayCombo = [
  { id: "2", name: "Multiplayer" },
  { id: "3", name: "History-based" },
  { id: "4", name: "Horror" },
  { id: "5", name: "Pixel Art" },
  { id: "6", name: "Singleplayer" },
  { id: "7", name: "Multiplayer" },
];
const filterByOrigin: OptionsArrayList = [
  {
    optionItems: [
      { label: "API", value: "API" },
      { label: "Creados por ti", value: "DATABASE" },
      { label: "Todos", value: "ALL" },
    ],
  },
];

const mockGames: OptionsArrayCombo = [
  {
    id: 1,
    name: "The Legend of Zelda: Breath of the Wild",
    logo: "https://placehold.co/40x40?text=Zelda",
  },
  { id: 2, name: "Elden Ring", logo: "https://placehold.co/40x40?text=ER" },
  { id: 3, name: "Hollow Knight", logo: "https://placehold.co/40x40?text=HK" },
  { id: 4, name: "Cyberpunk 2077", logo: "https://placehold.co/40x40?text=CP" },
];

const mockGenres: OptionsArrayCombo = [
  { id: "rpg", name: "RPG" },
  { id: "action", name: "Action" },
  { id: "adventure", name: "Adventure" },
  { id: "platformer", name: "Platformer" },
  { id: "indie", name: "Indie" },
];

export const FiltersContainer = () => {
  const { filters, set, clearFilters, clearGames } = useGamesStore();

  return (
    <section className={styles.filtersContainer}>
      <button
        onClick={() => {
          clearGames();
          clearFilters();
        }}
      >
        Resetear Filtros
      </button>
      <CustomListbox
        value={(() => {
          if (!filters.ordering) return null;
          const found = OrderByOptions.flatMap(
            (group) => group.optionItems
          ).find((item) => item.value === filters.ordering);
          return found ? { label: found.label, value: found.value } : null;
        })()}
        onChange={(option: OptionList | null) => {
          clearGames();
          set({ filters: { ...filters, ordering: option?.value || "" } });
        }}
        options={OrderByOptions}
        isMultiple={false}
        className="dark"
        placeholder="Ordenar por"
      />

      <CustomCombobox
        value={filters.search ? { id: 0, name: filters.search } : null}
        onChange={(option: OptionCombo | null) => {
          clearGames();
          set({ filters: { ...filters, search: option?.name || "" } });
        }}
        className="light"
        options={mockGames}
        img="/assets/SearchIcon.svg"
        placeholder="Buscar juegos"
      />

      <CustomCombobox
        value={
          filters.genres && filters.genres.length > 0
            ? { id: filters.genres[0], name: String(filters.genres[0]) }
            : null
        }
        onChange={(option: OptionCombo | null) => {
          clearGames();
          set({
            filters: {
              ...filters,
              genres: option ? [option.id.toString()] : [],
            },
          });
        }}
        className="dark"
        options={mockGenres}
        placeholder="Filtrar por generos"
      />
      <CustomCombobox
        value={
          filters.tags && filters.tags.length > 0
            ? mockTags.find(
                (tag) => String(tag.id) === String(filters.tags?.[0])
              ) || null
            : null
        }
        onChange={(option: OptionCombo | null) => {
          clearGames()
          set({
            filters: { ...filters, tags: option ? [String(option.id)] : [] },
          });
        }}
        className="light"
        options={mockTags}
        placeholder="Filtrar por tags"
      />
      <CustomListbox
        value={
          filters.source
            ? { label: filters.source, value: filters.source }
            : null
        }
        onChange={(option: OptionList | null) =>
          set({
            filters: {
              ...filters,
              source: option?.value as "API" | "DATABASE" | "ALL",
            },
          })
        }
        options={filterByOrigin}
        isMultiple={false}
        className="dark"
        placeholder="Filtrar por origen"
      />
      <div className={styles.releaseWrapper}>
        <input
          type="date"
          value={filters.dates?.releaseFrom || ""}
          onChange={(e) =>{
            // Verificar que esten las dos dates en los filtros de fechas antes de limpiar los juegos.
            clearGames();
            
            set({ filters: { ...filters, dates:{...filters.dates,releaseFrom: e.target.value } }})
          }}
          className={styles.dateInput}
          placeholder="Desde"
        />

        <input
          type="date"
          value={filters.dates?.releaseTo || ""}
          onChange={(e) =>{
            clearGames();
            set({ filters: { ...filters, dates:{...filters.dates,releaseTo: e.target.value } }})
          }}
          className={styles.dateInput}
          placeholder="Hasta"
        />
      </div>
    </section>
  );
};
