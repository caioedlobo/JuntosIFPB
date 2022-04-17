import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import NameText from '../NameText'
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('NameText', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
     render(
        <MemoryRouter>
          <Routes location="/">
            <Route path="/" element={<NameText />} />
         </Routes>
       </MemoryRouter>
     );
    const nameText = screen.getByTestId('name-text')

    expect(nameText).toBeInTheDocument()
  })
})