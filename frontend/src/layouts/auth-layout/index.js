import React, { Suspense } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { route } from 'constants/AllRoutes'
import { Loading } from 'components'

function AuthLayout({ children }) {
    return (
        <div className='auth-main'>
            <div className='child-box'>
                <Link to={route.login}>
                    goals
                </Link>
                <Suspense fallback={<Loading/>}>
                    {children}
                </Suspense>
            </div>
        </div>
    )
}

AuthLayout.propTypes = {
    children: PropTypes.node.isRequired
}

export default AuthLayout
