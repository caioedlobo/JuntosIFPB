import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import SecurityCard from '../SecurityCard'
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('SecurityCard', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
     render(
        <MemoryRouter>
          <Routes location="/">
            <Route path="/" element={<SecurityCard />} />
         </Routes>
       </MemoryRouter>
     );
    const securityCard = screen.getByTestId('security-card')

    expect(securityCard).toBeInTheDocument()
  })
})