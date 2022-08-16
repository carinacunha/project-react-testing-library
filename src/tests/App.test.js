import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testa o componente About', () => {
  test('Verifica se o primeiro link possui o texto Home', () => {
    renderWithRouter(<App />);

    const linkHome = screen.getByRole('link', { name: /home/i });
    expect(linkHome).toBeInTheDocument();

    const linkAbout = screen.getByRole('link', { name: /about/i });
    expect(linkAbout).toBeInTheDocument();

    const linkFavorites = screen.getByRole('link', { name: /Favorite Pokémons/i });
    expect(linkFavorites).toBeInTheDocument();
  });

  test('Verifica se ao clicar em Home a aplicação é redirecionada para "/"', () => {
    const { history } = renderWithRouter(<App />);

    const linkHome = screen.getByRole('link', { name: /home/i });
    expect(history.location.pathname).toBe('/');

    userEvent.click(linkHome);
    expect(history.location.pathname).toBe('/');
  });

  test('Verifica se ao clicar em About a aplicação é redirecionada para "/about"', () => {
    const { history } = renderWithRouter(<App />);

    const linkAbout = screen.getByRole('link', { name: /about/i });
    expect(history.location.pathname).toBe('/');

    userEvent.click(linkAbout);
    expect(history.location.pathname).toBe('/about');
  });

  test('Verifica se o link Pokémons redireciona para "/favorites"', () => {
    const { history } = renderWithRouter(<App />);

    const linkFavorites = screen.getByRole('link', { name: /Favorite Pokémons/i });
    expect(history.location.pathname).toBe('/');

    userEvent.click(linkFavorites);
    expect(history.location.pathname).toBe('/favorites');
  });

  test('Verifica  se redirecionada para a página Not Found', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/digimon');

    const NotFound = screen.getByRole('heading', { name: /Page requested/i, level: 2 });
    expect(NotFound).toBeInTheDocument();
  });
});
