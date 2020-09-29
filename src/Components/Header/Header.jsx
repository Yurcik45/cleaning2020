import React from "react";
import './Header.sass'
import {HashLink as Link} from 'react-router-hash-link'

const Header = props => {
    const navItems = [
        {
            link: '/#home',
            textUA: 'ГОЛОВНА',
            textEN: 'HOME'
        },
        {
            link: '/#about',
            textUA: 'ПРО НАС',
            textEN: 'OF US'
        },
        {
            link: '/#price',
            textUA: 'ЦІНИ',
            textEN: 'PRISE'
        },
        {
            link: '/#gallery',
            textUA: 'ГАЛЕРЕЯ РОБІТ',
            textEN: 'GALLERY'
        },
        {
            link: '/#contacts',
            textUA: 'КОНТАКТИ',
            textEN: 'CONTACTS'
        }
    ]
    return (
        <div
            className={ props.scroll < 100 ? 'HeaderContainer' : 'HeaderContainer topNull' }>
            <div className='LogoContainer'><Link to='/#home'><p>Cleaning2020.com</p></Link></div>
            <div className='LinksContainer'>
                <ul>
                    {
                        navItems.map(( navItem,key) => {
                            return (
                                <li
                                    key={ key }
                                    // onClick={ () => closeNav() }
                                >
                                    <Link to={ navItem.link }>
                                        { navItem.textEN }
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
};

export default Header;