import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

it("Checks if 'Email' label exists", () => {
  render(<App />);
  const inputEmail = screen.getByLabelText('Email');
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail).toHaveProperty('type', 'email');
});

it("Checks if a button with text 'Enviar' exists", () => {
  render(<App />);
  const btnSend = screen.getByTestId('send-btn');
  expect(btnSend).toBeInTheDocument();
  expect(btnSend).toHaveProperty('type', 'button');
  expect(btnSend).toHaveValue('Enviar');
});

it("Checks if 2 buttons exist", () => {
  render(<App />);
  const btn = screen.getAllByRole('button');
  expect(btn).toHaveLength(2);
});

it("Interact and check if typing on email input and clicking on 'Enviar', will save the input value at 'Valor'", async () => {
  render(<App />);

  const EMAIL_USER = 'email@email.com';
  
  const btnSend = screen.getByTestId('send-btn');
  const inputEmail = screen.getByLabelText('Email');
  userEvent.type(inputEmail, EMAIL_USER);
  userEvent.click(btnSend);
  
  const textEmail = await screen.findByTestId('id-email-user');

  expect(inputEmail).toHaveValue('');
  expect(textEmail).toHaveTextContent(`Valor: ${ EMAIL_USER }`);
});