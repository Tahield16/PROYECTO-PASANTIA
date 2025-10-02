import { create } from "zustand";
import type { Game, Games } from "../types/gameType";


export const realMockGames: Game[] = [
  {
    _id: 101,
    name: "Blasphemous",
    description:
      'En un mundo oscuro y opresivo inspirado en la imaginería religiosa del sur de España, Blasphemous te pone en la piel del Penitente, el único superviviente de la masacre del "Dolor Silente". A través de un metroidvania desafiante, deberás enfrentarte a grotescas criaturas y jefes colosales mientras exploras escenarios cargados de simbolismo religioso, sangre y penitencia. Su atmósfera única y pixel art detallado lo han convertido en un clásico moderno.',
    release: "2019-09-10",
    tba:false,
    rating: 8.3,
    backgroundImage:
      "https://upload.wikimedia.org/wikipedia/en/c/cf/Blasphemous_logo.png",
    source: "API",
    favorite: false,
    genres: [
      { id: 1, name: "Action", slug: "action" },
      { id: 2, name: "Metroidvania", slug: "metroidvania" },
      { id: 3, name: "Platformer", slug: "platformer" },
    ],
    developedBy: ["The Game Kitchen"],
    platforms: [],
  },
  {
    _id: 102,
    name: "Hades",
    description:
      "Un roguelike isométrico donde encarnas a Zagreus, hijo de Hades, en su intento de escapar del Inframundo. Cada escape combina combate rápido, bendiciones de los dioses del Olimpo y narrativa dinámica que se adapta a tus muertes y progresos. Con diálogos ricos, un arte vibrante y una banda sonora impactante, Hades redefine el género roguelike y logra que cada intento sea parte de la historia.",
    release: "2020-09-17",
    tba:false,
    rating: 9.0,
    backgroundImage:
      "https://upload.wikimedia.org/wikipedia/en/c/cc/Hades_cover_art.jpg",
    source: "API",
    favorite: true,
    genres: [
      { id: 4, name: "Action", slug: "action" },
      { id: 5, name: "Roguelike", slug: "roguelike" },
      { id: 6, name: "Indie", slug: "indie" },
    ],
    developedBy: ["Supergiant Games"],
    platforms: [],
  },
  {
    _id: 103,
    name: "FIFA 23",
    description:
      "La última entrega de la icónica saga de fútbol de EA Sports bajo el nombre FIFA. Presenta mejoras gráficas con HyperMotion2, físicas más realistas y la inclusión de equipos femeninos de clubes europeos. Con modos como Ultimate Team, Carrera y Volta Football, ofrece una experiencia competitiva y social tanto online como offline. Es la culminación de décadas de desarrollo de simuladores de fútbol.",
    release: "2022-09-30",
    tba:false,
    rating: 7.5,
    backgroundImage:
      "https://seeklogo.com/images/F/FIFA-logo-2022-B410E72F34-seeklogo.com.png",
    source: "API",
    favorite: false,
    genres: [
      { id: 7, name: "Sports", slug: "sports" },
      { id: 8, name: "Simulation", slug: "simulation" },
    ],
    developedBy: ["EA Sports"],
    platforms: [],
  },
  {
    _id: 104,
    name: "Outer Wilds",
    description:
      "Una aventura de exploración en un sistema solar atrapado en un bucle temporal de 22 minutos. Como miembro de una joven civilización espacial, tu misión es descubrir los secretos de civilizaciones perdidas, viajar entre planetas únicos y desentrañar el misterio del sol que se expande hacia una supernova. Outer Wilds mezcla ciencia, curiosidad y narrativa ambiental para ofrecer una experiencia filosófica e inolvidable.",
    release: "2019-05-28",
    tba:false,
    rating: 8.7,
    backgroundImage:
      "https://upload.wikimedia.org/wikipedia/en/d/d9/Outer_Wilds_logo.png",
    source: "API",
    favorite: true,
    genres: [
      { id: 9, name: "Adventure", slug: "adventure" },
      { id: 10, name: "Exploration", slug: "exploration" },
      { id: 11, name: "Puzzle", slug: "puzzle" },
    ],
    developedBy: ["Mobius Digital", "Annapurna Interactive"],
    platforms: [],
  },
  {
    _id: 105,
    name: "Celeste",
    description:
      "Un juego de plataformas desafiante donde controlas a Madeline en su escalada a la montaña Celeste. Cada nivel representa no solo un reto técnico, sino también una metáfora de la lucha interna contra la ansiedad y la depresión. Con controles precisos, música emocional y narrativa sensible, Celeste es considerado uno de los juegos más importantes de la última década.",
    release: "2018-01-25",
    rating: 9.0,
    tba:false,
    backgroundImage:
      "https://upload.wikimedia.org/wikipedia/en/e/e7/Celeste_cover.jpg",
    source: "API",
    favorite: false,
    genres: [
      { id: 12, name: "Platformer", slug: "platformer" },
      { id: 13, name: "Indie", slug: "indie" },
    ],
    developedBy: ["Matt Makes Games"],
    platforms: [],
  },
];

interface GamesState {
  games: Games;
  addGame: (game: Game) => void;
  deleteGame: (gameId: number) => void;
  setGames: (games: Games) => void;
}

export const useGamesStore = create<GamesState>((set) => ({
  games: realMockGames,
  addGame: (game: Game) => set((state) => ({ games: [...state.games, game] })),
  deleteGame: (gameId: number) =>
    set((state) => ({ games: state.games.filter((g) => g._id !== gameId) })),
  setGames: (games: Games) => set(() => ({ games })),
}));
