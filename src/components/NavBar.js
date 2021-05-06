import React, { useState } from 'react';
import './../index.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    NavbarText
} from 'reactstrap';

const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/"><p className="mainTitle">Kisaan Fresh 365</p></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <NavbarText><span class="fas fa-camera"></span> <a className="phoneFont" href='https://wa.me/c/919493233615' role="button">+91 9493233615</a></NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;