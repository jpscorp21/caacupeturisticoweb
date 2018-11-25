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
                <Navbar color="dark" dark expand="md">
                    <Link href='/'>
                        <NavbarBrand style={NavbarBrandStyle}>Aplicacion</NavbarBrand>
                    </Link>
                    <NavbarToggler onClick={this.toggle}></NavbarToggler>
                    <Collapse isOpen={ isOpen } navbar>
                        <Nav className="mr-auto" navbar style={NavStyle}>

                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                Archivo
                                </DropdownToggle>
                                <DropdownMenu right>
                                <Link href='/blog'>
                                    <DropdownItem>
                                        Blog
                                    </DropdownItem>
                                </Link>
                                
                                <Link href='/pais'>
                                    <DropdownItem>
                                        Pais
                                    </DropdownItem>
                                </Link>
                                </DropdownMenu>
                            </UncontrolledDropdown>                            

                        </Nav>
                        <Nav className="ml-auto" navbar style={NavStyle}>                            
                            <NavItem>
                                <Link href='/acercade'>
                                    <NavLink>Acerca de</NavLink>
                                </Link>     
                            </NavItem>
                            <NavItem>
                                <Link href='/ayuda'>
                                    <NavLink>Ayuda</NavLink>
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