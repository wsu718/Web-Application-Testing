import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from './Dashboard';

test('Strike button renders', () => {
    const { getByText } = render(<Dashboard />);
    getByText(/strike/i);
});

test('Ball button renders', () => {
    const { getByText } = render(<Dashboard />);
    getByText(/ball/i);
});

test('Foul button renders', () => {
    const { getByText } = render(<Dashboard />);
    getByText(/foul/i);
});

test('Hit button renders', () => {
    const { getByText } = render(<Dashboard />);
    getByText(/hit/i);
});

