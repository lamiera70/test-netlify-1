import DarkLite from '../DarkLite/DarkLite';
import './Menu.css';
import { NavLink } from 'react-router'

export default function Menu({title}) {

    return(
        <>
            <ul>
                <li>
                    <NavLink to='/'>
                        home page
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/favorite'>
                        preferiti
                    </NavLink>
                </li>
            </ul>

            <DarkLite />

            <h1>{title}</h1>
        </>
    );
}