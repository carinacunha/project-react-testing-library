import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { About } from '../pages';

describe('Testa o componente About', () => {
  test('Verifica se a página contém um heading h2 com o texto About Pokédex', () => {
    renderWithRouter(<About />);

    const subtitle = screen.getByRole('heading', { name: /About Pokédex/i, level: 2 });
    expect(subtitle).toBeInTheDocument();
  });

  test('Verifica se a página contém dois parágrafos com texto sobre a Pokédex', () => {
    renderWithRouter(<About />);

    const firstParagraph = screen.getByText(/This application/i);
    const secondParagraph = screen.getByText(/One can filter/i);
    expect(firstParagraph).toBeInTheDocument();
    expect(secondParagraph).toBeInTheDocument();
  });

  test('Verifica se a página contém a seguinte imagem de uma Pokédex', () => {
    renderWithRouter(<About />);

    const url = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    const PokedexImage = screen.getByRole('img');
    expect(PokedexImage.src).toContain(url);
  });
});
