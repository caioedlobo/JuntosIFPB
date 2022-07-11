import React from 'react'
import DemandAdminCard from '../organisms/DemandAdminCard'
import LayoutUserPage from '../template/LayoutUserPage'

const DemandAdmin = () => {
    return (
        <div>
            <LayoutUserPage>
                <DemandAdminCard />
            </LayoutUserPage>
        </div>
    )
}

export default DemandAdmin