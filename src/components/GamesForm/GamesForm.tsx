import { useEffect, useState } from "react";
import { CustomListbox } from "../CustomListbox/CustomListbox";
import type { Game } from "../../types/gameType";
import type { Option, OptionGroup } from "../../types/listboxOptionType";
import styles from "./GamesForm.module.scss";

type GamesFormProps = {
  selectedGame: Partial<Game> | undefined;
  setSelectedGame: (game: Partial<Game>) => void;
  allGenres?: OptionGroup[];
  allPlatforms?: OptionGroup[];
  allDevelopers?: OptionGroup[];
  allPublishers?: OptionGroup[];
  allStores?: OptionGroup[];
  allTags?: OptionGroup[];
};
const mockGenres: OptionGroup[] = [
  {
    label: "Géneros",
    optionItems: [
      { label: "Acción", value: "accion" },
      { label: "Aventura", value: "aventura" },
      { label: "Estrategia", value: "estrategia" },
    ],
  },
];

const mockPlatforms: OptionGroup[] = [
  {
    label: "Plataformas",
    optionItems: [
      { label: "PC", value: "pc" },
      { label: "PlayStation", value: "playstation" },
      { label: "Xbox", value: "xbox" },
    ],
  },
];

const mockDevelopers: OptionGroup[] = [
  {
    label: "Desarrolladores",
    optionItems: [
      { label: "Valve", value: "valve" },
      { label: "Rockstar", value: "rockstar" },
    ],
  },
];

const mockPublishers: OptionGroup[] = [
  {
    label: "Publicadores",
    optionItems: [
      { label: "EA", value: "ea" },
      { label: "Ubisoft", value: "ubisoft" },
    ],
  },
];

const mockStores: OptionGroup[] = [
  {
    label: "Tiendas",
    optionItems: [
      { label: "Steam", value: "steam" },
      { label: "Epic Games", value: "epic" },
    ],
  },
];

const mockTags: OptionGroup[] = [
  {
    label: "Tags",
    optionItems: [
      { label: "Multiplayer", value: "multiplayer" },
      { label: "Indie", value: "indie" },
    ],
  },
];
const mockSource: OptionGroup[] = [
  {
    label: "Origen",
    optionItems: [
      { label: "API", value: "API" },
      { label: "DATABASE", value: "DATABASE" },
    ],
  },
];
export const GamesForm = ({
  selectedGame,
  setSelectedGame,
  allGenres = mockGenres,
  allPlatforms = mockPlatforms,
  allDevelopers = mockDevelopers,
  allPublishers = mockPublishers,
  allStores = mockStores,
  allTags = mockTags,
}: GamesFormProps) => {
  const [formData, setFormData] = useState<Partial<Game>>(selectedGame || {});

  useEffect(() => {
    setFormData(selectedGame || {});
  }, [selectedGame]);

  const handleChange = (field: keyof Game, value: any) => {
    // Si el valor es un array (por ejemplo, plataformas, géneros, tags, etc.)
    const cleanedValue = Array.isArray(value)
      ? value.filter((v) => v && (v.slug || v.name || v.label))
      : value;

    const updated = { ...formData, [field]: cleanedValue };
    setFormData(updated);
    setSelectedGame(updated);
  };

  const normalizeOptionsToSlugs = (options: Option[]) =>
    options?.map((opt) => ({
      id: Number(opt.value),
      name: opt.label,
      slug: opt.label,
    }));
  // // 🔹 Props del formulario
  // interface GamesFormProps {
  //   selectedGame?: Partial<Game>;
  //   setSelectedGame: React.Dispatch<
  //     React.SetStateAction<Partial<Game> | undefined>
  //   >;
  // }

  return (
    <form className={styles.formContainer}>
      <h2 className={styles.formTitle}>Formulario de Juegos</h2>

      {/* Nombre */}
      <div className={styles.inputsContainer}>
        <label>
          Nombre:
          <input
            className={styles.inputs}
            type="text"
            value={formData.name || ""}
            onChange={(e) => handleChange("name", e.target.value)}
          />
        </label>
      </div>
      {/* Descripción */}
      <div className={styles.inputsContainer}>
        <label>
          Descripción:
          <textarea
            className={styles.textarea}
            value={formData.description || ""}
            onChange={(e) => handleChange("description", e.target.value)}
          />
        </label>
      </div>
      {/* Imagen */}
      <div className={styles.inputsContainer}>
        <label>
          Imagen (URL):
          <input
            className={styles.inputs}
            type="text"
            value={formData.background_image || ""}
            onChange={(e) => handleChange("background_image", e.target.value)}
          />
        </label>
      </div>
      {/* Fecha de lanzamiento */}
      <label>
        Fecha de lanzamiento:
        <input
          className={styles.inputs}
          type="date"
          value={formData.released || ""}
          onChange={(e) => handleChange("released", e.target.value)}
        />
      </label>

      {/* Rating */}
      <label>
        Rating:
        <input
          className={styles.inputs}
          type="number"
          min={0}
          max={10}
          step={0.1}
          value={formData.rating || ""}
          onChange={(e) => handleChange("rating", parseFloat(e.target.value))}
        />
      </label>

      {/* TBA */}
      <label>
        ¿Por anunciar? (TBA):
        <input
          className={styles.inputs}
          type="checkbox"
          checked={!!formData.tba}
          onChange={(e) => handleChange("tba", e.target.checked)}
        />
      </label>

      {/* Fuente */}
      <label>
        Fuente:
        <CustomListbox
          placeholder="Origen"
          options={mockSource}
          isMultiple={false}
          value={
            formData.source != null
              ? {
                  label: formData.source.toString(),
                  value: formData.source.toString(),
                }
              : null
          }
          onChange={(e) => handleChange("source", e?.label)}
        />
      </label>

      {/* Favorito */}
      <label>
        Favorito:
        <input
          type="checkbox"
          checked={!!formData.favorite}
          onChange={(e) => handleChange("favorite", e.target.checked)}
        />
      </label>

      {/* GÉNEROS */}
      <CustomListbox
        placeholder="Géneros"
        isMultiple={true}
        value={
          formData.genres?.map((g) => ({
            label: g.name,
            value: g.slug,
          })) || []
        }
        options={allGenres}
        onChange={(val) => handleChange("genres", normalizeOptionsToSlugs(val))}
      />

      {/* PLATAFORMAS */}
      <CustomListbox
        placeholder="Plataformas"
        isMultiple={true}
        value={
          formData.platforms?.map((p) => ({
            label: p.platform.name,
            value: p.platform.slug,
          })) || []
        }
        options={allPlatforms}
        onChange={(val) =>
          handleChange("platforms", normalizeOptionsToSlugs(val))
        }
      />

      {/* DESARROLLADORES */}
      <CustomListbox
        placeholder="Desarrolladores"
        isMultiple={true}
        value={
          formData.developers?.map((d) => ({
            label: d.name,
            value: d.slug,
          })) || []
        }
        options={allDevelopers}
        onChange={(val) =>
          handleChange("developers", normalizeOptionsToSlugs(val))
        }
      />

      {/* PUBLISHERS */}
      <CustomListbox
        placeholder="Publishers"
        isMultiple={true}
        value={
          formData.publishers?.map((p) => ({
            label: p.name,
            value: p.slug,
          })) || []
        }
        options={allPublishers}
        onChange={(val) =>
          handleChange("publishers", normalizeOptionsToSlugs(val))
        }
      />

      {/* STORES */}
      <CustomListbox
        placeholder="Plataformas"
        isMultiple={true}
        value={
          formData.stores?.map((s) => ({
            label: s.store.name,
            value: s.store.slug,
          })) || []
        }
        options={allStores}
        onChange={(val) => handleChange("stores", normalizeOptionsToSlugs(val))}
      />

      {/* TAGS */}
      <CustomListbox
        placeholder="Plataformas"
        isMultiple={true}
        value={
          formData.tags?.map((t) => ({
            label: t.name,
            value: t.slug,
          })) || []
        }
        options={allTags}
        onChange={(val) => handleChange("tags", normalizeOptionsToSlugs(val))}
      />

      {/* REQUISITOS */}
      <fieldset className={styles.requirementsSection}>
        <legend>Requisitos</legend>
        <label>
          Mínimos:
          <textarea
            className={styles.textarea}
            value={formData.requirements?.minimum || ""}
            onChange={(e) =>
              handleChange("requirements", {
                ...formData.requirements,
                minimum: e.target.value,
              })
            }
          />
        </label>
        <label>
          Recomendados:
          <textarea
            className={styles.textarea}
            value={formData.requirements?.recommended || ""}
            onChange={(e) =>
              handleChange("requirements", {
                ...formData.requirements,
                recommended: e.target.value,
              })
            }
          />
        </label>
      </fieldset>
    </form>
  );
};
