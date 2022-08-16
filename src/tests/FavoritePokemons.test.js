import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { FavoritePokemons } from '../pages';

describe('Testa o componente FavoritePokemons', () => {
  test('Teste se é exibida na tela a mensagem No favorite pokemon found', () => {
    renderWithRouter(<FavoritePokemons />);

    const textnotFavorite = screen.getByText(/No favorite/i);
    expect(textnotFavorite).toBeInTheDocument();
  });
});
