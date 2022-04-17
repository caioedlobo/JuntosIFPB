import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import UserCard from '../UserCard'
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('UserCard', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
     render(
        <MemoryRouter>
          <Routes location="/">
            <Route path="/" element={<UserCard />} />
         </Routes>
       </MemoryRouter>
     );
    const userCard = screen.getByTestId('user-card')

    expect(userCard).toBeInTheDocument()
  })
})