import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import LayoutUserPage from '../LayoutUserPage'
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('LayoutUserPage', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
     render(
        <MemoryRouter>
          <Routes location="/">
            <Route path="/" element={<LayoutUserPage />} />
         </Routes>
       </MemoryRouter>
     );
    const layoutUserPage = screen.getByTestId('layout-user-page')

    expect(layoutUserPage).toBeInTheDocument()
  })
})