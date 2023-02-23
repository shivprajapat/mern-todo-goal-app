import React, { Suspense } from 'react'
import PropTypes from 'prop-types'
import { Header, Loading } from 'components'


function MainLayout({ children }) {

    return (
        <div className='main-layout'>
            <Header />
            <div className={`main-container`}>
                <div className='container'>
                    <Suspense fallback={<Loading/>}>{children}</Suspense>
                </div>
            </div>
        </div>
    )
}
MainLayout.propTypes = {
    children: PropTypes.node.isRequired
}
export default MainLayout
