import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom';
import PreJunior from './pages/PreJunior';
import Error404 from './pages/Error404';
import Junior from './pages/Junior';
import JuniorPlus from './pages/JuniorPlus';


export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    // add paths
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior+',
    ERROR404: '/error404'
}


function Pages() {
    return (
        <div>
            {/*Routes выбирает первый подходящий роут*/}
            <Routes>

                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                <Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>

                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>

                {/*// add routes*/}

                <Route path={'/'} element={<Navigate to={PATH.JUNIOR}/>}/>

                <Route path={PATH.JUNIOR} element={<Junior/>}/>

                <Route path={'/'} element={<Navigate to={PATH.JUNIOR_PLUS}/>}/>

                <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>

                {/*====================================================================================*/}

                <Route path={'/'} element={<Navigate to={PATH.ERROR404}/>}/>

                <Route path={PATH.ERROR404} element={<Error404/>}/>

                {/*он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route path={'/*'} element={<Error404/>}/>

            </Routes>
        </div>
    )
}

export default Pages;
