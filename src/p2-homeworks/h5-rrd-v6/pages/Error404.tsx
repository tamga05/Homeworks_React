import React from 'react'
import s from './../H5.module.css'
import {NavLink} from 'react-router-dom';


function Error404() {
    return (
        // <div>
        //     {/*<div>404</div>*/}
        //     {/*<div>Page not found!</div>*/}
        //     {/*<div>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>*/}
        // </div>
        <div className={s.content}>
            {/*<a href="/">Go to main page...</a>*/}
            {/*<a href={'/'}>Go to main page...</a>*/}

            <NavLink
                to="/pre-junior"
                className={({isActive}) => (isActive ? s.active : s.inactive)}

                // Ссылка на пустую страницу тоже отлично работает
                // target={'_blank'}

                // Дополнительное свойство для Безопасности при переходе на неизвестные страницы
                // rel={'noreferrer nofollow noopener'}
            >
                Go to main page...
            </NavLink>
        </div>
    )
}

export default Error404;
