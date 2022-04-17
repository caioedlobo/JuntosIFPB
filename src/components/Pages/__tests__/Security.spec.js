import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import Security from '../Security'
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('Security', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
     render(
        <MemoryRouter>
          <Routes location="/">
            <Route path="/" element={<Security />} />
         </Routes>
       </MemoryRouter>
     );
    const security = screen.getByTestId('security')

    expect(security).toBeInTheDocument()
  })
})