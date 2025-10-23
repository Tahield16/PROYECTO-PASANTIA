import { CustomListbox } from "../CustomListbox/CustomListbox";
import { useState, type MouseEvent } from "react";
import styles from "./GamesForm.module.scss";
import type { Option, OptionsArray } from "../../types/listboxOptionType";
import type { Game } from "../../types/gameType";
interface GamesFormType {
  selectedGame?: Partial<Game>;
  setSelectedGame: (g: Game) => void;
}
export const GamesForm = ({ selectedGame, setSelectedGame }: GamesFormType) => {
  const handleChange = (field: keyof Partial<Game>, value: any) => {
    setSelectedGame({
      ...selectedGame,
      [field]: value,
    } as Game);
  };
  const [selectedDevelopers, setSelectedDevelopers] = useState<Option[]>([]);
  const [selectedGenres, setSelectedGenres] = useState<Option[]>([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState<Option[]>([]);
  const [selectedPublishers, setSelectedPublishers] = useState<Option[]>([]);
  const [selectedTags, setSelectedTags] = useState<Option[]>([]);
  // Función helper para actualizar cualquier campo de selectedGame

  const allDevelopers: OptionsArray = [
    {
      label: "Desarrolladores",
      optionItems: [
        { label: "Team Cherry", value: "Team Cherry" },
        { label: "From Software", value: "From Software" },
      ],
    },
  ];

  const allGenres: OptionsArray = [
    {
      label: "Géneros",
      optionItems: [
        { label: "Acción", value: "Acción" },
        { label: "Aventura", value: "Aventura" },
        { label: "RPG", value: "RPG" },
      ],
    },
  ];

  const allPlatforms: OptionsArray = [
    {
      label: "Plataformas",
      optionItems: [
        { label: "PC", value: "PC" },
        { label: "PlayStation 5", value: "PlayStation 5" },
        { label: "Xbox Series X", value: "Xbox Series X" },
        { label: "Nintendo Switch", value: "Nintendo Switch" },
      ],
    },
  ];

  const allPublishers: OptionsArray = [
    {
      label: "Publishers",
      optionItems: [
        { label: "Sony", value: "Sony" },
        { label: "Nintendo", value: "Nintendo" },
        { label: "Microsoft", value: "Microsoft" },
      ],
    },
  ];

  const allTags: OptionsArray = [
    {
      label: "Etiquetas",
      optionItems: [
        { label: "Indie", value: "Indie" },
        { label: "Soulslike", value: "Soulslike" },
        { label: "Pixel Art", value: "Pixel Art" },
      ],
    },
  ];

  const [imageMode, setImageMode] = useState<"file" | "url">("file");

  return (
    <form className={styles.formContainer} onSubmit={(e) => e.preventDefault()}>
      {/* Nombre */}
      <div className={styles.inputContainer}>
        <label htmlFor="name">Título:</label>
        <input
          className={styles.inputs}
          type="text"
          id="name"
          name="name"
          placeholder="Nombre del juego"
          value={selectedGame?.name ?? ""}
          onChange={(e) => handleChange("name", e.target.value)}
        />
      </div>

      {/* Descripción */}
      <div className={styles.inputContainer}>
        <label htmlFor="description">Descripción:</label>
        <textarea
          className={styles.inputs}
          id="description"
          name="description"
          rows={4}
          placeholder="Describe tu juego..."
          value={selectedGame?.description ?? ""}
          onChange={(e) => handleChange("description", e.target.value)}
        />
      </div>

      {/* Fecha lanzamiento */}
      <div className={styles.inputContainer}>
        <label htmlFor="release">Fecha de lanzamiento:</label>
        <input
          className={styles.inputs}
          type="date"
          id="release"
          name="release"
          value={
            selectedGame?.release
              ? new Date(selectedGame.release).toISOString().slice(0, 10)
              : ""
          }
          onChange={(e) => handleChange("release", e.target.value)}
        />
      </div>

      {/* Puntaje */}
      <div className={styles.inputContainer}>
        <label htmlFor="rating">Puntaje:</label>
        <input
          className={styles.inputs}
          type="number"
          id="rating"
          name="rating"
          min="0"
          max="10"
          value={selectedGame?.rating ?? ""}
          onChange={(e) => handleChange("rating", Number(e.target.value))}
        />
      </div>

      {/* Imagen */}
      <div className={styles.inputContainer}>
        <label>Imagen de fondo:</label>
        <select
          value={imageMode}
          onChange={(e) => setImageMode(e.target.value as "file" | "url")}
        >
          <option value="file">Subir archivo</option>
          <option value="url">Usar enlace</option>
        </select>

        {imageMode === "file" ? (
          <input
            className={styles.inputsImage}
            type="file"
            accept="image/*"
            onChange={(e) => {
              if (e.target.files?.[0])
                handleChange(
                  "backgroundImage",
                  URL.createObjectURL(e.target.files[0])
                );
            }}
          />
        ) : (
          <input
            className={styles.inputsImage}
            type="url"
            placeholder="https://ejemplo.com/imagen.jpg"
            value={selectedGame?.backgroundImage ?? ""}
            onChange={(e) => handleChange("backgroundImage", e.target.value)}
          />
        )}
      </div>

      {/* Desarrolladores */}
      <div className={styles.inputContainer}>
        <label htmlFor="developedBy">Desarrolladores:</label>
        <CustomListbox
          className="dark"
          value={selectedDevelopers}
          onChange={(options) => {
            setSelectedDevelopers(options);
            handleChange(
              "developedBy",
              options.map((o) => o.value)
            );
          }}
          options={allDevelopers}
          isMultiple
          placeholder="Desarrolladores"
        />
        <input
          className={styles.inputs}
          type="text"
          name="newDeveloper"
          id="newDeveloper"
          placeholder="Agregar desarrollador..."
        />
        <button
          className={styles.buttons}
          onClick={(e: MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            const input = document.getElementById(
              "newDeveloper"
            ) as HTMLInputElement | null;
            const value = input?.value.trim();
            if (!value) return;
            const newOption = { label: value, value };
            setSelectedDevelopers((prev) => [...prev, newOption]);
            handleChange("developedBy", [
              ...(selectedGame?.developedBy ?? []),
              value,
            ]);
            if (input) input.value = "";
          }}
        >
          Agregar
        </button>
      </div>

      {/* Géneros */}
      <div className={styles.inputContainer}>
        <label htmlFor="genres">Géneros:</label>
        <CustomListbox
          className="dark"
          value={selectedGenres}
          onChange={(options) => {
            setSelectedGenres(options);
            handleChange(
              "genres",
              options.map((o) => o.value)
            );
          }}
          options={allGenres}
          isMultiple
          placeholder="Géneros"
        />
      </div>

      {/* Plataformas */}
      <div className={styles.inputContainer}>
        <label htmlFor="platforms">Plataformas:</label>
        <CustomListbox
          className="dark"
          value={selectedPlatforms}
          onChange={(options) => {
            setSelectedPlatforms(options);
            handleChange(
              "platforms",
              options.map((o) => o.value)
            );
          }}
          options={allPlatforms}
          isMultiple
          placeholder="Plataformas"
        />
      </div>

      {/* Publishers */}
      <div className={styles.inputContainer}>
        <label htmlFor="publishers">Publishers:</label>
        <CustomListbox
          className="dark"
          value={selectedPublishers}
          onChange={(options) => {
            setSelectedPublishers(options);
            handleChange(
              "publishers",
              options.map((o) => o.value)
            );
          }}
          options={allPublishers}
          isMultiple
          placeholder="Publishers"
        />
      </div>

      {/* Tags */}
      <div className={styles.inputContainer}>
        <label htmlFor="tags">Tags:</label>
        <CustomListbox
          className="dark"
          value={selectedTags}
          onChange={(options) => {
            setSelectedTags(options);
            handleChange(
              "tags",
              options.map((o) => o.value)
            );
          }}
          options={allTags}
          isMultiple
          placeholder="Etiquetas"
        />
      </div>

      {/* Favorito */}
      <div className={styles.inputContainer}>
        <label htmlFor="favorite">Favorito:</label>
        <input
          className={styles.inputs}
          type="checkbox"
          id="favorite"
          checked={selectedGame?.favorite ?? false}
          onChange={(e) => handleChange("favorite", e.target.checked)}
        />
      </div>

      {/* Fuente */}
      <div className={styles.inputContainer}>
        <label htmlFor="source">Fuente:</label>
        <select
          id="source"
          value={selectedGame?.source ?? "DATABASE"}
          onChange={(e) => handleChange("source", e.target.value)}
        >
          <option value="API">API</option>
          <option value="DATABASE">DATABASE</option>
        </select>
      </div>

      {/* TBA */}
      <div className={styles.inputContainer}>
        <label htmlFor="tba">¿Aún no lanzado?</label>
        <input
          className={styles.inputs}
          type="checkbox"
          id="tba"
          checked={selectedGame?.tba ?? false}
          onChange={(e) => handleChange("tba", e.target.checked)}
        />
      </div>

      <button type="submit">Guardar juego</button>
    </form>
  );
};
