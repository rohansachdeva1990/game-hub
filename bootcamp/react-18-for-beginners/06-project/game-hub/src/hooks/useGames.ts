import useData from './useData';
import { Genre } from './useGenres';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (selectedGenre: Genre | null) =>
  useData<Game>(
    '/games',
    {
      params: {
        genres: selectedGenre?.id,
      },
    },
    // This is an interesting way to pass the dependencies
    [selectedGenre?.id]
  );

export default useGames;
