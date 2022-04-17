import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import ResetPasswordText from '../ResetPasswordText'
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('ResetPasswordText', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
     render(
        <MemoryRouter>
          <Routes location="/">
            <Route path="/" element={<ResetPasswordText />} />
         </Routes>
       </MemoryRouter>
     );
    const resetPasswordText = screen.getByTestId('reset-password-text')

    expect(resetPasswordText).toBeInTheDocument()
  })
})