import { Loading } from 'components'
import React, { Suspense } from 'react'
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom'

import Router from 'routes/Router'
// import { Toastr } from 'shared/components/toastr'

function AllRoutes() {
    function allPaths(children) {
        return children?.map(({ path, Component, exact, props, children: child }, index) => {
            return child?.length ? (
                <Route element={<Component />} key={index}>{allPaths(child)}</Route>
            ) : (
                <Route
                    key={path}
                    path={path}
                    element={
                        <Suspense fallback={<Loading />}>
                            <Component {...props} />
                        </Suspense>
                    }
                    exact={exact}
                />
            )
        })
    }
    return (
        <>
            {/* <Toastr limit={5} /> */}
            <BrowserRouter>
                <Routes>
                    {Router?.map(({ isPrivateRoute, children, Component }) => {
                        return (
                            <Route key={isPrivateRoute ? 'private' : 'public'} element={<Component />}>
                                {allPaths(children)}
                            </Route>
                        )
                    })}
                    <Route path='*' element={<Navigate to='/dashboard' />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default React.memo(AllRoutes)
