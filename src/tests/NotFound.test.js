import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { NotFound } from '../pages';

describe('Testa o componente NotFound', () => {
  test('Verifica se a página contém um heading h2 com o texto Page requested not', () => {
    renderWithRouter(<NotFound />);

    const subtitle = screen.getByRole('heading',
      { name: /Page requested not found/i, level: 2 });
    expect(subtitle).toBeInTheDocument();
  });

  test('Verifica se a página mostra a imagem com URL específica', () => {
    renderWithRouter(<NotFound />);

    const url = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
    const image = screen.getByRole('img', { name: /Pikachu crying/ });
    expect(image.src).toContain(url);
  });
});
