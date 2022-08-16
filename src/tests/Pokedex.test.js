import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testa o componente Pokedex', () => {
  test('Verifica se a página contém o texto Encountered pokémons', () => {
    renderWithRouter(<App />);

    const subtitle = screen.getByRole('heading',
      { name: /Encountered pokémons/i, level: 2 });
    expect(subtitle).toBeInTheDocument();
  });

  test('Verifica se é exibido o próximo pokémon quando o botão Próximo pokémon', () => {
    renderWithRouter(<App />);

    const buttonNext = screen.getByText('Próximo pokémon');
    expect(buttonNext).toBeInTheDocument();
  });

  test('Verifica se a Pokédex tem os botões de filtro com nome correto', () => {
    renderWithRouter(<App />);

    const buttons = screen.queryAllByTestId('pokemon-type-button');

    buttons.forEach((button) => expect(button).toBeInTheDocument);

    expect(buttons[0]).toHaveTextContent('Electric');
    expect(buttons[1]).toHaveTextContent('Fire');
    expect(buttons[2]).toHaveTextContent('Bug');
    expect(buttons[3]).toHaveTextContent('Poison');
    expect(buttons[4]).toHaveTextContent('Psychic');
    expect(buttons[5]).toHaveTextContent('Normal');
    expect(buttons[6]).toHaveTextContent('Dragon');

    const buttonAll = screen.getByText('All');
    expect(buttonAll).toBeInTheDocument();
    expect(buttonAll).toHaveTextContent('All');
  });

  test('Verifica se se a Pokédex contém um botão para resetar o filtro', () => {
    renderWithRouter(<App />);

    const buttonAll = screen.getByText('All');
    const buttons = screen.queryAllByTestId('pokemon-type-button');
    buttons.forEach((button) => expect(button).toBeInTheDocument);

    userEvent.click(buttons[0]);
    userEvent.click(buttonAll);
  });
});
