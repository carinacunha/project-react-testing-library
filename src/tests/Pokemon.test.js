import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';
import pokemons from '../data';

const pokemon = pokemons[0];
console.log(pokemon.id);

describe('Verifica se é renderizado um card com as informações do pokémon', () => {
  test('Verifica se imagem do pokemon possui o src correto', () => {
    renderWithRouter(<App />);

    const url = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';
    const imagePokemon = screen.getByRole('img', { name: /Pikachu/ });
    expect(imagePokemon).toBeInTheDocument();
    expect(imagePokemon.src).toContain(url);
  });

  test('Verifica se a imagem do pokemon possui o alt <name> sprite', () => {
    renderWithRouter(<App />);

    const imagePokemon = screen.getByRole('img', { name: /Pikachu/i });
    expect(imagePokemon).toHaveAttribute('alt', 'Pikachu sprite');
  });

  test('Verifica se a imagem de favorito possui o src /star-icon.svg', () => {
    const { history } = renderWithRouter(<App />);

    history.push(`/pokemons/${pokemon.id}`);

    const checkFavorite = screen.getByLabelText('Pokémon favoritado?');
    expect(checkFavorite).toBeInTheDocument();

    userEvent.click(checkFavorite);

    const url = '/star-icon.svg';
    const imageStar = screen.getByRole('img', { name: /Pikachu is marked as/i });
    expect(imageStar).toBeInTheDocument();
    expect(imageStar.src).toContain(url);
  });

  test('Verifica se a imagem de favorito possui o alt <name>', () => {
    renderWithRouter(<App />);

    const imageStar = screen.getByRole('img', { name: /Pikachu is marked as/i });
    expect(imageStar).toHaveAttribute('alt', 'Pikachu is marked as favorite');
  });

  test('Verifica se link de detalhes possui a URL /pokemons/<id>', () => {
    const { history } = renderWithRouter(<App />);

    const linkDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(linkDetails);
    expect(history.location.pathname).toBe(`/pokemons/${pokemon.id}`);
  });

  test('Verifica se o tipo correto do pokémon é mostrado na tela>', () => {
    const { history } = renderWithRouter(<App />);

    history.push(`/pokemons/${pokemon.id}`);
    const typePokemon = screen.getByTestId('pokemon-type');
    expect(typePokemon).toHaveTextContent(pokemon.type);
  });

  test('Verifica se o nome correto do pokémon é mostrado na tela>', () => {
    const { history } = renderWithRouter(<App />);

    history.push(`/pokemons/${pokemon.id}`);
    const namePokemon = screen.getByTestId('pokemon-name');
    expect(namePokemon).toHaveTextContent(pokemon.name);
  });
});
