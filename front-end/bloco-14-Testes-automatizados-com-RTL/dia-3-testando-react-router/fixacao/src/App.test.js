// import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App, { About } from './App';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

describe('testing our application', () => {
  test('should render the component App', () => {
    renderWithRouter(<App />);
  
    const homeTitle = screen.getByRole('heading', { name: 'Você está na página Início' });
    expect(homeTitle).toBeInTheDocument();
  });
  
  it('should render the component About', () => {
    const { history } = renderWithRouter(<App />);
  
    const aboutLink = screen.getByRole('link', { name: 'Sobre' });
    expect(aboutLink).toBeInTheDocument();
    userEvent.click(aboutLink);
  
    const { pathname } = history.location;
    expect(pathname).toBe('/about');
  
    const aboutTittle = screen.getByRole('heading',
    { name: 'Você está na página Sobre'});
    expect(aboutTittle).toBeInTheDocument();
  });

  it('should render a path that doesnt exists and checks Not Found message', () => {
    const { history } = renderWithRouter(<App />);

    act(() => {
      history.push('/pagina/que-nao-existe/');
    })

    const notFoundTitle = screen.getByRole('heading',
      { name: 'Página não encontrada' });
    expect(notFoundTitle).toBeInTheDocument();
  });

  it('deve renderizar o componente About (apenas componente)', () => {
    renderWithRouter(<About />);
  
    const aboutTitle = screen.getByRole('heading',
      { name: 'Você está na página Sobre' });
    expect(aboutTitle).toBeInTheDocument();
  });
})
