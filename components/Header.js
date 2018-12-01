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
    color: 'white',
    cursor: 'pointer'
}

const NavStyle = {
    cursor: 'pointer'
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
                <Navbar color="success" dark expand="md">
                    <Link href='/'>
                        <NavbarBrand style={NavbarBrandStyle}>Caacupé Turístico</NavbarBrand>
                    </Link>
                    <NavbarToggler onClick={this.toggle}></NavbarToggler>
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
            </div>
        )
    }
}

export default Header;