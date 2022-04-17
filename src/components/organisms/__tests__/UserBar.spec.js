import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import UserBar from '../UserBar'
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('UserBar', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
     render(
        <MemoryRouter>
          <Routes location="/">
            <Route path="/" element={<UserBar />} />
         </Routes>
       </MemoryRouter>
     );
    const userBar = screen.getByTestId('user-bar')

    expect(userBar).toBeInTheDocument()
  })
})