import React from 'react';
import {Routes, Route, Navigate,} from 'react-router'
import {authRoutes,publicRoutes} from "../routes";
import {Context} from "../index";
import {useContext} from "react";
import {HOME_ROUTE} from "../utils/consts";

const AppRouter = () => {
    const {user} = useContext(Context)
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path , element}) =>
                <Route key={path} path={path} element={element} exact/>
            )}
            {publicRoutes.map(({path, element}) =>
                <Route key={path} path={path} element={element} exact/>
            )}
            <Route path="*" elemnt={<Navigate to={HOME_ROUTE}/>}/>
        </Routes>
    );
};
export default AppRouter;