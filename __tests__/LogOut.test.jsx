import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Logout from '../src/components/LogOut'


/* Creation de la simulation(mocks) pour les hooks "useNavigate" et "useDispatch" */
jest.mock('react-router-dom', () => ({
    useNavigate: jest.fn(),
}));
jest.mock('react-redux', () => ({
    useDispatch: jest.fn(),
}));

/* Simulation de la fonction "localStorage.clear" */
const localStorageMock = {
  clear: jest.fn()
};
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});


/* Verification de l'affichage du boutton Logout */
describe('Logout', () => {
  it('renders the logout button', () => {
    render(<Logout />);
    const button = screen.getByRole('button', { name: /déconnexion/i });
    expect(button).toBeInTheDocument();
  });


/* verification de la fontion handleLogout */
  it('calls handleLogout on button click', () => {
    const navigate = jest.fn();
    const dispatch = jest.fn();
    useNavigate.mockReturnValue(navigate);
    useDispatch.mockReturnValue(dispatch);

    render(<Logout />);
    const button = screen.getByRole('button', { name: /déconnexion/i });

    fireEvent.click(button);

    expect(dispatch).toHaveBeenCalledWith({ type: 'LOGOUT_USER' });
    expect(localStorage.clear).toHaveBeenCalled();
    expect(navigate).toHaveBeenCalledWith('/');
  });
});

