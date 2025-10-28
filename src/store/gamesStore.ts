import { create } from "zustand";
import type { Game, Games } from "../types/gameType";

export const realMockGames: Game[] = [
  {
    _id: 101,
    name: "Blasphemous",
    description:
      'En un mundo oscuro y opresivo inspirado en la imaginería religiosa del sur de España, Blasphemous te pone en la piel del Penitente, el único superviviente de la masacre del "Dolor Silente". A través de un metroidvania desafiante, deberás enfrentarte a grotescas criaturas y jefes colosales mientras exploras escenarios cargados de simbolismo religioso, sangre y penitencia. Su atmósfera única y pixel art detallado lo han convertido en un clásico moderno.',
    release: "2019-09-10",
    tba: false,
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
    _id: 194817,
    name: "Hades (2016)",
    description:
      "Hades es un juego de plataformas minimalista y de aventuras. Controlás a un guerrero misterioso atrapado en el infierno que sigue una luz blanca en su intento de escapar. A lo largo del viaje se enfrenta a enemigos como esqueletos y esferas de oscuridad. El juego destaca por su jugabilidad simple pero efectiva y su estilo visual minimalista.",
    release: "2016-06-23",
    tba: false,
    rating: 0.0,
    backgroundImage:
      "https://media.rawg.io/media/screenshots/b7b/b7b66ade987d2d33542797ebe460ef5b.jpg",
    source: "API",
    favorite: false,
    genres: [
      {
        id: 83,
        name: "Platformer",
        slug: "platformer",
      },
    ],
    developedBy: ["ryvedc"],
    platforms: [
      {
        id: 4,
        name: "PC",
        slug: "pc",
        image_background:
          "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg",
        released_at: "2016-06-23",
        requirements: {
          minimum: `Minimum: OS: Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1, Windows Vista 64 Bit Service Pack 2* (*NVIDIA video card recommended if running Vista OS)
Processor: Intel Core 2 Quad CPU Q6600 @ 2.40GHz (4 CPUs) / AMD Phenom 9850 Quad-Core Processor (4 CPUs) @ 2.5GHz
Memory: 4 GB RAM
Graphics: NVIDIA 9800 GT 1GB / AMD HD 4870 1GB (DX 10, 10.1, 11)
Storage: 72 GB available space
Sound Card: 100% DirectX 10 compatible
Additional Notes: Over time downloadable content and programming changes will change the system requirements for this game. Please refer to your hardware manufacturer and www.rockstargames.com/support for current compatibility information. Some system components such as mobile chipsets, integrated, and AGP graphics cards may be incompatible. Unlisted specifications may not be supported by publisher.
Other requirements: Installation and online play requires log-in to Rockstar Games Social Club (13+) network; internet connection required for activation, online play, and periodic entitlement verification; software installations required including Rockstar Games Social Club platform, DirectX, Chromium, and Microsoft Visual C++ 2008 sp1 Redistributable Package, and authentication software that recognizes certain hardware attributes for entitlement, digital rights management, system, and other support purposes.
SINGLE USE SERIAL CODE REGISTRATION VIA INTERNET REQUIRED; REGISTRATION IS LIMITED TO ONE ROCKSTAR GAMES SOCIAL CLUB ACCOUNT (13+) PER SERIAL CODE; ONLY ONE PC LOG-IN ALLOWED PER SOCIAL CLUB ACCOUNT AT ANY TIME; SERIAL CODE(S) ARE NON-TRANSFERABLE ONCE USED; SOCIAL CLUB ACCOUNTS ARE NON-TRANSFERABLE.
Partner Requirements: Please check the terms of service of this site before purchasing this software.`,
          recommended: `Recommended: OS: Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1
Processor: Intel Core i5 3470 @ 3.2GHz (4 CPUs) / AMD X8 FX-8350 @ 4GHz (8 CPUs)
Memory: 8 GB RAM
Graphics: NVIDIA GTX 660 2GB / AMD HD 7870 2GB
Storage: 72 GB available space
Sound Card: 100% DirectX 10 compatible
Additional Notes:`,
        },

        requirements_ru: null,
      },
    ],
    publishers: ["Supergiant Games", "Indie Games Publishing"],
    stores: [
      {
        id: 101,
        url: "https://store.steampowered.com/",
        store: {
          id: 1,
          name: "Steam",
          slug: "steam",
          domain: "store.steampowered.com",
          games_count: 900000,
          image_background:
            "https://static.vecteezy.com/system/resources/previews/020/336/432/non_2x/steam-logo-steam-icon-free-free-vector.jpg",
        },
      },
      {
        id: 102,
        url: "https://store.playstation.com/",
        store: {
          id: 2,
          name: "PlayStation 5",
          slug: "playstation5",
          domain: "store.playstation.com",
          games_count: 5000,
          image_background:
            "https://static.vecteezy.com/system/resources/previews/020/336/432/non_2x/steam-logo-steam-icon-free-free-vector.jpg",
        },
      },
      {
        id: 103,
        url: "https://store.playstation.com/",
        store: {
          id: 3,
          name: "PlayStation 4",
          slug: "playstation4",
          domain: "store.playstation.com",
          games_count: 8000,
          image_background:
            "https://static.vecteezy.com/system/resources/previews/020/336/432/non_2x/steam-logo-steam-icon-free-free-vector.jpg",
        },
      },
      {
        id: 104,
        url: "https://www.xbox.com/",
        store: {
          id: 4,
          name: "Xbox One",
          slug: "xbox-one",
          domain: "xbox.com",
          games_count: 7000,
          image_background:
            "https://static.vecteezy.com/system/resources/previews/020/336/432/non_2x/steam-logo-steam-icon-free-free-vector.jpg",
        },
      },
      {
        id: 105,
        url: "https://store.epicgames.com/",
        store: {
          id: 5,
          name: "Epic Games",
          slug: "epic-games",
          domain: "store.epicgames.com",
          games_count: 2500,
          image_background:
            "https://static.vecteezy.com/system/resources/previews/020/336/432/non_2x/steam-logo-steam-icon-free-free-vector.jpg",
        },
      },
      {
        id: 106,
        url: "https://www.nintendo.com/store/",
        store: {
          id: 6,
          name: "Nintendo Switch",
          slug: "nintendo-switch",
          domain: "nintendo.com",
          games_count: 6000,
          image_background:
            "https://static.vecteezy.com/system/resources/previews/020/336/432/non_2x/steam-logo-steam-icon-free-free-vector.jpg",
        },
      },
    ],
    tags: [
      {
        id: 822,
        name: "escape",
        slug: "escape",
      },
      {
        id: 3397,
        name: "light",
        slug: "light",
      },
      {
        id: 1190,
        name: "hell",
        slug: "hell",
      },
      {
        id: 627,
        name: "Skeletons",
        slug: "skeletons",
      },
      {
        id: 604,
        name: "simple",
        slug: "simple",
      },
    ],
    shortScreenshots: [
      {
        id: 1,
        image:
          "https://media.rawg.io/media/screenshots/b7b/b7b66ade987d2d33542797ebe460ef5b.jpg",
      },
      {
        id: 2,
        image:
          "https://media.rawg.io/media/screenshots/6f1/6f104696c7c08bedd36a0dc74b5281a9.jpg",
      },
      {
        id: 3,
        image:
          "https://media.rawg.io/media/screenshots/fec/fec8098f8abf31370f688472e828a701.jpg",
      },
      {
        id: 4,
        image:
          "https://media.rawg.io/media/screenshots/390/390bfd1b7b607d729a9a84de74bc3272.jpg",
      },
    ],
    ratings: [
      {
        id: 5,
        title: "Exceptional",
        count: 142,
        percentage: 68.9,
      },
      {
        id: 4,
        title: "Good",
        count: 40,
        percentage: 19.4,
      },
      {
        id: 3,
        title: "Meh",
        count: 17,
        percentage: 8.2,
      },
      {
        id: 1,
        title: "Skip",
        count: 7,
        percentage: 3.5,
      },
    ],
  },
  {
    _id: 103,
    name: "FIFA 23",
    description:
      "La última entrega de la icónica saga de fútbol de EA Sports bajo el nombre FIFA. Presenta mejoras gráficas con HyperMotion2, físicas más realistas y la inclusión de equipos femeninos de clubes europeos. Con modos como Ultimate Team, Carrera y Volta Football, ofrece una experiencia competitiva y social tanto online como offline. Es la culminación de décadas de desarrollo de simuladores de fútbol.",
    release: "2022-09-30",
    tba: false,
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
    tba: false,
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
    tba: false,
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

export const useGamesMockedStore = create<GamesState>((set) => ({
  games: realMockGames,
  addGame: (game: Game) => set((state) => ({ games: [...state.games, game] })),
  deleteGame: (gameId: number) =>
    set((state) => ({ games: state.games.filter((g) => g._id !== gameId) })),
  setGames: (games: Games) => set(() => ({ games })),
}));
