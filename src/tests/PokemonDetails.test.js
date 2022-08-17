import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';
import pokemons from '../data';

const pokemon = pokemons[0];
console.log(pokemon.id);

describe('Testa o componente About', () => {
  test('Verifica se é exibido na tela um h2 com o texto <name> Details', () => {
    const { history } = renderWithRouter(<App />);

    history.push(`/pokemons/${pokemon.id}`);

    const titleDetails = screen.getByRole('heading', { name: /Pikachu Det/i, level: 2 });
    expect(titleDetails).toBeInTheDocument();
    expect(titleDetails).toHaveTextContent(`${pokemon.name} Details`);
  });

  test('Verifica se é exibido na tela um h2 com o texto Summary', () => {
    const { history } = renderWithRouter(<App />);

    history.push(`/pokemons/${pokemon.id}`);

    const summary = screen.getByRole('heading', { name: /Summary/i, level: 2 });
    expect(summary).toBeInTheDocument();
    expect(summary).toHaveTextContent('Summary');
  });

  test('Verifica se exibido na tela um texto contendo <summary>', () => {
    const { history } = renderWithRouter(<App />);

    history.push(`/pokemons/${pokemon.id}`);

    const summaryParagraph = screen.getByText(/this intelligent/i);
    expect(summaryParagraph).toBeInTheDocument();
    expect(summaryParagraph).toHaveTextContent(/This intelligent Pokémon/i);
  });

  test('Verifica se exibido na tela um h2 com o texto Game Locations of <name>', () => {
    const { history } = renderWithRouter(<App />);

    history.push(`/pokemons/${pokemon.id}`);

    const location = screen.getByRole('heading', { name: /Game Loc/i, level: 2 });
    expect(location).toBeInTheDocument();
    expect(location).toHaveTextContent(`Game Locations of ${pokemon.name}`);
  });

  test('Verifica se são exibidas na tela imagens de localização com o src', () => {
    const { history } = renderWithRouter(<App />);

    history.push(`/pokemons/${pokemon.id}`);

    const url1 = 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png';
    const imageLocation = screen.getAllByRole('img', { name: /Pikachu location/i });
    expect(imageLocation[0]).toBeInTheDocument();
    expect(imageLocation[0].src).toContain(url1);

    const url2 = 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png';
    expect(imageLocation[1]).toBeInTheDocument();
    expect(imageLocation[1].src).toContain(url2);
  });

  test('Verifica se é exibido na tela uma label com o texto Pokémon favoritado?', () => {
    const { history } = renderWithRouter(<App />);

    history.push(`/pokemons/${pokemon.id}`);
    const labelText = screen.getByLabelText('Pokémon favoritado?');
    expect(labelText).toBeInTheDocument();
  });
});
