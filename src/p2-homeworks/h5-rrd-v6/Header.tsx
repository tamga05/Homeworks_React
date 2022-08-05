import React, {useState} from 'react'
import s from './H5.module.css'
import {NavLink} from 'react-router-dom';


function Header() {

    const [isCollapsed, setIsCollapsed] = useState(false)

    const onClickHandler = () => {
        setIsCollapsed(!isCollapsed)
    }

    return (
        <div className={s.linkBlockWrapper}>
            {
                isCollapsed &&
                <div className={s.navLinkWrapper}>
                    {/*// add NavLinks*/}

                    <NavLink
                        to="/pre-junior"
                        className={({isActive}) => (isActive ? s.active : s.inactive)}
                        // target={'_blank'}
                    >
                        pre-junior
                    </NavLink>

                    <NavLink
                        to="/junior"
                        className={({isActive}) => (isActive ? s.active : s.inactive)}
                    >
                        junior
                    </NavLink>

                    <NavLink
                        to="/junior+"
                        className={({isActive}) => (isActive ? s.active : s.inactive)}
                    >
                        junior+
                    </NavLink>

                    {/*=====================================================================================*/}

                    <NavLink
                        to="/error404"
                        className={({isActive}) => (isActive ? s.active : s.inactive)}
                    >
                        error404
                    </NavLink>

                </div>
            }
            <div className={s.button} onClick={onClickHandler}>Click me</div>
        </div>
    )
}

export default Header;
