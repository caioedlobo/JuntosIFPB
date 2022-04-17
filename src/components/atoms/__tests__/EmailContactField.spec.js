import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import EmailContactField from '../EmailContactField'
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('EmailContactField', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
     render(
        <MemoryRouter>
          <Routes location="/">
            <Route path="/" element={<EmailContactField />} />
         </Routes>
       </MemoryRouter>
     );
    const emailContactField = screen.getByTestId('email-contact-field')

    expect(emailContactField).toBeInTheDocument()
  })
})