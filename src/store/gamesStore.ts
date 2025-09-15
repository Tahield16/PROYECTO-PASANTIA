import { create } from "zustand";
import type { Game, Games } from "../types/gameType";
export const initialGames: Games =[
  {
    _id: 1,
    name: "Game 1",
    description: "Entra en un mundo donde los píxeles cobran vida, las aventuras se esconden tras cada esquina y cada criatura tiene su propio secreto. Prepárate para explorar, descubrir tesoros ocultos y desafiar tus habilidades en un universo lleno de color, emoción y sorpresas interminables.",
    release: "2023-01-01",
    rating: 4.5,
    img: "https://placehold.co/400",
    source: "API",
    favorite:true,
    genres: ["Action", "Adventure"],
  },
  {
    _id: 2,
    name: "Game 2",
    description: "Segundo juego de ejemplo",
    release: "2024-01-01",
    rating: 4.0,
    img: "https://placehold.co/400",
    source: "DATABASE",
    favorite:false,
    genres: ["RPG", "Fantasy"],
  },
  {
    _id: 3,
    name: "Game 3",
    description: "Tercer juego de ejemplo",
    release: "2022-05-15",
    rating: 3.8,
    img: "https://placehold.co/400",
    source: "API",
    favorite:true,
    genres: ["Puzzle", "Strategy"],
  },
  {
    _id: 4,
    name: "Game 4",
    description: "Cuarto juego de ejemplo",
    release: "2021-11-10",
    rating: 4.2,
    img: "https://placehold.co/400",
    favorite:false,
    source: "DATABASE",
    genres: ["Shooter", "Multiplayer"],
  },
  {
    _id: 5,
    name: "Game 5",
    description: "Quinto juego de ejemplo",
    release: "2023-08-20",
    rating: 4.7,
    img: "https://placehold.co/400",
    source: "API",
    favorite:true,
    genres: ["Simulation", "Strategy"],
  },
]

interface GamesState {
  games: Games;
  addGame: (game: Game) => void;
  deleteGame: (gameId: number) => void;
  setGames: (games: Games) => void;
}

export const useGamesStore = create<GamesState>((set) => ({
  games: initialGames,
  addGame: (game: Game) => set((state) => ({ games: [...state.games, game] })),
  deleteGame: (gameId: number) => set((state) => ({ games: state.games.filter((g) => g._id !== gameId) })),
  setGames: (games: Games) => set(() => ({ games })),
}));
