// {
//   "first": 1,
//   "prev": null,
//   "next": null,
//   "last": 1,
//   "pages": 1,
//   "items": 3,
//   "data": [
//     {
//       "id": "2bde",
//       "name": "Juego 2",
//       "description": "kjdfañfañklj",
//       "background_image": "https://preview.redd.it/goku-hands-you-a-job-application-v0-fi4p7gva9ybf1.jpeg?auto=webp&s=2f80caacd4594cecd14ea788cebc5da7db37549e",
//       "released": "2025-11-17",
//       "rating": 5,
//       "tba": true,
//       "source": "DATABASE"
//     },
//     {
//       "id": "6137",
//       "name": "Juego 54",
//       "description": "Aura",
//       "released": "2025-11-29",
//       "rating": 5,
//       "tba": true,
//       "source": "DATABASE",
//       "favorite": true,
//       "genres": [
//         {
//           "id": null,
//           "name": "Acción",
//           "slug": "Acción"
//         }
//       ]
//     },
//     {
//       "id": "2771",
//       "name": "Juego 55q",
//       "description": "Auraasajkfsadlñkjfadsñkfjs",
//       "released": "2025-11-29",
//       "rating": 5,
//       "tba": true,
//       "source": "DATABASE",
//       "favorite": true,
//       "genres": [
//         {
//           "id": null,
//           "name": "Acción",
//           "slug": "Acción"
//         }
//       ]
//     }
//   ]
// }
export interface serverGamesResponse{
  first: number;
  prev: number | null;
  next: number | null;
  last: number;
  pages: number; // número total de páginas
  items: number; // cantidad total de ítems en la BD
  data: Game[];  // SIEMPRE Game[]
}