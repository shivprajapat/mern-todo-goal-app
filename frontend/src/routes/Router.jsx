import { lazy } from 'react'
import { route } from 'shared/constants/AllRoutes'

const PublicRoute = lazy(() => import('routes/PublicRoutes'))
const PrivateRoute = lazy(() => import('routes/PrivateRoutes'))

// public Routes Files
const Login = lazy(() => import('pages/Login'))
const Register = lazy(() => import('pages/Register'))

// Private Routes Files
const Dashboard = lazy(() => import('pages/Dashboard'))

const RoutesDetails = [
    {
        defaultRoute: '',
        Component: PublicRoute,
        props: {},
        isPrivateRoute: false,
        children: [
            { path: '/login', Component: Login, exact: true },
            { path: route.register, Component: Register, exact: true },
        ]
    },
    {
        defaultRoute: '',
        Component: PrivateRoute,
        props: {},
        isPrivateRoute: true,
        children: [
            { path: route.dashboard, Component: Dashboard, exact: true },
        ]
    }
]

export default RoutesDetails
