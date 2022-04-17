import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import Account from '../Account'
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('Account', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
     render(
        <MemoryRouter>
          <Routes location="/">
            <Route path="/" element={<Account />} />
         </Routes>
       </MemoryRouter>
     );
    const account = screen.getByTestId('account')

    expect(account).toBeInTheDocument()
  })
})