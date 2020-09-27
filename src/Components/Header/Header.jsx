import React from "react";
import './Header.sass'

const Header = props => {

    return (
        <div
            className={
                props.scroll < 100 ?
                        'HeaderContainer'
                        : 'HeaderContainer topNull'
            }>
            <div className='LogoContainer'><p>Cleaning2020.com</p></div>
            <div className='LinksContainer'>
                <ul>
                    <li>HOME</li>
                    <li>PRISE</li>
                    <li>GALLERY</li>
                    <li>OF US</li>
                    <li>CONTACTS</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;