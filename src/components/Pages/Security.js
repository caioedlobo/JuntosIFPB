import React from 'react'
import LayoutUserPage from '../template/LayoutUserPage'
import SecurityCard from "../organisms/SecurityCard"
const Security = () => {
  return <div data-testid='security'>
    <LayoutUserPage>
      <SecurityCard/>
    </LayoutUserPage>
  </div>
}

export default Security