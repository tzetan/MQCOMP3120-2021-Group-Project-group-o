/**
 * @jest-environment jsdom
 */
 import React from 'react'
 import { render, fireEvent } from '@testing-library/react'
 import { BrowserRouter as Router } from 'react-router-dom'; 
 import '@testing-library/jest-dom/extend-expect'
 import LoginForm from './LoginForm'
 
 test('renders the form correctly', () => {
    const { getByText} = render(<LoginForm />);
    const usernameLabel = getByText("Username");
    const passwordLabel = getByText("Password");
    expect(usernameLabel).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
    
 })