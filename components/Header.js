import React, { Component } from 'react';
import Link from 'next/link';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Jumbotron   
} from 'reactstrap';


const NavbarBrandStyle = {    
    color: 'green',
    cursor: 'pointer'
}

const NavStyle = {
    cursor: 'pointer'
}

const NavbarStyle = {
    borderBottom: "2px green solid"
}

const NavbarTogglerStyle = {
    color: "white !important",        
}


export class Header extends React.Component {

    constructor() {
        super();
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        }
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {

        const { isOpen } = this.state; 

        return (
            <div>
                <Navbar color="white" expand="md" light style={NavbarStyle}>
                    <img className="img-fluid" src="https://farm5.staticflickr.com/4855/46160425631_86a9a2c44a_m.jpg" width="64" height="64" alt="aprestucor" />
                    <Link href='/'>
                        <NavbarBrand style={NavbarBrandStyle}>Caacupé Turístico</NavbarBrand>
                    </Link>
                    <NavbarToggler className="toggler" onClick={this.toggle}></NavbarToggler>
                    <Collapse isOpen={ isOpen } navbar>                        
                        <Nav className="ml-auto" navbar style={NavStyle}>                            
                            <NavItem>
                                <Link href='/'>
                                    <NavLink>Inicio</NavLink>
                                </Link>     
                            </NavItem>
                            <NavItem>
                                <Link href='/blog'>
                                    <NavLink>Contenido</NavLink>
                                </Link>     
                            </NavItem>
                            <NavItem>
                                <Link href='/contactos'>
                                    <NavLink>Contactos</NavLink>
                                </Link>     
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>                               
                <style jsx>
                {`                
                        .navbar {
                            color: green !important,                            
                        }
                `}
                </style>
            </div>
        )
    }
}

export default Header;