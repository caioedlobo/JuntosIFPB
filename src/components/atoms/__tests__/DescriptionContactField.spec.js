import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import DescriptionContactField from '../DescriptionContactField'
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('DescriptionContactField', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
     render(
        <MemoryRouter>
          <Routes location="/">
            <Route path="/" element={<DescriptionContactField />} />
         </Routes>
       </MemoryRouter>
     );
    const descriptionContactField = screen.getByTestId('description-contact-field')

    expect(descriptionContactField).toBeInTheDocument()
  })
})