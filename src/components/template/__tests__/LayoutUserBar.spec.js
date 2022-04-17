import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import LayoutUserBar from '../LayoutUserBar'
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('LayoutUserBar', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
     render(
        <MemoryRouter>
          <Routes location="/">
            <Route path="/" element={<LayoutUserBar />} />
         </Routes>
       </MemoryRouter>
     );
    const layoutUserBar = screen.getByTestId('layout-user-bar')

    expect(layoutUserBar).toBeInTheDocument()
  })
})