import React from 'react'
import UserCard from '../organisms/UserCard'
import LayoutUserPage from '../template/LayoutUserPage'

const Account = () => {
  return <div data-testid='account'>
    <LayoutUserPage>
      <UserCard/>
    </LayoutUserPage>
  </div>
}

export default Account