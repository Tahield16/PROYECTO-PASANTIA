// "platforms": [
//         {
//             "platform": {
//                 "id": 18,
//                 "name": "PlayStation 4",
//                 "slug": "playstation4",
//                 "image": null,
//                 "year_end": null,
//                 "year_start": null,
//                 "games_count": 6947,
//                 "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
//             },
//             "released_at": "2014-08-25",
//             "requirements": {}

import type { Requirement } from "./requirements"

export interface Platform{
    platform:{
        id:number,
        name:string,
        slug:string,
        image:string,
        year_end:string,
        year_start:string,
        games_count:number,
        image_background:string,
    }
    released_at:string,
    requirements:Requirement
}