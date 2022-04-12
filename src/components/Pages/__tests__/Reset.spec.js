import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import Reset from '../Reset'
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('Reset', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
     render(
        <MemoryRouter>
          <Routes location="/">
            <Route path="/" element={<Reset />} />
         </Routes>
       </MemoryRouter>
     );
    const reset = screen.getByTestId('reset')

    expect(reset).toBeInTheDocument()
  })
})