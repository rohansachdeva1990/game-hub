import { render, screen } from '@testing-library/react';
import GameHeading from './GameHeading';
import { GameQuery } from '../App';
import { Genre } from '../hooks/useGenres';
import { Platform } from '../hooks/usePlatforms';

describe('GameHeading', () => {
  it('renders platform and genre names', () => {
    const gameQuery: GameQuery = {
      genre: { id: 1, name: 'Action', image_background: '' } as Genre,
      platform: { id: 1, name: 'Xbox', slug: 'xbox' } as Platform,
      sortOrder: '',
      searchText: '',
    };
    render(<GameHeading gameQuery={gameQuery} />);
    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('Xbox Action Games');
  });

  it('renders fallback when no platform or genre', () => {
    const gameQuery: GameQuery = {
      genre: null,
      platform: null,
      sortOrder: '',
      searchText: '',
    };
    render(<GameHeading gameQuery={gameQuery} />);
    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('  Games');
  });
});
