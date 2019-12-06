import React from 'react';
import { render } from '@testing-library/react';
import Display from './Display';

test('Balls listed on scoreboard', () => {
    const { getByText } = render(<Display />);
    getByText(/balls/i);
});

test('Strikes listed on scoreboard', () => {
    const { getByText } = render(<Display />);
    getByText(/strikes/i);
});

test('Outs listed on scoreboard', () => {
    const { getByText } = render(<Display />);
    getByText(/outs/i);
});